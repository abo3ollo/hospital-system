import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Categories from "./_components/Categories";
import TopDoctors from "./_components/TopDoctors";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <Hero/>
        <Stats/>
        <Categories/>
        <TopDoctors/>
      </main>
      
    </div>
  );
}
