import React from 'react'
import ConsultingsCard from './ConsultingsCard'
import JustText from '@components/just-text/JustText'

const Consultings = ({consultings}) => {
  const comps = [
    { id: '1', name: "Comp 1",descriptions:'healthy products, advanced technology, and sustainable farming solutions. Farmers, consumers, and businesses appreciate our efficiency, innovation, and commitment to quality.', address: "algerie - blida", phone: '+213 540 123 234',image:"/images/bg-2.png" },
    { id: '2', name: "Comp 2",descriptions:'healthy products, advanced technology, and sustainable farming solutions. Farmers, consumers, and businesses appreciate our efficiency, innovation, and commitment to quality.', address: "algerie - bouira", phone: '+213 550 345 345',image:"/images/bg-6.png" },
    { id: '3', name: "Comp 3",descriptions:'healthy products, advanced technology, and sustainable farming solutions. Farmers, consumers, and businesses appreciate our efficiency, innovation, and commitment to quality.', address: "algerie - anaba", phone: '+213 555 234 456',image:"/images/bg-7.png" },
    { id: '4', name: "Comp 4",descriptions:'healthy products, advanced technology, and sustainable farming solutions. Farmers, consumers, and businesses appreciate our efficiency, innovation, and commitment to quality.', address: "algerie - stif", phone: '+213 770 123 234',image:"/images/bg-8.png" },
  ]
  return (
    <div className='w-full '>
      <h1 className=' font-bold text-xl'><JustText text={"consulting_page"} /></h1>
      <div className='w-full mt-16 flex flex-col gap-4'>
        {
          consultings?.map((consulting, index) => (
            <ConsultingsCard key={index} consulting={consulting} />
          ))
        }
        {/* <CompanyCard  /> */}
      </div>
    </div>
  )
}

export default Consultings