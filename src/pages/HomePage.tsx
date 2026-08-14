import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import Benefits from '../components/home/Benefits'
import Fleet from '../components/home/Fleet'
import HomeCta from '../components/home/HomeCta'

function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <Benefits />
      <Fleet />
      <HomeCta />
    </main>
  )
}

export default HomePage