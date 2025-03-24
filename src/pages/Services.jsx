// components/Services.js
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import Training from '@/components/Training'
import Project from '@/components/Project'
import Consulting from '@/components/Consulting'
import ServicesBanner from '@/components/ServicesBanner'
export default function Services() {
  return (
    <>
      <NavBar />
      <ServicesBanner />
      <section id="services" className="py-20 bg-gray-100">
       
        <Project />
        <Consulting />
        <Training />
      </section>
      <Footer />
    </>
  );
}