import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('ligth')

    const switchTheme = () => setTheme(theme === 'dark' ? 'ligth' : 'dark')

    const invertedTheme = theme === 'dark' ? 'ligth' : 'dark'

    return (
        <ThemeContext.Provider value={{ theme, invertedTheme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }