import { createContext, useState, memo } from "react";

const CurrentChatContext = createContext();

const CurrentChatProvider = memo(({ children }) => {
    const [currentChat, setCurrentChat] = useState();

    return (
        <CurrentChatContext.Provider value={{currentChat, setCurrentChat}}>
            {children}
        </CurrentChatContext.Provider>
    );
});

export default CurrentChatProvider;
export { CurrentChatContext };