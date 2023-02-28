import React from 'react'
import { Header,Template } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const menu = [{
  name: 'Information System of Harvest and Transportation PT. Tri Bakti Sarimas',
  description: 'Optimize fields operational on oil palm plantation company',
  slug: 'tbs',
  thumbnail: '/assets/images/portfolio/tbs.jpg'
}, {
  name: 'WarungSegar Application',
  description: 'Easy shopping for your kitchen needs in Pekanbaru City',
  slug: 'warungsegar',
  thumbnail: '/assets/images/portfolio/warungsegar.jpg'
},{
  name: 'SPRIPIM Polda Riau',
  description: 'SPRIPIM Polda Riau is an archive data collection, financial management, and scheduling  management',
  slug: 'spripim',
  thumbnail: '/assets/images/portfolio/spripim.png'
}, {
  name: 'Smart Center Indonesia',
  description: 'Smart Center Indonesia is a Tutoring Center, Private Lessons to Home, Courses for All Levels of Education and the General',
  slug: 'sci',
  thumbnail: '/assets/images/portfolio/sci.png'
}, {
  name: 'Etangkahan',
  description: 'E-Tangkahan is a modern online shopping application based on android and iOS in Medan City',
  slug: 'etangkahan',
  thumbnail: '/assets/images/portfolio/etangkahan.jpg'

}, {
  name: 'AR Culture Education Technology',
  description: 'Augmented Reality application that explains various historical places in Riau Province',
  slug: 'ar-culture-education-technology',
  thumbnail: '/assets/images/portfolio/cet.jpg'

}, {
  name: 'STEM Indonesia',
  description: 'Learning media that can be used for various levels of formal education or other non-formal education',
  slug: 'stem-indonesia',
  thumbnail: '/assets/images/portfolio/stem.jpg'

}, ]

const PortfolioItem = ({ item }) => {
  return <Link href={`/portfolio/${item.slug}`}>
    <a className='flex flex-col h-full items-center'>
      <div className="w-72 h-72 md:w-[280px] md:h-[280px] lg:w-[240px] lg:h-[240px] xl:w-[240px] xl:h-[240px] 2xl:h-[280px] 2xl:w-[280px] relative relative shadow-lg rounded-lg">
        <div className="bg-cover bg-center text-center z-0 rounded-lg">
          <Image 
            src={item.thumbnail} 
            layout='fill'
            className='rounded-lg'
            objectFit='cover'/>
        </div>
        <div className="opacity-0 rounded-lg hover:opacity-90 px-3 hover:bg-orange-500 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white font-semibold">
          <p className='font-normal text-center text-sm'>{ item.description }</p>
        </div>
      </div>
      <div className='my-5 w-full'>
        <p className='font-bold text-orange-500 text-center text-sm'>{ item.name }</p>

      </div>
    </a>
  </Link>
}

const Portfolio = () => {
  return (
    <div>
      <Header title='Khadam Ikhwanus Shofa Site' />
      <Template menu='/portfolio'>
        <h2 className='text-orange-500 font-bold text-xl mb-10 mt-5'>MY PORTFOLIO</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10 w-full flex justify-center items-center relative">
          { menu.map((item, index) => 
            <PortfolioItem key={`portfolio_${index}`} item={item} />
          )}
        </div>
      </Template>
    </div>
  )
}

export default Portfolio