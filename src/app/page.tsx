import Header from "./_components/header";
import Faq from "./_components/faq";
import PopularDestinations from "./_components/popular-destinations";
import Hero from "./_components/hero";
import SearchBar from "./_components/search-bar";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<Hero />
			<SearchBar />
			<PopularDestinations />
			<Faq />
		</main>
	);
}
