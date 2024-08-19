import CallToAction from "@/components/callToAction";
import FAQ from "@/components/faq";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Signin from "@/components/signin";
import Signup from "@/components/signup";
import Link from "next/link";


export default function Landing() {
  return (
    <main className='bg-blue-900 '>
      <Navbar />
      <Herosection />
      {/* <Signin />
      <Signup /> */}
      <Feature />
       {/* Testimonials Section */}
       <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
          <p className="italic">"This app has revolutionized my English learning experience!"</p>
          <p className="italic">"The AI-generated flashcards are spot on."</p>
        </section>
        <Pricing />
        <CallToAction />
       <div className=" flex justify-center my-20">
        <FAQ />
       </div>
        <Footer />
    </main>
    
  );
}
