import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Logo centralizado no topo */}
        <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center animate-fade-in">
          <img src={logo} alt="Mentoria Família em Ação" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto" />
        </div>

        {/* Título principal acima de tudo */}
        <div className="text-center animate-fade-in mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Mentoria Família em Ação
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Querida mãe atípica,
          </p>
        </div>

        {/* Layout lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Coluna do Vídeo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-2xl shadow-2xl w-full max-w-lg border-2 border-primary/30"
            >
              <source src={heroVideo} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>

          {/* Coluna do Texto */}
          <div className="text-center lg:text-left animate-fade-in space-y-5 md:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Eu sei o quanto a maternidade no autismo pode ser intensa. Entre terapias, rotina e incertezas, é fácil se sentir perdida, exausta e sem clareza sobre o que realmente fazer para ajudar seu filho a evoluir — e, ainda, cuidar de si mesma.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
              Mas você não precisa viver essa jornada sozinha.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Sou <strong className="text-primary">Carol Magalhães</strong>, mãe atípica da Luiza (autista não verbal nível 3 de suporte), advogada, pós-graduanda em Neurociências e Autismo, escritora e palestrante.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Criei a <strong className="text-secondary">Mentoria Família em Ação</strong> para conduzir mães, pais e cuidadores de crianças autistas a uma maternidade mais leve, consciente e assertiva, com base na prática real e no entendimento profundo das necessidades do autismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={scrollToEnroll}
              >
                Quero participar da mentoria
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-2 hover:bg-primary/10 transition-all duration-300"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como funciona
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
