"use client";

import React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export default function ItineriesPage() {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 20),
	});

	return (
		<section className="max-w-6xl mx-auto w-full px-4 min-h-screen">
			<div className="mt-10">
				<h2 className="text-3xl font-bold text-gray-900">Plan your trip</h2>
				<p>Fill in the form below to plan your trip.</p>
			</div>

			<div className="mt-10">
				<form className="space-y-2">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="quantity">
								Country <span className="text-red-500">*</span>
							</Label>
						</div>

						<div className="space-y-2">
							<Label htmlFor="quantity">
								Number of people <span className="text-red-500">*</span>
							</Label>
							<Input
								id="quantity"
								name="quantity"
								type="number"
								placeholder="Enter the number of people"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="quantity">
								Departure / Return date <span className="text-red-500">*</span>
							</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										id="date"
										variant={"outline"}
										className={cn(
											"w-full justify-start text-left font-normal",
											!date && "text-muted-foreground",
										)}
									>
										<CalendarIcon />
										{date?.from ? (
											date.to ? (
												<>
													{format(date.from, "LLL dd, y")} -{" "}
													{format(date.to, "LLL dd, y")}
												</>
											) : (
												format(date.from, "LLL dd, y")
											)
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										initialFocus
										mode="range"
										defaultMonth={date?.from}
										selected={date}
										onSelect={setDate}
										numberOfMonths={2}
									/>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					<div className="flex flex-col gap-2 mt-4">
						<Label htmlFor="message">Write additional text (optional)</Label>
						<Textarea placeholder="Type your message here." />
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
