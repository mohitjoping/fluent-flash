import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (

       <footer className="bg-gray-800 text-white py-6">
       <div className="container mx-auto text-center">
         <nav className="mb-4 space-x-4">
           <Link href="/about">About Us</Link>
           <Link href="/privacy">Privacy Policy</Link>
           <Link href="/terms">Terms of Service</Link>
           <Link href="/support">Support</Link>
         </nav>
         <div className="space-x-4">
           <a href="#">Twitter</a>
           <a href="#">Facebook</a>
           <a href="#">Instagram</a>
         </div>
         <p className="mt-4">© 2024 YourAppName. All rights reserved.</p>
       </div>
     </footer>
  )
}