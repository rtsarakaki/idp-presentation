import { presentationOutline } from '@/data/presentation-outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal Developer Platform (IDP) - Conteúdo Completo',
  description: 'Conteúdo completo da apresentação sobre Internal Developer Platform (IDP) - Transformando a Experiência de Desenvolvimento e Acelerando a Entrega de Valor',
  keywords: 'IDP, Internal Developer Platform, DevOps, Platform Engineering, Developer Experience',
  robots: 'index, follow',
};

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {presentationOutline.title}
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            {presentationOutline.subtitle}
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Duração total:</strong> {presentationOutline.totalDuration} minutos
            </p>
            <p className="text-blue-800">
              <strong>Slides:</strong> {presentationOutline.slides.length} seções
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="space-y-8">
          {presentationOutline.slides.map((slide, index) => (
            <section key={slide.id} className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {index + 1}. {slide.title}
                </h3>
                {slide.subtitle && (
                  <h4 className="text-lg text-gray-600 mb-3">
                    {slide.subtitle}
                  </h4>
                )}
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Duração: {slide.duration} minutos
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-semibold text-gray-800 mb-3">Conteúdo:</h5>
                <ul className="space-y-2">
                  {slide.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Contato</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Apresentador:</strong> Ricardo Arakaki</p>
              <p><strong>Email:</strong> rtsarakaki@gmail.com</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/ricardo-arakaki</p>
              <p><strong>GitHub:</strong> github.com/rtsarakaki</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
