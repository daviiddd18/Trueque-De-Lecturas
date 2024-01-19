'use client'

import Link from 'next/link'

const Navbar = () => {
  
  return (
    <header className='flex items-center justify-between'>
      <section className='text-primary font-bold text-2xl'>Trueque de Lecturas</section>
      <nav className="flex gap-4 text-gray-500 font-semibold">
        <ul className='flex gap-10'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/libros">Libros</Link></li>
          <li><Link href="/resenyas">Reseñas</Link></li>
          <li><Link href="/usuarios/registrar">Registrar</Link></li>
          <li><Link className="bg-primary rounded-full text-white px-5 py-2" href="/usuarios/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

