import { useAuthContext } from "./useAuthContext";


export const useSignOut = () => {
    const {dispatch} = useAuthContext()
    const signout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispath sign out action
        dispatch({type: 'SIGNOUT'})
    }

    return {signout}
}