'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-blue-100">
            Estamos aquí para ayudarte
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {[
            {
              icon: '📧',
              title: 'Email',
              content: 'contacto@flowstore.com',
            },
            {
              icon: '📱',
              title: 'Teléfono',
              content: '+1 (555) 123-4567',
            },
            {
              icon: '📍',
              title: 'Dirección',
              content: 'Calle Principal 123, Ciudad',
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-gray-700">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Envíanos un Mensaje</h2>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
              ✓ ¡Gracias! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: '¿Cuál es el tiempo de envío?',
                a: 'Normalmente 2-3 días hábiles. Envío gratis en compras mayores a $100.',
              },
              {
                q: '¿Puedo devolver un producto?',
                a: 'Sí, dentro de 30 días con garantía 100% de reembolso.',
              },
              {
                q: '¿Qué métodos de pago aceptan?',
                a: 'Aceptamos tarjetas de crédito, débito y billeteras digitales.',
              },
              {
                q: '¿Tienen tienda física?',
                a: 'Por ahora solo contamos con tienda online, pero pronto abriremos sucursales.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
