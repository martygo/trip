"use server";

import { redirect } from "next/navigation";

export async function redirectItinerary(formData: FormData) {
	const city = formData.get("city") as string;
	const quantity = formData.get("quantity") as string;
	const additional = formData.get("additional") as string;
	const departureDate = formData.get("departureDate") as string;
	const returnDate = formData.get("returnDate") as string;

	const hasAdditional =
		additional.length > 0 ? `&additional=${additional}` : "";

	redirect(
		`/itinerary/${city}?numberOfPeople=${quantity}&departureDate=${departureDate}&returnDate=${returnDate}${hasAdditional}`,
	); // Redirect to the itinerary page with the query parameters
}
