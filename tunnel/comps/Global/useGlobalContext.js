import React, { createContext, useReducer, useEffect, useState, onMount } from 'react';

const initialState = {
  
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [route, setRoute] = useState( '/')
    const [intro, setIntro] = useState(true)
    const [nav, setNav] = useState(false)
    useEffect(() => {
        const sessionIntro = sessionStorage.getItem('intro')
        const sessionRoute = sessionStorage.getItem('route')
        console.log(sessionIntro, sessionRoute)
        setRoute(sessionRoute == null? sessionRoute : '/')
        setIntro(sessionIntro == null? sessionIntro : true)
    }, intro)
    
   
    const [pause, setPause] = useState(false)
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`));
    
   return(
    <GlobalContext.Provider value = {{intro, setIntro, audio, pause, setPause, route, setRoute, nav, setNav}}> 
        {children} 
    </GlobalContext.Provider>
   )
}