import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('light')

    const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    // const invertedTheme = theme === 'dark' ? 'light' : 'dark'  COMENTADO PARA PROBAR SIN EL INVERTED

    return (

        // VOLVER A PONER invertedTheme EN VALUE
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }