'use client'

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
          <h1 className="text-gray-600  mt-6">Products</h1>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
            className="w-12 h-12 rounded-full bg-green-200 mt-6"><i className="ri-price-tag-3-line text-xl text-green-500"></i>
          </motion.button>
          <span className="font-bold text-gray-700 text-xl mt-8">0</span>
          <span className="text-gray-400 mt-2 mb-4">Start now</span>

        </div>
        <div className="w-1/2 md:w-1/2  ms-8  rounded-3xl bg-white shadow-md flex flex-col justify-evenly items-center ">
          <h1 className=" text-gray-600  mt-6">Companies</h1>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
            className="w-12 h-12 rounded-full bg-violet-200 mt-6"><i className="ri-bookmark-line text-xl text-violet-500"></i>
          </motion.button>
          <span className="font-bold text-gray-700 text-xl mt-8">0</span>
          <span className="text-gray-400 mt-2 mb-4">Start now</span>

        </div>
      </div>
      <div className=" w-full min-h-48 mt-8 rounded-3xl bg-white shadow-md flex flex-col justify-evenly items-center">
        <h1 className=" text-gray-600  mt-6">Vitirians</h1>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
          className="w-12 h-12 rounded-full bg-orange-200 mt-6"><i className="ri-user-line text-xl text-orange-500"></i>
        </motion.button>
        <span className="font-bold text-gray-700 text-xl mt-6">1</span>
        <span className="text-gray-400 mt-2 mb-4">0 online</span>
      </div>


      {/* <div className="w-full mt-8 bg-white rounded-3xl">
                  <h1 className="mt-4 text-lg uppercase  ms-2">employees</h1>

                  <table className="w-full mt-4 text-xs text-left rtl:text-right rounded-md text-gray-500 ">
                      <thead className="text-xs text-gray-700 mx-2 uppercase bg-gray-100 ">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Type
                              </th>

                          </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                  <motion.button
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.3, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                                      className="w-12 h-12 rounded-full bg-orange-200"><i className="ri-user-line text-xl text-orange-500"></i>
                                  </motion.button>
                                  <div className="ps-3">
                                      <div className="text-base font-semibold">Neil Sims</div>
                                      <div className="font-normal text-gray-500">0795912431</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4">
                                  React Developer
                              </td>


                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <motion.button
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.3, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                                      className="w-12 h-12 rounded-full bg-orange-200"><i className="ri-user-line text-xl text-orange-500"></i>
                                  </motion.button>
                                  <div className="ps-3">
                                      <div className="text-base font-semibold">Bonnie Green</div>
                                      <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4">
                                  Designer
                              </td>

                          </tr>

                      </tbody>
                  </table>
              </div>

              <div className="mt-8 bg-white  rounded">
                  <h1 className="mt-4 text-lg uppercase  ms-2">products</h1>

                  <table className="w-full mt-4 text-xs text-left rtl:text-right rounded-md text-gray-500 ">
                      <thead className="text-xs text-gray-700 mx-2 uppercase bg-gray-100 ">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Product
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  qte
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Status
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                  <motion.button
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.3, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                                      className="w-12 h-12 rounded-full bg-green-200"><i className="ri-price-tag-3-line text-xl font-light text-green-500"></i>
                                  </motion.button>
                                  <div className="ps-3">
                                      <div className="text-base font-semibold">product 1</div>
                                      <div className="font-normal text-gray-500">group 1</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4">
                                  23 pieces
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                  </div>
                              </td>

                          </tr>


                      </tbody>
                  </table>
              </div> */}
    </div>


  </div>
  )
}

export default Home