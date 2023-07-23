import { useState } from "react"
import { useSignup } from "../hooks/useSignUp"
import RegisterForm from '../components/RegisterForm';
export function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup , isLoading, error} = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
        console.log(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <RegisterForm></RegisterForm>
            <h3> Signup </h3>
            <label>Email: </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label>password: </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
