import CompaniesMarque from "@/components/CompaniesMarque";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      
      <Header />

      {/* Main content grows */}
      <main className="flex-1">
        <CompaniesMarque />
      </main>

      {/* Footer stays at bottom */}
      <Footer />

    </div>
  );
}
