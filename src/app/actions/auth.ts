"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(data: any) {
	const cookieStore = await cookies();
	const storedUser = cookieStore.get("user");

	const email = data.email;
	const password = data.password;

	if (!storedUser) {
		cookieStore.set("auth", JSON.stringify({ auth: false }));
		throw new Error("User not found");
	}

	const user = JSON.parse(storedUser.value);

	if (!user) {
		cookieStore.set("auth", JSON.stringify({ auth: false }));
		throw new Error("User not found");
	}

	if (user.email === email && user.password === password) {
		cookieStore.set(
			"auth",
			JSON.stringify({
				auth: true,
				user: {
					email: user.email,
					name: user.name,
				},
			}),
		);

		redirect("/");
	}

	cookieStore.set("auth", JSON.stringify({ auth: false }));
	throw new Error("Invalid credentials");
}

export async function register(data: any) {
	const cookieStore = await cookies();

	cookieStore.set(
		"user",
		JSON.stringify({
			email: data.email,
			name: data.name,
			password: data.password,
		}),
	);

	redirect("/login");
}

export async function logout() {
	const cookieStore = await cookies();
	cookieStore.set("auth", JSON.stringify({ auth: false, user: null }));

	redirect("/login");
}
