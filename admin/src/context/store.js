import { createContext, useState } from "react";


export const MyStore = createContext()

export const MyStoreProvider =(props)=>{
const [isDark , setIsDark] = useState(false)
const ChangeTheme = ()=>{
    setIsDark(!isDark)
}

const theme = {
    background :isDark ? '#1d2a35':'#ffff',
    text: isDark ? '#ddd':'#333',
    btn :isDark ? '#cdcdcd30' :''
}
    const contextValue = {
     isDark:isDark,
     theme:theme,
     ChangeTheme:ChangeTheme
    }
    return(
        <MyStore.Provider value={contextValue}>
          {props.children}
        </MyStore.Provider>
    )
}