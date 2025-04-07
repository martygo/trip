"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { register } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
	const router = useRouter();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setLoading(true);

		const formData = new FormData(event.currentTarget);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		try {
			await register(data);
		} catch (error) {
			setError("Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="container flex h-screen w-full flex-col items-center justify-center">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Create an account
					</h1>
					<p className="text-sm text-muted-foreground">
						Enter your email below to create your account
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" name="name" placeholder="John Doe" required />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" name="password" type="password" required />
					</div>

					{error && <p className="text-sm text-red-500">{error}</p>}
					<Button className="w-full" type="submit" disabled={loading}>
						{loading ? "Creating account..." : "Create account"}
					</Button>
				</form>

				<p className="px-8 text-center text-sm text-muted-foreground">
					<Link
						href="/login"
						className="hover:text-brand underline underline-offset-4"
					>
						Already have an account? Sign In
					</Link>
				</p>
			</div>
		</div>
	);
}
