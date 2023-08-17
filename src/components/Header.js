import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function Header(){
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      {/* left */}
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image 
          src="https://i.ibb.co/SPLh928/images.png" 
          alt="instagram_logo" 
          layout="fill"
          className="object-contain"
        />
      </div>   
      <div className="h-24 w-10 relative lg:hidden cursor-pointer">
        <Image 
          src="https://i.ibb.co/5MQkb64/2227.jpg" 
          alt="instagram_logo" 
          layout="fill"
          className="object-contain"
        />
      </div> 
      
      {/* center */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
      </div>
      
      {/* right */}  
      <h1>
        Right side
      </h1>          
    </div> 
  )
}
