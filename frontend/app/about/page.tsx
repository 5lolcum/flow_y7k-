export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-blue-100">
            Conoce la historia detrás de Flow Store
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-700 text-lg mb-4">
              Flow Store nació en 2024 con una misión simple: ofrecer ropa de calidad
              a precios accesibles para todos.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Nuestro equipo pasionado trabaja cada día para seleccionar los mejores
              productos y garantizar una experiencia de compra excepcional.
            </p>
            <p className="text-gray-700 text-lg">
              Hoy, con miles de clientes satisfechos, seguimos creciendo y
              mejorando constantemente.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-96 flex items-center justify-center text-8xl">
            👔
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calidad',
                description: 'Seleccionamos cada producto con cuidado para garantizar la mejor calidad.',
                icon: '✨',
              },
              {
                title: 'Integridad',
                description: 'Somos honestos y transparentes en todas nuestras operaciones.',
                icon: '🤝',
              },
              {
                title: 'Innovación',
                description: 'Constantemente buscamos nuevas formas de mejorar tu experiencia.',
                icon: '🚀',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Carlos Mendez',
                role: 'CEO & Fundador',
                icon: '👨‍💼',
              },
              {
                name: 'Ana García',
                role: 'Directora de Compras',
                icon: '👩‍💼',
              },
              {
                name: 'Luis Rodríguez',
                role: 'Director de Logística',
                icon: '👨‍💻',
              },
              {
                name: 'Maria López',
                role: 'Gerente de Atención al Cliente',
                icon: '👩‍💻',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
