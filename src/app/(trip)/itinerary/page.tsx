import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { PinCalendar } from "@/components/shared/pin-calendar";
import { CityInput } from "@/components/shared/city-input";

import { redirectItinerary } from "@/app/actions/itinerary";

export default function ItineriesPage() {
	return (
		<section className="max-w-6xl mx-auto w-full px-4 min-h-screen">
			<div className="mt-10">
				<h2 className="text-3xl font-bold text-gray-900">Plan your trip</h2>
				<p>Fill in the form below to plan your trip.</p>
			</div>

			<div className="mt-10">
				<form className="space-y-2" action={redirectItinerary}>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<CityInput />

						<div className="space-y-2">
							<Label htmlFor="quantity">
								Number of people <span className="text-red-500">*</span>
							</Label>
							<Input
								id="quantity"
								name="quantity"
								type="number"
								placeholder="Enter the number of people"
								defaultValue={1}
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="quantity">
								Departure / Return date <span className="text-red-500">*</span>
							</Label>
							<PinCalendar />
						</div>
					</div>

					<div className="flex flex-col gap-2 mt-4">
						<Label htmlFor="message">Write additional text (optional)</Label>
						<Textarea placeholder="Type your message here." name="additional" />
					</div>

					<div className="w-full sm:w-[fit-content]">
						<Button className="w-full mt-5" type="submit">
							Generate itinerary
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
