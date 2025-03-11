// "use client"

import Image from "next/image"
import InView from "./InView"

const Social = () => {

    function extractUsernameOrPageId(link) {
        const parts = link.split('?id=');
        return parts.length > 1 ? parts[1] : parts[0].split('/').pop();
    }

    return (
            <InView  class={"bg-[#edf2f8] w-full h-40 grid grid-cols-3  mb-16 md:flex justify-center items-center"} gclassName={"nothing"} hidden={{ opacity: 0, y: 75 }} visible={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href="https://www.facebook.com/profile.php?id=61557121834414" target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/images/f.png" width={50} height={50} alt="" />
                        <h2>facebook</h2>
                    </a>
                </div>
                
                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href="https://www.instagram.com/rinawise09" target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/images/i.webp" width={50} height={50} alt="" />
                        <h2>instagram</h2>
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href="https://twitter.com/rinawise09" target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/images/x.png" width={50} height={50} alt="" />
                        <h2>twiter</h2>
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href={`https://m.me/${extractUsernameOrPageId("https://web.facebook.com/profile.php?id=61557121834414")}`} target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/Icons/messenger.svg" width={50} height={50} alt="" />
                        <h2>messenger</h2>
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href="tg://resolve/0667084564" target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/images/t.png" width={50} height={50} alt="" />
                        <h2>telegram</h2>
                    </a>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:ms-8 transition ease-in-out duration-200 hover:scale-125">
                    <a href="https://wa.me/0667084564" target="_blanc" className="flex flex-col justify-center items-center">
                        <Image src="/images/w.png" width={50} height={50} alt="" />
                        <h2>whatsapp</h2>
                    </a>
                </div>
            </InView>
    )
}

export default Social