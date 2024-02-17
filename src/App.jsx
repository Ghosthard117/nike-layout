import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
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
      <section>
        Services
      </section>
      <section>
        SpecialOffer
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
