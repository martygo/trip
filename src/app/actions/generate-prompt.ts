import { GoogleGenAI } from "@google/genai";

export async function generatePrompt() {
	const ai = new GoogleGenAI({
		apiKey: "AIzaSyAUlx8YGiVQBlNxxcLRZxUgilmp43sKFqw",
	});

	const generationConfig = {
		temperature: 1,
		topP: 0.95,
		topK: 64,
		maxOutputTokens: 65536,
		responseModalities: [],
		responseMimeType: "application/json",
	};

	const chat = ai.chats.create({
		model: "gemini-2.5-pro-exp-03-25",
	});

	const response = await chat.sendMessage({
		message: `Create a 7-day itinerary for London with 1 people on format JSON`,
	});

	console.log("Response:", response.text);
}
