import Navbar from './components/Navbar'
import Hero from './sections/Hero'

export default function App () {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section>
        PopularProducts
      </section>
      <section>
        SuperQuality
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
