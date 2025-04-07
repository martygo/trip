"use client";

import React from "react";
import { Search } from "lucide-react";
import slug from "slug";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const cityInput = formData.get("city") as string;

		if (cityInput === "") {
			alert("Please enter a destination.");
			return;
		}

		const sanitizedInput = slug(cityInput, { lower: false }); // Remove any special characters

		redirect(`/itinerary?q=${sanitizedInput}`); // Redirect to the itinerary page with the query parameters
	};

	return (
		<section className="max-w-[1100px] mx-auto w-full px-4 py-12">
			<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
				Find Your Next Trip
			</h2>

			<form className="flex gap-4" onSubmit={handleSearch}>
				<div className="relative flex-grow">
					<Input
						type="text"
						placeholder="Place or Destination to go"
						name="city"
						className="w-full border-gray-300 rounded-md pl-4 pr-10 py-4"
					/>
					<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white h-5 w-5" />
				</div>
				<Button className="btn-default" type="submit">
					Search
				</Button>
			</form>
		</section>
	);
}
