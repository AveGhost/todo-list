import { createContext, useState } from "react";

const ModalStateContext = createContext();

const ModalStateProvider = ({children}) => {
    const [isTaskOpen, setIsTaskOpen] = useState(false)

    return (
        <ModalStateContext.Provider value={{isTaskOpen, setIsTaskOpen}}>
            {children}
        </ModalStateContext.Provider>
    )
}

export { ModalStateContext, ModalStateProvider }