"use client";

import React from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { GoogleGenAI } from "@google/genai";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const ai = new GoogleGenAI({
	apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY as string,
});

export default function ItinerayPage() {
	const [loading, setLoading] = React.useState(false);
	const [itineraries, setItineraries] = React.useState<any>(null);
	const [error, setError] = React.useState<string | null>(null);

	const searchParams = useSearchParams();

	const cityParams = useParams<{ city: string }>();
	const people = searchParams.get("numberOfPeople") as string;
	const from = searchParams.get("departureDate") as string;
	const to = searchParams.get("returnDate") as string;
	const optional = searchParams.get("opcional");

	React.useEffect(() => {
		async function generateItinerary() {
			setLoading(true);
			setError(null);
			setItineraries(null);

			const chat = ai.chats.create({
				model: "gemini-2.5-pro-exp-03-25",
				config: {
					temperature: 0.5,
					maxOutputTokens: 65536,
					topK: 64,
					topP: 0.95,
					responseMimeType: "application/json",
				},
			});

			try {
				const response = await chat.sendMessage({
					message: `
				- Create a itinerary for ${cityParams.city} with ${people} people.
				- The trip is from ${from} to ${to}.
				- The itinerary should include:
					- 1 flights
					- 2 hotels
					- 2 restaurants
					- 2 night clubs
					- 3 activities to do
				- The Hotels, Restaurants, Night Clubs, Activities, Daily itinerary must have property image, use images from a unsplash.
				- If the user has provided any additional ${optional} information, include it in the itinerary.
				- The output should be in JSON format only. The JSON should have the following structure:
				{
					"trip_details": {
						"destination": "string",
						"start_date": "string",
						"end_date": "string",
						"travelers": "number",
						"notes": "string"
					},
					"itinerary": {
						"flights": [
							{
								"id": "string",
								"airline": "string",
								"departure_airport": "string",
								"arrival_airport": "string",
								"price": "number",
								"image": "string"
							}
						],
						"hotels": [
							{
								"id": "string",
								"name": "string",
								"address": "string",
								"description": "string",
								"image": "string"
							}
						],
						"restaurants": [
							{
								"id": "string",
								"name": "string",
								"address": "string",
								"image": "string"
							}
						],
						"night_clubs": [
							{
								"id": "string",
								"name": "string",
								"address": "string",
								"image": "string"
							}
						],
						"activities": [
							{
								"id": "string",
								"name": "string",
								"location": "string",
								"description": "string",
								"image": "string"
							}
						],
						"daily_itinerary": [
							{
								"day": "number",
								"date": "string",
								"theme": "string",
								"image": "string",
								"events": [
									{
										"time": "string",
										"description": "string"
									}
								]
							}
						],
					additionalNullInfo: string
				}`,
				});

				setItineraries(JSON.parse(response.text as string));
			} catch (error) {
				setError("Error generating itinerary");
			} finally {
				setLoading(false);
			}
		}

		generateItinerary();
	}, [cityParams.city, from, optional, people, to]);

	if (loading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<p className="text-center">Loading...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="h-screen flex items-center justify-center">
				<p className="text-center text-red-500">{error}</p>
			</div>
		);
	}

	if (!itineraries) {
		return (
			<div className="h-screen flex items-center justify-center">
				<p className="text-center">No itinerary found</p>
			</div>
		);
	}

	return (
		<section className="max-w-6xl mx-auto w-full px-4 min-h-screen">
			<div className="mt-10">
				<div className="mt-10">
					<h2 className="text-3xl font-bold text-gray-900">
						Your Itinerary for {itineraries.trip_details.destination}
					</h2>
					<p>
						Bellow you will find a list of your activities for your trip to{" "}
						<span className="font-bold">
							{itineraries.trip_details.destination}
						</span>
					</p>
					<p className="mt-2">
						<span className="font-bold">Trip Dates:</span>{" "}
						{itineraries.trip_details.start_date} to{" "}
						{itineraries.trip_details.end_date}
					</p>
					<p className="mt-2">
						<span className="font-bold">Number of People:</span>{" "}
						{itineraries.trip_details.travelers}
					</p>
					{itineraries.trip_details.notes && (
						<p>Note: {itineraries.trip_details.notes}</p>
					)}
				</div>

				{/* cheap flights */}
				<div className="mt-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Cheap Flights ✈️
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.flights.map((flight: any) => (
								<CarouselItem
									key={flight.id}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
										<Image
											src={flight.image}
											alt={flight.airline}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-8 left-8 text-white text-[15px] font-bold">
											{flight.airline} / USD {flight.price} -{" "}
											{flight.departure_airport} / {flight.arrival_airport}
										</h3>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{/* hotels */}
				<div className="mt-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Recommended Hotels 🏨
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.hotels.map((hotel: any) => (
								<CarouselItem
									key={hotel.id}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
										<Image
											src={hotel.image}
											alt={hotel.name}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
											{hotel.name} - {hotel.address}
										</h3>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{/* restaurants */}
				<div className="mt-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Best&apos;s places to Eat 🥘
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.restaurants.map((restaurant: any) => (
								<CarouselItem
									key={restaurant.id}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
										<Image
											src={restaurant.image}
											alt={restaurant.name}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-8 left-8 text-white text-[20px] font-bold">
											{restaurant.name} - {restaurant.address}
										</h3>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{/* Place to fun: bars and drinks  */}
				<div className="mt-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Places to have fun 🏖️
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.night_clubs.map((nightClub: any) => (
								<CarouselItem
									key={nightClub.id}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
										<Image
											src={nightClub.image}
											alt={nightClub.name}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-8 left-8 text-white text-[22px] font-bold">
											{nightClub.name} / {nightClub.address}
										</h3>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{/* Place to walk and entretainment */}
				<div className="my-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Places to know and entertainment 🌃
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.activities.map((activity: any) => (
								<CarouselItem
									key={activity.id}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
										<Image
											src={activity.image}
											alt={activity.name}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-8 left-8 text-white text-[15px] font-bold">
											{activity.name} / {activity.location}
										</h3>
										<p className="text-left text-base text-white">
											{activity.description}
										</p>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{/* daily */}
				<div className="my-10">
					<div className="relative mb-6">
						<h2 className="text-3xl font-bold text-slate-950">
							Daily Itinerary 🗓️
						</h2>
						<div
							className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
							style={{ width: "100%", height: "3px" }}
						></div>
					</div>

					<Carousel className="w-full max-w-6xl">
						<CarouselContent>
							{itineraries.itinerary.daily_itinerary.map((daily: any) => (
								<CarouselItem
									key={daily.day}
									className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
								>
									<div className="relative min-w-[200px] h-[150px] flex-shrink-0">
										<Image
											src={daily.image}
											alt={daily.theme}
											width={300}
											height={350}
											className="object-cover w-full h-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
										<h3 className="absolute bottom-[12rem] left-8 text-white text-[14px] font-bold">
											{daily.theme} / {daily.date}
										</h3>
									</div>
									<ul className="px-8 pb-4 text-[13px] text-gray-700 border">
										{daily.events.map((event: any, index: number) => (
											<li key={index} className="mt-2">
												{event.time} - {event.description}
											</li>
										))}
									</ul>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
						<CarouselNext className="flex sm:hidden mr-[5rem]" />
					</Carousel>
				</div>

				{itineraries.itinerary.additionalNullInfo && (
					<div className="my-10">
						<div className="relative mb-6">
							<h2 className="text-3xl font-bold text-slate-950">
								Additional Information
							</h2>
						</div>

						<p>{itineraries.itinerary.additionalNullInfo}</p>
					</div>
				)}
			</div>
		</section>
	);
}
