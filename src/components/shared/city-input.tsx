"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CityInput() {
	const [city, setCity] = React.useState("");

	const searchParams = useSearchParams();
	const cityParams = searchParams.get("q");

	React.useEffect(() => {
		if (cityParams) {
			setCity(cityParams);
		}
	}, [cityParams]);

	return (
		<div className="space-y-2">
			<Label htmlFor="city">
				City where you will go. <span className="text-red-500">*</span>
			</Label>

			<Input id="city" defaultValue={city.replace("-", " ")} disabled={true} />
			<input name="city" type="hidden" defaultValue={city} />
		</div>
	);
}
