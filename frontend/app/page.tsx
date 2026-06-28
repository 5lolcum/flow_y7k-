'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
        <div className="container max-w-7xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Bienvenido a Flow Store</h1>
          <p className="text-2xl mb-8 text-blue-100">
            La mejor tienda de ropa online con los mejores precios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-lg"
            >
              🛒 Empezar a Comprar
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-lg"
            >
              📖 Saber Más
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Envío Rápido</h3>
              <p className="text-gray-600">
                Recibe tus pedidos en 2-3 días hábiles. Envío gratis en compras mayores a $100.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-2">Pago Seguro</h3>
              <p className="text-gray-600">
                Todas tus transacciones están protegidas con encriptación SSL de 256 bits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-2">Garantía 100%</h3>
              <p className="text-gray-600">
                Si no estás satisfecho, devolvemos tu dinero sin preguntas en 30 días.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Productos Más Vendidos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Camiseta Premium',
                price: '$29.99',
                rating: '★★★★★',
                image: '👕',
              },
              {
                name: 'Pantalón Elegante',
                price: '$59.99',
                rating: '★★★★★',
                image: '👖',
              },
              {
                name: 'Chaqueta Sport',
                price: '$89.99',
                rating: '★★★★★',
                image: '🧥',
              },
              {
                name: 'Zapatillas Pro',
                price: '$99.99',
                rating: '★★★★★',
                image: '👟',
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-yellow-500 mb-2">{product.rating}</p>
                  <p className="text-gray-600 mb-4">Producto de calidad garantizada</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <a
                      href="/shop"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Ver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block bg-blue-600 text-white px-12 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-lg"
            >
              Ver Todos los Productos →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María García',
                text: 'Excelente servicio y productos de muy buena calidad. Me encanta comprar en Flow Store.',
              },
              {
                name: 'Juan López',
                text: 'El envío llegó super rápido y el producto es exactamente como aparecía en la foto.',
              },
              {
                name: 'Sofia Rodríguez',
                text: 'Muy recomendado. He comprado 5 veces y siempre me entero con satisfacción.',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600"
              >
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">¿Listo para comprar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de clientes satisfechos
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-blue-600 px-12 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-lg"
          >
            Explorar Tienda
          </a>
        </div>
      </section>
    </div>
  )
}
