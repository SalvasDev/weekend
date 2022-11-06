import React, {useState} from 'react'

const Context = React.createContext({})

export function MenuContextProvider ({children}) {

      const [open, setOpen] = useState({ menuActive: false, menuActual: 0 })


    return (
    
    <Context.Provider value={{ open, setOpen}}>
        {children}
    </Context.Provider>
    )

}


export default Context