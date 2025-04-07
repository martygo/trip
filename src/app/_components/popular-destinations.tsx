import React from "react";

import { CityCard, CityCardProps } from "@/components/shared/city-card";

export const destinations: CityCardProps[] = [
	{
		city: "London",
		country: "UK",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=600&h=600&s=1",
	},
	{
		city: "Barcelona",
		country: "Spain",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/5d/da/caption.jpg?w=600&h=600&s=1",
	},
	{
		city: "Paris",
		country: "France",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=600&h=600&s=1",
	},
	{
		city: "Rome",
		country: "Italy",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/6c/08/caption.jpg?w=600&h=600&s=1",
	},
	{
		city: "Dubai",
		country: "UAE",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/78/84/94/dubai-aquarium-underwater.jpg?w=600&h=600&s=1",
	},
	{
		city: "Queenstown",
		country: "New Zealand",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/fb/29/caption.jpg?w=600&h=600&s=1",
	},
	{
		city: "Las Vegas",
		country: "USA",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/34/2d/28/caption.jpg?w=600&h=600&s=1&cx=662&cy=604&chk=v1_8984ddf3493edfb8c896",
	},
	{
		city: "Reykjavik",
		country: "Iceland",
		imageUrl:
			"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/84/4d/17/caption.jpg?w=600&h=600&s=1",
	},
];

export default function PopularDestinations() {
	return (
		<section className="container">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
				You might like these destinations
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{destinations.map((destination, index) => (
					<CityCard
						href={`/itinerary?q=${destination.city}`}
						city={destination.city}
						country={destination.country}
						imageUrl={destination.imageUrl}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
