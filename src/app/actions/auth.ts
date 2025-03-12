"use server";

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
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Mock validation - replace with actual authentication
	if (data.email === "test@example.com" && data.password === "password") {
		return {
			success: true,
			user: { id: "1", email: data.email, name: "Test User" },
		};
	}

	throw new Error("Invalid credentials");
}

export async function register(data: RegisterFormData) {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Mock registration - replace with actual registration logic
	return {
		success: true,
		user: { id: "1", email: data.email, name: data.name },
	};
}

export async function logout() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return { success: true };
}
