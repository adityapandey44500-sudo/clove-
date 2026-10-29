import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { Benefits } from "@/components/Benefits";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { Comparison } from "@/components/Comparison";
import { Uses } from "@/components/Uses";
import { Testimonials } from "@/components/Testimonials";
import { Wholesale } from "@/components/Wholesale";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-50 text-ink-900">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Story />
          <Benefits />
          <Products />
          <Process />
          <Comparison />
          <Uses />
          <Testimonials />
          <Wholesale />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}
