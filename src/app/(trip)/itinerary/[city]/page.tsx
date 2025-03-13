"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams, useParams } from "next/navigation";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const categories = [
	{
		title: "Dom Barriga",
		image:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/48/26/9d/caption.jpg?w=500&h=500&s=1",
		alt: "Interior of an upscale restaurant with wooden furnishings and bar area",
	},
	{
		title: "Monarka",
		image:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/48/26/9d/caption.jpg?w=500&h=500&s=1",
		alt: "Golden Gate Bridge in San Francisco with a beach view",
	},
	{
		title: "Casa do Pão de Queijo",
		image:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/48/26/9d/caption.jpg?w=500&h=500&s=1",
		alt: "Cityscape with cable cars and historic buildings",
	},
	{
		title: "Yummy",
		image:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/48/26/9d/caption.jpg?w=500&h=500&s=1",
		alt: "Angkor Wat temple with its reflection in water",
	},
];

export default function ItinerayPage() {
	const searchParams = useSearchParams();

	const cityParams = useParams<{ city: string }>();
	const numberOfPeopleParams = searchParams.get("numberOfPeople");
	const startDateParams = searchParams.get("startDate");
	const endDateParams = searchParams.get("endDate");
	const opcionalContentParams = searchParams.get("opcional");

	return (
		<section className="max-w-6xl mx-auto w-full px-4 min-h-screen">
			<div className="mt-10">
				<h2 className="text-3xl font-bold text-gray-900">
					Your Itinerary for {cityParams.city.toUpperCase()}
				</h2>
				<p>
					Bellow you will find a list of your activities for your trip to{" "}
					<span className="font-bold">{cityParams.city.toUpperCase()}</span>.
				</p>
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
						{categories.map((category, index) => (
							<CarouselItem
								key={index}
								className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
							>
								<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
									<Image
										src={category.image}
										alt={category.alt}
										width={300}
										height={350}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
										{category.title}
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
						{categories.map((category, index) => (
							<CarouselItem
								key={index}
								className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
							>
								<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
									<Image
										src={category.image}
										alt={category.alt}
										width={300}
										height={350}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
										{category.title}
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
						{categories.map((category, index) => (
							<CarouselItem
								key={index}
								className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
							>
								<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
									<Image
										src={category.image}
										alt={category.alt}
										width={300}
										height={350}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
										{category.title}
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
						{categories.map((category, index) => (
							<CarouselItem
								key={index}
								className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
							>
								<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
									<Image
										src={category.image}
										alt={category.alt}
										width={300}
										height={350}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
										{category.title}
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
						{categories.map((category, index) => (
							<CarouselItem
								key={index}
								className="relative md:basis-1/2 lg:basis-1/4 pl-2 rounded-lg"
							>
								<div className="relative min-w-[200px] h-[250px] flex-shrink-0">
									<Image
										src={category.image}
										alt={category.alt}
										width={300}
										height={350}
										className="object-cover w-full h-full"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">
										{category.title}
									</h3>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="flex sm:hidden ml-[5rem]" />
					<CarouselNext className="flex sm:hidden mr-[5rem]" />
				</Carousel>
			</div>
		</section>
	);
}
