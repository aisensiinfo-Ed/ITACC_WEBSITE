import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"
import PreviewGrid from "@/components/PreviewGrid"
import Features from "@/components/Features"
import Tools from "@/components/Tools"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Main content shifted right to account for collapsed sidebar (68px) */}
      <div className="flex flex-col flex-1 transition-all duration-300" style={{ marginLeft: 68 }}>
        <Navbar />
        <main>
          <Hero />
          <PreviewGrid />
          <Features />
          <Tools />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
