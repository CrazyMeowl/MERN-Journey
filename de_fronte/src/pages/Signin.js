import { useState } from "react"

export function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form classname="signin" onSubmit={handleSubmit}>
            <h3> Sign In </h3>
            <label>Email: </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password: </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button>Sign In</button>
        </form>
    )
}

