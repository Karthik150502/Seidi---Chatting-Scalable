import Header from "@/components/app/header";
import Footer from "@/components/app/footer";
import Hero from "@/components/app/hero";
import Features from "@/components/app/features";
import Testimonials from "@/components/app/testimonials";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {

  const session: CustomSession | null = await getServerSession(authOptions);


  return (
    <main className="h-screen overflow-auto pb-80 md:pb-36">
      <Header user={session?.user} />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
