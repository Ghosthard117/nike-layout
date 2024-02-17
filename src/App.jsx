import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import SuperQuality from './sections/SuperQuality'

export default function App () {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section>
        CustomerReviews
      </section>
      <section>
        Subscribe
      </section>
      <section>
        Footer
      </section>
    </main>
  )
}
