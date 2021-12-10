import { useState, useEffect } from 'react'


const useGetScreenBreakPoint = () => {

    const initialState = getScreenSize(window.innerHeight)
    const [screen, setScreen] = useState(initialState)

    function getScreenSize(current) {
        if (current <= 640) {
            return "sm"
        } else if (current <= 768) {
            return "md"
        } else if (current <= 1024) {
            return "lg"
        } else if (current <= 1280) {
            return "xl"
        } else if (current > 1280) {
            return "2xl"
        }
    }

    useEffect(() => {
        function updateScreen() {
            const newScreen = getScreenSize(window.innerWidth)
            setScreen(newScreen)
        }
        
        window.addEventListener("resize", updateScreen)
        
        return () => {
            window.removeEventListener("resize")
        }
    }, [])

    return screen
}


export default useGetScreenBreakPoint


