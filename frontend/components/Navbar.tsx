'use client'

import Link from 'next/link'
import { useCart } from '@/lib/store'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const items = useCart((state) => state.items)
  const [isOpen, setIsOpen] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🛍️ Flow Store
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition">
              Tienda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contacto
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <span className="text-2xl">🛒</span>
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            {token ? (
              <button
                onClick={() => {
                  localStorage.removeItem('token')
                  window.location.reload()
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Cerrar Sesión
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Registrarse
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Inicio
            </Link>
            <Link
              href="/shop"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Tienda
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
