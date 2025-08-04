import React, { useEffect } from 'react';
import { Play, CheckCircle, Star, Clock, Users, Shield, Gift, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    Wistia: any;
    _wq: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Ensure Wistia scripts are loaded
    const loadWistia = () => {
      if (!document.querySelector('script[src*="wistia.com/assets/external/E-v1.js"]')) {
        const script = document.createElement("script");
        script.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script.async = true;
        document.head.appendChild(script);
      }
    };

    loadWistia();

    // Initialize Wistia queue if not exists
    window._wq = window._wq || [];
  }, []);

  const handleCTAClick = () => {
    // Track Facebook Pixel events
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout');
      window.fbq('trackCustom', 'CTAClick', {
        button_location: 'main_cta',
        product: 'protocolo_jejum_cafe_preto'
      });
    }
    
    // Redirect to checkout
    window.open('https://pay.kiwify.com.br/example-checkout-link', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section with VSL */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                PROTOCOLO JEJUM
              </span>
              <br />
              <span className="text-white">COM CAFÉ PRETO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Descubra o método revolucionário que está transformando vidas através do jejum intermitente
            </p>
          </div>

          {/* Wistia Video Player */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="wistia_responsive_padding" style={{ paddingTop: '56.25%' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div 
                    className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" 
                    style={{ height: '100%', position: 'relative', width: '100%' }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Gift className="w-6 h-6 mr-2" />
              QUERO TRANSFORMAR MINHA VIDA AGORA
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            <p className="text-gray-400 mt-4 text-sm">
              ⚡ Acesso imediato • 🔒 Compra 100% segura • 💰 Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-[5%] w-12 h-12 bg-orange-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-[5%] w-8 h-8 bg-yellow-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            O Que Você Vai <span className="text-orange-500">Conquistar</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12 text-green-500" />,
                title: "Perda de Peso Acelerada",
                description: "Queime gordura de forma natural e sustentável com o poder do jejum intermitente"
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-500" />,
                title: "Mais Energia e Foco",
                description: "Sinta-se mais disposto e concentrado durante todo o dia"
              },
              {
                icon: <Shield className="w-12 h-12 text-purple-500" />,
                title: "Saúde Otimizada",
                description: "Melhore sua saúde metabólica e reduza inflamações no corpo"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">+10.000</span>
              <span className="text-gray-300">Pessoas Transformadas</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
              <span className="text-white font-semibold ml-2">4.9/5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "Perdi 15kg em 3 meses",
                text: "O protocolo mudou completamente minha relação com a comida. Nunca me senti tão bem!"
              },
              {
                name: "João Santos",
                result: "Mais energia que nunca",
                text: "Incrível como o jejum me deu mais disposição para trabalhar e cuidar da família."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-orange-500 text-sm">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/95 to-amber-800/95">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF7E6] mb-6">
            Sua Transformação Começa <span className="text-orange-300">HOJE</span>
          </h2>
          <p className="text-xl text-orange-100/80 mb-8 leading-relaxed">
            Não deixe mais um dia passar sem dar o primeiro passo rumo à sua melhor versão
          </p>
          
          <div className="bg-[#4D3319] p-8 rounded-2xl mb-8 border border-orange-500/20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-400 line-through">R$ 297</span>
              <span className="text-5xl font-black text-orange-300">R$ 97</span>
            </div>
            <p className="text-orange-200 text-lg">
              🔥 Oferta por tempo limitado - Economize R$ 200
            </p>
          </div>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-8 py-4 bg-[#4D3319] hover:bg-[#6E4B2A] text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-500"
          >
            <Gift className="w-6 h-6 mr-2" />
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
          
          <div className="mt-8 space-y-2">
            <p className="text-orange-200 text-sm">✅ Acesso vitalício ao protocolo completo</p>
            <p className="text-orange-200 text-sm">✅ Suporte especializado por 30 dias</p>
            <p className="text-orange-200 text-sm">✅ Garantia incondicional de 7 dias</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Protocolo Jejum com Café Preto. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;