import React, { useReducer } from "react";

//typeof context
type ThemeState = {
    mode:string; //dark, light
    dispatch?: (action: any)=> void
}


//initState
export const initState: ThemeState = {
    mode: "light"
}


//context
export const AppThemeContext = React.createContext(initState)

const reducer = (currentState: ThemeState, action: any)=>{

    if(action.type === "SET_DARK"){
        return {
            ...currentState,
            mode: "dark"
        }
    }
    if(action.type === "SET_LIGHT"){
        return {
            ...currentState,
            mode: "light"
        }
    }
    return currentState;
}

export function AppThemeProvider(props: any){

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <AppThemeContext.Provider value={{mode: state.mode, dispatch: dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}