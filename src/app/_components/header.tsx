"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserNav } from "@/components/shared/user-nav";

import useAuth from "@/hooks/useAuth";

export default function Header() {
	const { isAuthenticated } = useAuth();

	return (
		<header className="sticky top-0 z-20 flex justify-between items-center p-4 bg-green-400">
			<div className="flex flex-row-reverse items-center gap-2">
				<Link href="/" className="text-xl font-bold text-white">
					SmartTrip
				</Link>
				<Image
					src="/tes.jpg"
					alt="Logo"
					width={50}
					height={50}
					className="rounded-md object-contain"
				/>
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
