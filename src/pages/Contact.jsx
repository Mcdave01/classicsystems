// components/Contact.js
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default function Contact() {
  return (
    <>
    <NavBar />
    <section id="contact" className="py-20  bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
       
      </div>
    </section>
    <Footer />
</>
  );
}
