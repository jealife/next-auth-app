'use client'
import React from "react";
import signUp from "../firebase/auth/signup";
import { useRouter } from 'next/navigation';
import addData from "../firebase/firestore/addData";
import './signup.css'

function Page() {
    const [lastname, setLastname] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const handleChangeLastname = (event) => {
        setLastname(event.target.value);
    }
    const handleChangeFirstname = (event) => {
        setFirstname(event.target.value);
    }


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()


    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);
        if (error) {
            return console.log(error)
        }
        // Récupération de l'ID de l'utilisateur
        const userId = result.user.uid;

        const data = {
            // id: userId,
            nom: `${lastname}`,
            prenom: `${firstname}`,
            email: `${email}`
        }
        const { res, err } = await addData('users', userId, data);

        if (err) {
            return console.log(err)
        }


        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className="left-section">
            <form onSubmit={handleForm} className="form" >
                <h1 id="formTitle">S&apos;enregister</h1>

                <div className="sign-up" id="signUp">
                    <div className="name">
                        <input type="text" value={lastname} name="lastname" onChange={handleChangeLastname} placeholder="Nom" id="lastname" required />
                        <input type="text" value={firstname} onChange={handleChangeFirstname} name="firstname" placeholder="Prénom" id="firstname" required />
                    </div>
                    <input type="text" name="email" id="email" required
                        onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" />
                    <div className="password-field">

                        <input type="password" id="PasswordSignUp" placeholder="Mot de passe" name="password"
                            required="" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <input type="submit" value="S'enregister" id="signupbtn" />
                </div>
            </form>
        </div>
    );
}

export default Page;

{/* <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form> */}