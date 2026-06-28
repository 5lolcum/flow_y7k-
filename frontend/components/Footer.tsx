export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🛍️ Flow Store</h3>
            <p className="text-gray-400 text-sm">
              Tu tienda de ropa online favorita con los mejores precios y calidad garantizada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Inicio</a></li>
              <li><a href="/shop" className="hover:text-white transition">Tienda</a></li>
              <li><a href="/about" className="hover:text-white transition">Sobre Nosotros</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition">Envíos</a></li>
              <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Términos</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="font-bold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:text-blue-400 transition">📘</a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">🐦</a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">📷</a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">▶️</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Recibe nuestras ofertas exclusivas</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Suscribirse
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>&copy; 2024 Flow Store. Todos los derechos reservados. | Hecho con ❤️ en Latinoamérica</p>
        </div>
      </div>
    </footer>
  )
}
