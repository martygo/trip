"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	name: z.string().min(2),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

export async function login(data: LoginFormData) {
	const cookieStore = await cookies();

	if (data.email === "" && data.password === "") {
		cookieStore.set("auth", JSON.stringify({ auth: true }));
		redirect("/");
	}

	cookieStore.set("auth", JSON.stringify({ auth: false }));
	throw new Error("Invalid credentials");
}

export async function register(data: RegisterFormData) {
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
	cookieStore.set("auth", JSON.stringify({ auth: false }));

	redirect("/login");
}
