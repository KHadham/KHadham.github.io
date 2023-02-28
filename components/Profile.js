import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="bg-orange-100 h-full w-full lg:w-2/5  lg:rounded-tr-none relative">
      <div className="h-[350px] lg:h-full w-full  ">
        <Image
          alt='Foto Khadam Ikhwanus Shofa'
          src='/assets/images/foto/safari.png'
          priority={true}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className="absolute bottom-0 p-5 text-white text-center w-full bg-orange-300 rounded-bl-lg">
        <h2 className="font-bold">Khadam Ikhwanus Shofa</h2>
        <h2 className='text-sm font-light'>Mobile Developer</h2>
        
      </div>
    </div>
  )
}

export default Profile