import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/ui/LogoMarquee'
import { Stats } from '@/components/sections/Stats'
import { Sectors } from '@/components/sections/Sectors'
import { Process } from '@/components/sections/Process'
import { Features } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoMarquee />
      <Stats />
      <Sectors />
      <Process />
      <Features />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
