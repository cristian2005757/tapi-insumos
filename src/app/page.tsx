import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { PromoBanner } from '@/components/home/PromoBanner'
import { CustomManufacturing } from '@/components/home/CustomManufacturing'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { QualityCards } from '@/components/home/QualityCards'
import { FAQ } from '@/components/home/FAQ'
import { CTAFinal } from '@/components/home/CTAFinal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      <CustomManufacturing />
      <HowItWorks />
      <Testimonials />
      <QualityCards />
      <FAQ />
      <CTAFinal />
    </>
  )
}
