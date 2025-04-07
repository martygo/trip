import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
	return (
		<section className="container py-20">
			<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
				Frequently Asked Questions
			</h2>

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-[16px]">
						What is SmartTrip?
					</AccordionTrigger>
					<AccordionContent className="text-[16px]">
						SmartTrip is a platform that helps you plan your next trip. We
						provide information on events, conferences, and other activities
						around the world.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="text-[16px]">
						How do I search for events?
					</AccordionTrigger>
					<AccordionContent className="text-[16px]">
						You can use the search bar on the homepage to search for events by
						place or destination.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="text-[16px]">
						Can I book tickets through SmartTrip?
					</AccordionTrigger>
					<AccordionContent className="text-[16px]">
						No, SmartTrip is a platform for information only. You will need to
						visit the official website of the event to book tickets.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="text-[16px]">
						How can I contact support?
					</AccordionTrigger>
					<AccordionContent className="text-[16px]">
						You can contact support by sending an email to nick@gmail.com
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
