import React from "react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-green-950 text-white py-6">
			<div className="container">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image
							src="/tes.jpg"
							alt="Logo"
							width={50}
							height={50}
							className="rounded-md object-contain"
						/>
						<p className="text-[18px]">
							&copy; {new Date().getFullYear()}{" "}
							<span className="font-semibold">SmartTrip.</span>
						</p>
					</div>
					<div className="flex">
						<p className="text-[18px]">Contact: +92 932434349</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
