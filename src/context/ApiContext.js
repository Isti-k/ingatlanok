import IngatlanLista from "../componenes/IngatlanLista";
import {createContext, useState} from "react";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const[IngatlanLista, setIngatlanLista]=useState([])
    return(
        <ApiContext.Provider value={{IngatlanLista}}>
            {children}
        </ApiContext.Provider>
    )
}