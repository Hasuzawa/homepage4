import { useState, useEffect } from "react"
import Home from "./Home"
import LoadingPage from "./LoadingPage"
import { motion, AnimatePresence } from "framer-motion"


const Entry = () => {

    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {setLoaded(true)}, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence exitBeforeEnter>
            {(loaded) ?
            <motion.div className="w-screen h-screen bg-red-300"
            initial={{opacity: 1}}
            animate={{ opacity: 1, transition: {duration: 2}}}
            layoutId="0"
        >
            page loaded
        </motion.div>
            
            :
        <LoadingPage
        />
            }
        </AnimatePresence>
    )
}


export default Entry