import Image from 'next/image'

export default function Header(){
  return (
    <div>
      {/* left */}
      <div className="">
        <div className="">
          <Image 
            src="https://i.ibb.co/SPLh928/images.png" 
            alt="instagram_logo" 
            layout="fill"
            className="object-contain"
          />
        </div>        
      </div>
      {/* center */}
      {/* right */}
    </div>
  )
}
