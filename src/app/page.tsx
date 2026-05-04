import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { WhySection } from "@/components/sections/WhySection"
import { AchievementsSection } from "@/components/sections/AchievementsSection"
import { AgencyStorySection } from "@/components/sections/AgencyStorySection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ClientsSection } from "@/components/sections/ClientsSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <WhySection />
        <AchievementsSection />
        <AgencyStorySection />
        <ServicesSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
