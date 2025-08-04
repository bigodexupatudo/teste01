import React, { useEffect } from 'react';
import { 
  Play, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Award,
  Coffee,
  Zap,
  Heart,
  Target
} from 'lucide-react';

const App = () => {
  // Carregar scripts do Wistia
  useEffect(() => {
    // Script principal do Wistia
    const wistiaScript = document.createElement("script");
    wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
    wistiaScript.async = true;
    document.body.appendChild(wistiaScript);

    // Script específico do vídeo
    const videoScript = document.createElement("script");
    videoScript.src = "https://fast.wistia.com/embed/medias/gc9ywrd50y.jsonp";
    videoScript.async = true;
    document.body.appendChild(videoScript);

    return () => {
      // Cleanup dos scripts quando o componente for desmontado
      document.body.removeChild(wistiaScript);
      document.body.removeChild(videoScript);
    };
  }, []);

  const benefits = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Queima de Gordura Acelerada",
      description: "O café preto potencializa a queima de gordura durante o jejum"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energia Sustentada",
      description: "Mantenha altos níveis de energia sem quebrar o jejum"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Saúde Cardiovascular",
      description: "Melhore a saúde do coração e circulação sanguínea"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco Mental",
      description: "Aumente a concentração e clareza mental"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      result: "Perdeu 12kg em 3 meses",
      text: "O protocolo mudou minha vida! Nunca pensei que seria tão fácil emagrecer.",
      rating: 5
    },
    {
      name: "João Santos",
      age: "42 anos", 
      result: "Perdeu 18kg em 4 meses",
      text: "Incrível como o café preto fez toda a diferença no meu jejum.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      result: "Perdeu 8kg em 2 meses", 
      text: "Método simples e eficaz. Recomendo para todos!",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Protocolo Completo",
      description: "Guia passo a passo para implementar o jejum com café preto"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Exclusivo",
      description: "Acesso a grupo VIP com acompanhamento personalizado"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resultados Comprovados",
      description: "Mais de 10.000 pessoas já transformaram suas vidas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Total",
      description: "30 dias de garantia incondicional ou seu dinheiro de volta"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section com VSL */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 z-10 transition-all duration-1000 opacity-100 translate-y-0">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
              PROTOCOLO JEJUM
              <br />
              <span className="text-white">COM CAFÉ PRETO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra o método revolucionário que está transformando vidas e 
              <span className="text-orange-500 font-semibold"> queimando gordura de forma acelerada</span>
            </p>
          </div>

          {/* VSL Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="wistia_responsive_padding" style={{paddingTop: '56.25%'}}>
                  <div className="wistia_responsive_wrapper">
                    <div className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" style={{height: '100%', width: '100%'}}>&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4">
              🔥 QUERO TRANSFORMAR MINHA VIDA AGORA
            </button>
            <p className="text-sm text-gray-400">
              ⚡ Acesso imediato • 💰 Garantia de 30 dias • 🎯 Resultados comprovados
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Por que o <span className="text-orange-500">Café Preto</span> é o Segredo?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Veja os <span className="text-green-500">Resultados Reais</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.age}</p>
                  <p className="text-sm text-green-500 font-medium">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            O que você vai <span className="text-orange-500">receber</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgência e Escassez */}
      <section className="py-20 bg-gradient-to-r from-orange-900/95 to-amber-800/95">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#FFF7E6]">
            ⚠️ ATENÇÃO: Oferta por Tempo Limitado!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100/80">
            Apenas <span className="font-bold text-yellow-500">100 vagas</span> disponíveis neste mês
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl max-w-md mx-auto mb-8">
            <div className="text-2xl font-bold mb-2 text-white">De R$ 297,00</div>
            <div className="text-sm text-gray-400 line-through mb-2">Preço normal</div>
            <div className="text-4xl font-black text-green-400 mb-2">R$ 97,00</div>
            <div className="text-sm text-orange-300">ou 12x de R$ 9,70</div>
          </div>

          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4">
            🚀 GARANTIR MINHA VAGA AGORA
          </button>
          
          <p className="text-sm text-orange-200">
            🔒 Compra 100% segura • ✅ Garantia incondicional • ⚡ Acesso imediato
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Perguntas <span className="text-orange-500">Frequentes</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "O protocolo funciona para qualquer pessoa?",
                answer: "Sim! O protocolo foi desenvolvido para ser seguro e eficaz para pessoas de todas as idades e níveis de condicionamento físico."
              },
              {
                question: "Quanto tempo leva para ver resultados?",
                answer: "A maioria das pessoas começa a ver resultados já na primeira semana, com resultados mais significativos em 30 dias."
              },
              {
                question: "É seguro fazer jejum com café preto?",
                answer: "Absolutamente! O café preto não quebra o jejum e ainda potencializa seus benefícios. Sempre consulte seu médico antes de iniciar."
              },
              {
                question: "E se eu não gostar do método?",
                answer: "Oferecemos 30 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-orange-500">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-t border-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Não perca mais tempo!<br />
            <span className="text-orange-500">Sua transformação começa hoje</span>
          </h2>
          
          <button className="bg-[#4D3319] hover:bg-[#6E4B2A] text-white font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6">
            💪 COMEÇAR MINHA TRANSFORMAÇÃO AGORA
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Garantia de 30 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-4">
            © 2024 Protocolo Jejum com Café Preto. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Este produto não substitui o acompanhamento médico. Consulte sempre um profissional de saúde.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;