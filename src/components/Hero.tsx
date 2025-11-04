import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import carolPhoto from "@/assets/carol-professional-new.webp";

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Logo centralizado no topo */}
        <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center animate-fade-in">
          <img src={logo} alt="Mentoria Família em Ação" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto" />
        </div>

        {/* Layout Vertical - Landing Page Style */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <div className="animate-fade-in mb-8 md:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Mentoria Família em Ação
              </span>
            </h1>
          </div>

          {/* Foto da Carol em destaque */}
          <div className="flex justify-center mb-8 md:mb-10 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={carolPhoto} 
                alt="Carol Magalhães - Mentora" 
                className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Texto de abertura */}
          <div className="space-y-5 md:space-y-6 animate-fade-in mb-8 md:mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
              Querida mãe atípica,
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Eu sei o quanto a maternidade no autismo pode ser intensa. Entre terapias, rotina e incertezas, é fácil se sentir perdida, exausta e sem clareza sobre o que realmente fazer para ajudar seu filho a evoluir — e, ainda, cuidar de si mesma.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
              Mas você não precisa viver essa jornada sozinha.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Sou <strong className="text-primary">Carol Magalhães</strong>, mãe atípica da Luiza (autista não verbal nível 3 de suporte), advogada, pós-graduanda em Neurociências e Autismo, escritora e palestrante.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Criei a <strong className="text-secondary">Mentoria Família em Ação</strong> para conduzir mães, pais e cuidadores de crianças autistas a uma maternidade mais leve, consciente e assertiva, com base na prática real e no entendimento profundo das necessidades do autismo.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={scrollToEnroll}
            >
              Quero participar da mentoria
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 border-2 hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
