import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="sticky top-0 z-20 flex justify-between items-center p-4 bg-green-600 border-b border-green-700">
			<div className="text-xl font-bold text-white">SmartTrip</div>
			<div className="flex items-center gap-4">
				<Button className="btn-default">Login</Button>
			</div>
		</header>
	);
}
