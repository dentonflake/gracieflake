import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Publications />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
