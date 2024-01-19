'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css'

const Navbar = () => {
  const [librosMenuOpen, setLibrosMenuOpen] = useState(false);
  const [resenyasMenuOpen, setResenyasMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul>
        <li onMouseEnter={() => setLibrosMenuOpen(true)} onMouseLeave={() => setLibrosMenuOpen(false)}>
          <Link href="/libros">Libros</Link>
          {librosMenuOpen && (
            <ul>
              <li><Link href="/libros/buscar">Buscar</Link></li>
              <li><Link href="/libros/registrar">Registrar</Link></li>
              <li><Link href="/libros/detalles">Detalles</Link></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => setResenyasMenuOpen(true)} onMouseLeave={() => setResenyasMenuOpen(false)}>
          <Link href="/resenyas">Reseñas</Link>
          {resenyasMenuOpen && (
            <ul>
              <li><Link href="/resenyas/escritas">Escritas</Link></li>
              <li><Link href="/resenyas/videos">Videos</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/registrar">Registrar</Link></li>
        <li><Link href="/perfil">Perfil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

