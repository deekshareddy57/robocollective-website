import { Hero, BentoProducts, CAIPO, Services, RentResell, Blog, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <BentoProducts />
      <CAIPO />
      <Services />
      <RentResell />
      <Blog />
      <Footer />
    </main>
  );
}
