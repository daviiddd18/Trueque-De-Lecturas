'use client'

import { useState } from 'react'
import '../../styles/globals.css'

export default function Registrar (){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>){
        ev.preventDefault();
        fetch('/api/register', {
            method:'POST',
            body: JSON.stringify({email, password}),
            headers:{'Content-Type': 'application/json'}
        })
    }
    
    return(
        <>
        <h1>Hola desde Registrar</h1>
        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
            <label htmlFor="email" className='font-bold'>Email</label>
            <input id="email" type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)}/>

            <label htmlFor="password" className='font-bold'>Password</label>
            <input id="password" type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>

            <button type="submit">Registrar</button> 
        </form>
        </>

    )
}