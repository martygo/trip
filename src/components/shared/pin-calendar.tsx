"use client";

import { useState } from "react";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function PinCalendar() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 20),
	});

	return (
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
								<input
									name="departureDate"
									value={format(date.from, "LLL dd, y")}
									type="hidden"
									readOnly={true}
								/>
								<input
									name="returnDate"
									value={format(date.to, "LLL dd, y")}
									type="hidden"
									readOnly={true}
								/>
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
	);
}
