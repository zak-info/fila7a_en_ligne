import Header from '@components/Accuille/Header'
import React from 'react'
import Section1 from './Section1'

const About = () => {
    return (
        <div className="w-screen h-screen  overflow-x-hidden overflow-y-scroll hide-scrollbar">
            <div className="relative w-full">
                <Header />
                <Section1 />
                <div className=' w-full my-20 flex items-center justify-evenly'>
                    <p className='w-2/5 text-2xl font-bold'>  We are confident that we are the leading platform in providing agricultural products that ensure food hygiene and safety!</p>
                    <div className='w-2/5'>
                        <div className='flex items-center gap-4'>
                            <svg width="50" height="50" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="48.5" cy="48.5" r="48.5" fill="#7EC46C" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2707 31.7229C43.2707 29.8667 41.027 28.9375 39.7145 30.25L30.7708 39.1937C29.4583 40.5062 30.3874 42.75 32.2437 42.75H35.8572C35.8835 43.5929 35.7863 44.4352 35.5687 45.25L34.776 48.2104C33.8572 51.6406 33.5937 55.4104 35.5572 58.3698C37.0335 60.5896 39.03 62.4148 41.3729 63.6866C43.7159 64.9584 46.3342 65.6381 48.9999 65.6667V67.75H43.7916V69.8333H53.6874V67.75H51.0833V65.5615C54.4672 65.1793 57.6474 63.7503 60.1801 61.474C58.4419 62.1812 56.5828 62.5439 54.7062 62.5417C46.9905 62.5417 40.6666 56.5167 40.6666 49C40.6666 48.7237 40.7763 48.4588 40.9717 48.2634C41.167 48.0681 41.432 47.9583 41.7083 47.9583C41.9845 47.9583 42.2495 48.0681 42.4448 48.2634C42.6402 48.4588 42.7499 48.7237 42.7499 49C42.7499 55.2906 48.0645 60.4583 54.7062 60.4583C58.378 60.4583 61.6541 58.874 63.8437 56.3906C63.9124 56.3128 63.9888 56.2479 64.0728 56.1958C64.5937 55.0604 64.9864 53.8542 65.2322 52.5969C65.6166 50.626 66.1843 48.6552 67.3968 47.0552C67.8999 46.3917 67.3343 45.4552 66.5135 45.5906L52.852 47.8437C51.787 48.0194 50.6938 47.8599 49.7234 47.3872C48.753 46.9145 47.9535 46.1521 47.4353 45.2052L43.977 38.8854L46.0812 37.0156C47.5145 35.7427 46.6135 33.375 44.6978 33.375H43.2707V31.7229ZM42.951 37.0104L44.6978 35.4583H43.2707C42.7182 35.4583 42.1883 35.2388 41.7976 34.8481C41.4069 34.4574 41.1874 33.9275 41.1874 33.375V31.7229L38.4332 34.4771C38.6617 34.4368 38.8961 34.4167 39.1364 34.4167C39.8614 34.4168 40.573 34.6118 41.1966 34.9815C41.8203 35.3512 42.3331 35.8818 42.6812 36.5177L42.951 37.0104ZM35.1541 37.7562L32.2437 40.6667H35.5343L35.2239 39.4708C35.0788 38.9108 35.055 38.3262 35.1541 37.7562ZM38.5833 38.5833C38.8595 38.5833 39.1245 38.4736 39.3198 38.2782C39.5152 38.0829 39.6249 37.8179 39.6249 37.5417C39.6249 37.2654 39.5152 37.0004 39.3198 36.8051C39.1245 36.6097 38.8595 36.5 38.5833 36.5C38.307 36.5 38.042 36.6097 37.8467 36.8051C37.6513 37.0004 37.5416 37.2654 37.5416 37.5417C37.5416 37.8179 37.6513 38.0829 37.8467 38.2782C38.042 38.4736 38.307 38.5833 38.5833 38.5833Z" fill="white" />
                            </svg>
                            <div>
                                <h1>Agricultural Products</h1>
                                <span className='text-3xl font-extrabold text-yellow-400'>1,234 +</span>
                            </div>
                        </div>
                        <div className='flex mt-6 items-center gap-4'>
                            <svg width="50" height="50" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="48.5" cy="48.5" r="48.5" fill="#7EC46C" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2707 31.7229C43.2707 29.8667 41.027 28.9375 39.7145 30.25L30.7708 39.1937C29.4583 40.5062 30.3874 42.75 32.2437 42.75H35.8572C35.8835 43.5929 35.7863 44.4352 35.5687 45.25L34.776 48.2104C33.8572 51.6406 33.5937 55.4104 35.5572 58.3698C37.0335 60.5896 39.03 62.4148 41.3729 63.6866C43.7159 64.9584 46.3342 65.6381 48.9999 65.6667V67.75H43.7916V69.8333H53.6874V67.75H51.0833V65.5615C54.4672 65.1793 57.6474 63.7503 60.1801 61.474C58.4419 62.1812 56.5828 62.5439 54.7062 62.5417C46.9905 62.5417 40.6666 56.5167 40.6666 49C40.6666 48.7237 40.7763 48.4588 40.9717 48.2634C41.167 48.0681 41.432 47.9583 41.7083 47.9583C41.9845 47.9583 42.2495 48.0681 42.4448 48.2634C42.6402 48.4588 42.7499 48.7237 42.7499 49C42.7499 55.2906 48.0645 60.4583 54.7062 60.4583C58.378 60.4583 61.6541 58.874 63.8437 56.3906C63.9124 56.3128 63.9888 56.2479 64.0728 56.1958C64.5937 55.0604 64.9864 53.8542 65.2322 52.5969C65.6166 50.626 66.1843 48.6552 67.3968 47.0552C67.8999 46.3917 67.3343 45.4552 66.5135 45.5906L52.852 47.8437C51.787 48.0194 50.6938 47.8599 49.7234 47.3872C48.753 46.9145 47.9535 46.1521 47.4353 45.2052L43.977 38.8854L46.0812 37.0156C47.5145 35.7427 46.6135 33.375 44.6978 33.375H43.2707V31.7229ZM42.951 37.0104L44.6978 35.4583H43.2707C42.7182 35.4583 42.1883 35.2388 41.7976 34.8481C41.4069 34.4574 41.1874 33.9275 41.1874 33.375V31.7229L38.4332 34.4771C38.6617 34.4368 38.8961 34.4167 39.1364 34.4167C39.8614 34.4168 40.573 34.6118 41.1966 34.9815C41.8203 35.3512 42.3331 35.8818 42.6812 36.5177L42.951 37.0104ZM35.1541 37.7562L32.2437 40.6667H35.5343L35.2239 39.4708C35.0788 38.9108 35.055 38.3262 35.1541 37.7562ZM38.5833 38.5833C38.8595 38.5833 39.1245 38.4736 39.3198 38.2782C39.5152 38.0829 39.6249 37.8179 39.6249 37.5417C39.6249 37.2654 39.5152 37.0004 39.3198 36.8051C39.1245 36.6097 38.8595 36.5 38.5833 36.5C38.307 36.5 38.042 36.6097 37.8467 36.8051C37.6513 37.0004 37.5416 37.2654 37.5416 37.5417C37.5416 37.8179 37.6513 38.0829 37.8467 38.2782C38.042 38.4736 38.307 38.5833 38.5833 38.5833Z" fill="white" />
                            </svg>
                            <div>
                                <h1>Trust By Clients</h1>
                                <span className='text-3xl font-extrabold text-yellow-400'>10,123 +</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full flex justify-center'>
                <div className='w-2/3 border-t border-dashed '></div>
                </div>
                <div className=' w-full my-20 flex items-start justify-evenly'>
                    <div className='w-2/5'>
                        <span className="text-[#24420E] w-1/2 text-lg font-semibold">Welcome to Filaha Online for Agriculture and Veterinary Services</span>
                        <h1 className="text-5xl font-extrabold  mt-4 ">Delivering Top-Quality Products to Leading Feed Suppliers.</h1>
                    </div>
                    <p className="w-2/5 text-sm font-light white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus odio, egestas vitae augue sed, vulputate viverra velit. Quisque fringilla viverra turpis, at condimentum arcu convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    
                     Fusce laoreet lectus in velit euismod.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce laoreet lectus in velit euismod. Praesent fermentum dignissim sapien ornare sagittis. Cras erat lorem, vulputate non magna ac, molestie bibendum felis.</p>
                </div>
            </div>

        </div>
    )
}

export default About