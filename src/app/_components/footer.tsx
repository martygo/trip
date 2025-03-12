import React from "react";

export default function Footer() {
	return (
		<footer className="bg-green-950 text-white py-6">
			<div className="container">
				<div className="flex justify-between">
					<p className="text-[18px]">
						&copy; {new Date().getFullYear()}{" "}
						<span className="font-semibold">SmartTrip.</span>
					</p>
					<p className="text-[18px]">Contact: +92 932434349</p>
				</div>
			</div>
		</footer>
	);
}
