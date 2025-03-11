import React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
	return (
		<section className="max-w-[1100px] mx-auto w-full px-4 py-12">
			<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
				Find Your Next Trip
			</h2>

			{/* Search Bar */}
			<div className="flex gap-4">
				<div className="relative flex-grow">
					<Input
						type="text"
						placeholder="Place or Destination to go"
						className="w-full border-gray-300 rounded-md pl-4 pr-10 py-4"
					/>
					<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
				</div>
				<Button className="btn-default">Search</Button>
			</div>
		</section>
	);
}
