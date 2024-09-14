import { useEffect, useRef } from "react"
import detectDarkMode from "../../utils/detectDarkMode"
import { useLocalStorage } from "../../utils/useLocalStorage"

import sun from "./../../img/day-mode.png"
import moon from "./../../img/night-mode.png"

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" width="16px" height="16px"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" width="16px" height="16px"/>
        </button>
    )
}

export default BtnDarkMode;
