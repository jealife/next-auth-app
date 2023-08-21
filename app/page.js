'use client'
import { useState } from "react";
import addData from "./firebase/firestore/addData";
import styles from './page.module.css'

export default function Home() {
  const [idUser,setIdUser]=useState(0)
  const handleForm = async () => {
    const data = {
      name: 'Jealife',
      house: 'Casa'
    }
    const { result, error } = await addData('users', `user-id ${idUser}`, data)

    if (error) {
      return console.log(error)
    }
  }
  const idIncrement=()=>{
    setIdUser(idUser+1)
    handleForm()
  }
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <button className={styles.btn} onClick={()=>idIncrement()}> Ajouter un utilisateur</button>
    </main>
  )
}
