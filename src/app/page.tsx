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
import { EbookSection } from "@/components/sections/EbookSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { InstagramSection } from "@/components/sections/InstagramSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <InstagramSection />
        <WhySection />
        <AchievementsSection />
        <AgencyStorySection />
        <ServicesSection />
        <ClientsSection />
        <TestimonialsSection />
        <EbookSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
