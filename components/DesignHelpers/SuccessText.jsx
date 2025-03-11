import { AnimatePresence,motion } from 'framer-motion'


const SuccessText = ({text}) => {
    return (
        <AnimatePresence mode='wait' >
            <motion.p initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1,  y: 0 }}
                exit={{ opacity: 0.1, y: -10 }}
                transition={{ duration: 0.4 }}
                className='w-full  text-xs text-green-500 flex items-center mt-1 gap-1'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="cl-internal-1sany6l w-4 h-4"><path fill="currentColor" fillRule="evenodd" d="M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0Zm-5.6 3.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7 3a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 1.6 0V3.8A.8.8 0 0 0 7 3Z" clipRule="evenodd"></path></svg> */}
                <i class="ri-checkbox-circle-fill text-lg"></i>
                {text}
            </motion.p>
        </AnimatePresence>
    )
}

export default SuccessText