import { cookies } from "next/headers";
import { useEffect, useState } from "react";

interface AuthState {
	user: {
		id: string;
		email: string;
		name: string;
	} | null;
	isAuthenticated: boolean;
	loading: boolean;
}

const useAuth = () => {
	const [authState, setAuthState] = useState<AuthState>({
		user: null,
		isAuthenticated: false,
		loading: true,
	});

	const cookieStore = cookies();

	useEffect(() => {
		(async () => {
			const storedAuth = await cookieStore.then(
				(cookies) => cookies.get("auth")?.value,
			);

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
		})();
	}, [cookieStore]);

	return authState;
};

export default useAuth;

// This hook can be used in any component to get the authentication state.
// Example usage:
// import useAuth from 'path/to/useAuth';
//
// const { user, isAuthenticated, loading } = useAuth();
//
// if (loading) {
// 	return <p>Loading...</p>;
// }
//
// if (isAuthenticated) {
// 	return <p>Welcome, {user.name}!</p>;
// } else {
// 	return <p>Please log in.</p>;
// }
//
// Note: This is a simplified example. In a real-world application, you would
// want to handle errors and loading states more gracefully. You might also want
// to use a context provider to manage the authentication state globally.
