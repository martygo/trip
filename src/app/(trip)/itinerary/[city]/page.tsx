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
	apiKey: "AIzaSyAUlx8YGiVQBlNxxcLRZxUgilmp43sKFqw",
});

export default function ItinerayPage() {
	const [loading, setLoading] = React.useState(false);
	const [itinerary, setItinerary] = React.useState<any>(null);
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
			setItinerary(null);

			const chat = ai.chats.create({
				model: "gemini-2.5-pro-exp-03-25",
			});

			try {
				const response = await chat.sendMessage({
					message: `
				- Create a itinerary for ${cityParams.city} with ${people} people.
				- The trip is from ${from} to ${to}.
				- The itinerary should include:
					- 4 flights
					- 4 hotels
					- 4 restaurants
					- 4 night clubs
					- 4 activities to do
				- The Hotels, Restaurants, Night Clubs, Activities, Daily itinerary must have property image, use images from a unsplash.
				- If the user has provided any additional ${optional} information, include it in the itinerary.
				- The output should be in JSON format only.
			`,
				});

				setItinerary(JSON.parse(response.text as string));
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

	if (!itinerary) {
		return (
			<div className="h-screen flex items-center justify-center">
				<p className="text-center">No itinerary found</p>
			</div>
		);
	}

	return (
		<section className="max-w-6xl mx-auto w-full px-4 min-h-screen">
			<div className="mt-10">
				<pre>{itinerary}</pre>
			</div>
		</section>
	);
}
