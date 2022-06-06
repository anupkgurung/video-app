import { createContext, useState, useContext } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchLater, setWatchLater] = useState();

    return (
        <WatchLaterContext.Provider value={{watchLater, setWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLaterContext = () => useContext(WatchLaterContext);

export { useWatchLaterContext, WatchLaterProvider }
