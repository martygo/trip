"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserNav } from "@/components/shared/user-nav";

export default function Header() {
	const [isAuthenticated] = React.useState(false);

	return (
		<header className="sticky top-0 z-20 flex justify-between items-center p-4 bg-green-600 border-b border-green-700">
			<div className="text-xl font-bold text-white">
				<Link href="/">SmartTrip</Link>
			</div>
			<div className="flex items-center gap-4">
				<ThemeToggle />
				<Button
					className={`btn-default ${isAuthenticated ? "hidden" : ""}`}
					asChild
				>
					<Link href="/login">Sign in</Link>
				</Button>

				{isAuthenticated && <UserNav />}
			</div>
		</header>
	);
}
