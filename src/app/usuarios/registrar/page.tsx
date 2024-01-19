'use client'

import '../../styles/globals.css'

export default function Registrar (){
    
    return(
        
        <>
        <h1>Hola desde Registrar</h1>
        <form>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="submit" value="Registrar"/> 
        </form>
        </>

    )
}