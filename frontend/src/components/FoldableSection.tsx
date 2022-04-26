import { useState, useEffect } from "react"
import { VscTriangleLeft } from "react-icons/vsc"
import { motion, AnimatePresence, LayoutGroup, Transition, Variants} from "framer-motion"

interface FoldableSectionProps {
    title: string
}

// for content within section
const linear: Transition = {
    duration: 0.5,
    
}



const appearAnimation: Variants = {
    "hidden": {
        opacity: 0,
        y: -20,
        transition: linear
    },
    "visible": {
        opacity: 1,
        y: 0,
        transition: linear
    }
}

// for section
const smallBounce: Transition = {
    type: "sptring",
    duration: 1,
    damping: 10,
    stiffness: 100,
    // when: "beforeChildren",
    delayChildren: 1
}


const foldAnimation: Variants = {
    "visible": {
        transition: smallBounce
    }
}






const FoldableSection = (props: FoldableSectionProps) => {
    const [folded, setFolded] = useState<boolean>(false)
    const toggleFolded = () => setFolded(!folded)

// add a pseduo element arrow after heading name
    return (
        <LayoutGroup>
        <motion.section
            initial={false}
            animate="visible"
            layout
            id="introduction"
            className="bg-green-300"
            // variants={foldAnimation}
        >
                <motion.h1 
                    className="text-3xl cursor-pointer text-center relative"
                    onClick={toggleFolded}
                    layout  // prevent distortion
                >
                    {props.title}
                    {/* <VscTriangleLeft
                        size={24}
                        className="absolute"
                    /> */}
                </motion.h1>
                <AnimatePresence>    
            {!folded &&
                // innerContent here
                <motion.div
                    initial={true}
                    animate="visible"
                    exit="hidden"
                    variants={appearAnimation}
                >
                    <h1>testing</h1>
                    <h1>testing</h1>
                    <h1>testing</h1>
                    <h1>testing</h1>
                    <h1>testing</h1>
                </motion.div>
            }
            </AnimatePresence>
        </motion.section>
        </LayoutGroup> // this LayoutGroup should be placed outside of every Foldable Section
    )
}





export default FoldableSection