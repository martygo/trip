"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CityCardProps {
	city: string;
	country: string;
	imageUrl: string;
	href?: string;
	className?: string;
	onClick?: () => void;
}

export function CityCard({
	city,
	country,
	imageUrl,
	href,
	className,
}: CityCardProps) {
	return (
		<Link
			href={href || "#"}
			className={cn(
				"relative overflow-hidden rounded-lg cursor-pointer group block dark:border dark:border-gray-200",
				className,
			)}
		>
			<div className="relative w-full h-full aspect-square">
				<Image
					src={imageUrl || "/placeholder.svg"}
					alt={`${city}, ${country}`}
					fill={true}
					layout="fill"
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-black/20 via-50% to-black/90" />
				<div className="absolute bottom-0 left-0 p-6">
					<h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
						{city}, {country}
					</h2>
				</div>
			</div>
		</Link>
	);
}
