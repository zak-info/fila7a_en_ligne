"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



const InView = (props) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className={props.gclass} ref={ref}>
            <motion.div
            className={props?.class}
                variants={{
                    // hidden: { opacity: 0, y: 75 },
                    // visible: { opacity: 1, y: 0 }
                    hidden: props.hidden,
                    visible: props.visible
                }}
                initial="hidden"
                animate={mainControls}
                transition={props.transition}
            >
                {props.children}
            </motion.div>
         </div>
    )
}

export default InView