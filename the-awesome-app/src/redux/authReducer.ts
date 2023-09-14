export type AuthState = {

    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string;
}

const initState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

export const authreducer = (currentState=initState, action: any)=>{

    //return the updated state
    if(action.type === "SET_AUTH"){

        return {
            ...action.payload
        }

    }

    return currentState;
}