'use client'
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import './admin.css'

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <main className="main flex">
            {user && <h1>Bienvenue, {user.displayName}!</h1>}
        </main>
    );
}

export default Page;
