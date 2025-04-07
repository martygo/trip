"use client";

import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

interface User {
	email: string;
	name: string;
}

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	loading: boolean;
}

const useAuth = () => {
	const [authState, setAuthState] = useState<AuthState>({
		user: null,
		isAuthenticated: false,
		loading: true,
	});

	const cookieStore = useCookies();

	useEffect(() => {
		const storedAuth = cookieStore.get("auth");

		if (storedAuth) {
			try {
				const authData = JSON.parse(storedAuth);
				setAuthState({
					user: authData.user,
					isAuthenticated: authData.auth,
					loading: false,
				});
			} catch (error) {
				setAuthState({
					user: null,
					isAuthenticated: false,
					loading: false,
				});
			}
		} else {
			setAuthState({
				user: null,
				isAuthenticated: false,
				loading: false,
			});
		}
	}, [cookieStore]);

	return authState;
};

export default useAuth;
