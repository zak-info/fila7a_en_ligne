'use client'

import JustText from "@components/just-text/JustText"
import BarChart from "@components/Statistics/BarChart"
import LineChart from "@components/Statistics/LineChart"
import PieChart from "@components/Statistics/PieChart"
import { motion } from "@node_modules/framer-motion"

const Home = () => {
    return (
        <div className="h-auto  rounded-3xl flex flex-col md:flex-row justify-center items-start mt-4  md:mx-6 mb-4 pt-4 pb-20">
            <div className="w-full md:w-8/12 pb-24  md:ms-8 bg-white shadow-md rounded-3xl flex flex-col justify-center items-center">
                <div className="w-full md:w-5/6  h-80 md:h-96 ">
                    <LineChart />
                </div>
                <div className="w-full md:w-5/6 h-80 md:h-96  md:mt-4">
                    <BarChart />
                </div>
                <div className="w-full md:w-5/6 h-80 md:h-96 md:mt-4">
                    <PieChart />
                </div>
                <div className="w-full md:w-5/6 h-80 md:h-96 md:mt-4">
                    {/* <TwoLinesChart /> */}
                </div>
            </div>

            <div className="w-full md:w-4/12 h-full mt-4 md:mt-0 flex flex-col justify-start items-start md:mx-8 ">
                <div className=" w-full  flex justify-center ">
                    <div className="w-1/2 md:w-1/2   rounded-3xl bg-white shadow-md flex  flex-col justify-evenly items-center ">
                        <h1 className="text-gray-600  mt-6"><JustText text={"products"} /></h1>
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                            className="w-12 h-12 rounded-full bg-green-200 mt-6"><i className="ri-price-tag-3-line text-xl text-green-500"></i>
                        </motion.button>
                        <span className="font-bold text-gray-700 text-xl mt-8">0</span>
                        <span className="text-gray-400 mt-2 mb-4"><JustText text={"start_now"} /></span>

                    </div>
                    <div className="w-1/2 md:w-1/2  ms-8  rounded-3xl bg-white shadow-md flex flex-col justify-evenly items-center ">
                        <h1 className=" text-gray-600  mt-6"><JustText text={"companies"} /></h1>
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                            className="w-12 h-12 rounded-full bg-violet-200 mt-6"><i className="ri-bookmark-line text-xl text-violet-500"></i>
                        </motion.button>
                        <span className="font-bold text-gray-700 text-xl mt-8">0</span>
                        <span className="text-gray-400 mt-2 mb-4"><JustText text={"start_now"} /></span>

                    </div>
                </div>
                <div className=" w-full min-h-48 mt-8 rounded-3xl bg-white shadow-md flex flex-col justify-evenly items-center">
                    <h1 className=" text-gray-600  mt-6"><JustText text={"vitirians"} /></h1>
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                        className="w-12 h-12 rounded-full bg-orange-200 mt-6"><i className="ri-user-line text-xl text-orange-500"></i>
                    </motion.button>
                    <span className="font-bold text-gray-700 text-xl mt-6">1</span>
                    <span className="text-gray-400 mt-2 mb-4">0 <JustText text={"online"} /></span>
                </div>
            </div>


        </div>
    )
}

export default Home