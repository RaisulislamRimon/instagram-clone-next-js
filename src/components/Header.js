import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function Header(){
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 lg:mx-auto">
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
      <div className="flex space-x-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:inline-flex w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <img src="https://i.ibb.co/4WmZwhH/rimon.jpg" alt="profile-photo" className="h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
      </div>          
    </div> 
  )
}
