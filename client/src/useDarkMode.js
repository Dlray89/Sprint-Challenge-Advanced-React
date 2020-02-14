import { useEffect } from "react";
import { useLocalStorage } from "./hooks/uselocaleStorage";

const useDarkMode = (key, initialValue) => {

    const [dark, setDark] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(dark == true ) {
            document.querySelector('body').classList.add('dark-mode')
        } else{
            document.querySelector('body').classList.remove('dark-mode')
        }

    }, [dark])
    return[dark, setDark]
}

export default useDarkMode;