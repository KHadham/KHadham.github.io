import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const WarungSegar = () => {

  return (
    <div>
      <Header title='Khadam Ikhwanus Shofa Site' />
      <Template menu='/portfolio'>
        <h2 className='text-orange-500 font-bold text-xl mb-5 mt-5'>WARUNGSEGAR APPLICATION</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/warungsegar-1.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/warungsegar-2.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/warungsegar-3.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Now you don't have to worry anymore that you don't have time to shop at the market to meet your family's cooking needs.
          <br/>
          It's time to shop at WarungSegar, only with a Smartphone we provide all your cooking needs.
          <br/>
          Easy shopping for your kitchen needs in Pekanbaru City
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-orange-500 underline' href="https://play.google.com/store/apps/details?id=pku.warungsegar">
              Click here
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>CTO & Fullstack Developer</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/android-studio.jpg' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Android Studio</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/ci.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>CodeIgniter</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default WarungSegar