import Image from 'next/image'

export default function Header(){
  return (
    <div>
      {/* left */}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
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
        <h1>
          Right side
        </h1>           
      </div>
      {/* center */}
      {/* right */}
    </div>
  )
}
