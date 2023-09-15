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

    //destructring(ES6)
    // const arr = useReducer(reducer, initState);
    // const state1 = arr[0]
    // const disp = arr[1];

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <AppThemeContext.Provider value={{mode: state.mode, dispatch: dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}