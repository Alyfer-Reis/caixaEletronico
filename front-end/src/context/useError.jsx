import { createContext, useContext, useState } from 'react'

const userData = createContext({})


export default function ListProvider({ children }) {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    return (
        <userData.Provider value={{ error, setError, success, setSuccess }}>
            {children}
        </userData.Provider>
    )

}


export function useError() {
    const context = useContext(userData)
    const { error, setError, success, setSuccess } = context

    function showMsg(msg, error = false) {
        error ? setError(msg) : setSuccess(msg)
        setTimeout(() => error ? setError(null) : setSuccess(null), 5 * 1000)
    }

    return {error, success, showMsg }
}

export function useUser() {
    const context = useContext(userData)
    const { user, setUser } = context
    return {user, setUser }
}
