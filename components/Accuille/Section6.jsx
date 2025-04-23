'use client'

import JustText from "@components/just-text/JustText"
import { Accordion, AccordionItem } from "@node_modules/@nextui-org/accordion/dist"
import Image from "@node_modules/next/image"


const Section6 = () => {


  const motionProps = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: "auto",
        overflowY: "unset",
        transition: {
          height: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 1,
          },
          opacity: {
            easings: "ease",
            duration: 1,
          },
        },
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        overflowY: "hidden",
        transition: {
          height: {
            easings: "ease",
            duration: 0.25,
          },
          opacity: {
            easings: "ease",
            duration: 0.3,
          },
        },
      },
    },
  }



  return (
    <div className="w-full mt-8 flex justify-evenly gap-4 px-20">
      <div className="w-2/5">
        <Image src={"/images/bg-8.png"} width={500} height={1000} className="w-[40vw] h-[80vh]" />
      </div>
      <div className="w-full lg:w-2/5">
        <span className="text-[#24420E] text-lg font-semibold"><JustText text={"read_more"} /></span>
        <h1 className="text-4xl font-semibold  mt-4 "><JustText text={"read_more"} /></h1>
        <p className=" font-light mt-8"><JustText text={"read_more"} /></p>
        <div className="w-full flex justify-between gap-2 mt-8">
          {/* <Accordion variant="splitted" className="w-full ">
                <AccordionItem key="1" aria-label="Accordion 1" className="bg-[#24420E] flex justify-between text-sm text-white rounded-xl " title="How can I track crop growth using modern technologies?">
                Filaha Online is transforming agriculture by combining innovation, sustainability, and quality. We focus on making healthy foods by ensuring fresh, organic, and nutrient-rich products that promote well-being. Through advanced technology, we enhance farming efficiency, increase yields, and adopt eco-friendly practices. Our commitment to reforming agricultural systems drives us to integrate smart solutions, optimize resources, and create a more sustainable and productive future. With Filaha Online, you choose a smarter, healthier, and more sustainable way of farming and food production.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" className="bg-[#24420E] flex justify-between text-sm text-white rounded-xl " title="Does the platform provide sensors to monitor animal health?">
                  Filaha Online is transforming agriculture by combining innovation, sustainability, and quality. We focus on making healthy foods by ensuring fresh, organic, and nutrient-rich products that promote well-being. Through advanced technology, we enhance farming efficiency, increase yields, and adopt eco-friendly practices. Our commitment to reforming agricultural systems drives us to integrate smart solutions, optimize resources, and create a more sustainable and productive future. With Filaha Online, you choose a smarter, healthier, and more sustainable way of farming and food production.
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" className="bg-[#24420E] flex justify-between text-sm text-white rounded-xl " title="Can I send photos or videos to help with the diagnosis?">
                  Filaha Online is transforming agriculture by combining innovation, sustainability, and quality. We focus on making healthy foods by ensuring fresh, organic, and nutrient-rich products that promote well-being. Through advanced technology, we enhance farming efficiency, increase yields, and adopt eco-friendly practices. Our commitment to reforming agricultural systems drives us to integrate smart solutions, optimize resources, and create a more sustainable and productive future. With Filaha Online, you choose a smarter, healthier, and more sustainable way of farming and food production.
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 3" className="bg-[#24420E] flex justify-between text-sm text-white rounded-xl " title="How can I increase my productivity using modern techniques?">
                  Filaha Online is transforming agriculture by combining innovation, sustainability, and quality. We focus on making healthy foods by ensuring fresh, organic, and nutrient-rich products that promote well-being. Through advanced technology, we enhance farming efficiency, increase yields, and adopt eco-friendly practices. Our commitment to reforming agricultural systems drives us to integrate smart solutions, optimize resources, and create a more sustainable and productive future. With Filaha Online, you choose a smarter, healthier, and more sustainable way of farming and food production.
                </AccordionItem>
              </Accordion> */}
          <Accordion motionProps={motionProps} className='w-full flex flex-col items-center  ' variant="splitted" >
            <AccordionItem key="1" className='w-full    bg-gradient-to-r rounded lg:w-[30vw] from-[#24420E] to-[#24420E]   text-white' aria-label="Accordion 1" title={<h1 className='text-white text-md font-semibold'> How can I track crop growth using modern technologies?</h1>}>
              How can I track crop growth using modern technologies?
            </AccordionItem>
            <AccordionItem key="4" className='w-full  bg-gradient-to-r rounded lg:w-[30vw]  from-[#24420E] to-[#24420E]  text-white' aria-label="Accordion 3" title={<h1 className='text-white text-md font-semibold'>Does the platform provide sensors to monitor animal health?</h1>}>
              Does the platform provide sensors to monitor animal health?
            </AccordionItem>
            <AccordionItem key="5" className='w-full  bg-gradient-to-r rounded lg:w-[30vw]  from-[#24420E] to-[#24420E]  text-white' aria-label="Accordion 3" title={<h1 className='text-white text-md font-semibold'>Can I send photos or videos to help with the diagnosis?</h1>}>
              Can I send photos or videos to help with the diagnosis?
            </AccordionItem>
            <AccordionItem key="6" className='w-full  bg-gradient-to-r rounded lg:w-[30vw]  from-[#24420E] to-[#24420E]  text-white' aria-label="Accordion 3" title={<h1 className='text-white text-md font-semibold'>How can I increase my productivity using modern techniques?</h1>}>
              How can I increase my productivity using modern techniques?
            </AccordionItem>
          </Accordion>
        </div>
      </div>

    </div>

  )
}

export default Section6