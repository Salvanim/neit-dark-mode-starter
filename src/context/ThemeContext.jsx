import { createContext } from "react";
import { useState, useEffect } from "react";
export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff'
    },
    dark: {
        foreground: '#fff',
        background: '#242526'
    }
};

export const ThemeContext = createContext({
    theme: {},
    toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((preValue) => {
            const newTheme = preValue === themes.dark ? themes.light : themes.dark;
            return newTheme
        });
    };
    
    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme : toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
