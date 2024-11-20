import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo"
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo"
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo"
import { CoverDemo } from "@/components/CoverDemo"
import { Footer } from "@/components/Footer"


import { GlobeDemo } from "@/components/GlobeDemo"
import { FloatingNavDemo } from "@/components/NavbarDemo"

import { WobbleCardDemo } from "@/components/WobbleCardDemo"


export default function Home() {
  return (
    <div >
      <FloatingNavDemo/>
           <BackgroundLinesDemo/>

     <CoverDemo/>
     <WobbleCardDemo/>
     <GlobeDemo/> 
       <AnimatedTestimonialsDemo/>
     <AppleCardsCarouselDemo/>
     <Footer/>
  
    </div>
  )
}
