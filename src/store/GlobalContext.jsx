import { useState, createContext } from "react";

const initialValue = {
    background: "green",
    setBackground: () => {},
}

export const GlobalContext = createContext(initialValue);

const GlobalProvider = ({ children }) => {
    const [background, setBackground] = useState("green");

    console.log(background);

    return (
        <GlobalContext.Provider value={{ background, setBackground }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;