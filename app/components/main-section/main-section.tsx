import React from 'react'
import Hero from './hero/hero'
import Materials from './materials/materials'
import PremiumMaterials from './premium-materials/premium-materials'
import OurWorks from './our-works/our-works'
import Contacts from './contacts/contacts'

export default function MainSection() {
    return (
        <div>
            <div className='flex flex-col items-center m-auto pt-[76px]'>
                <Hero />
                <Materials/>
                <PremiumMaterials/>
                <OurWorks/>
                <Contacts/>
            </div>
        </div>
    )
}
