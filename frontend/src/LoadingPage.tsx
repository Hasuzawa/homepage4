import { motion, AnimatePresence, Variants, Transition } from "framer-motion"

// for fading whole loading page
const fadeAnimation: Variants = {
    "hidden": {
        opacity: 0,
        transition: {
            duration: 2
        }
    },
    "visible": {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}



const LoadingPage = () => {

    return (
            <motion.div
                className="w-screen h-screen bg-blue-200 absolute"
                initial={false}
                animate="visible"
                exit="hidden"
                variants={fadeAnimation}
                layoutId="0"
            >
                <motion.h1>the page is loading</motion.h1>
            </motion.div>
    )
}

export default LoadingPage