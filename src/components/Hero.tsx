import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import carolPhoto from "@/assets/carol-professional-new.webp";

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Logo */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <img src={logo} alt="Mentoria Família em Ação" className="h-16 md:h-20 w-auto opacity-90" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in order-2 md:order-1">
              <div className="relative">
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110"></div>
                <img 
                  src={carolPhoto} 
                  alt="Carol Magalhães - Mentora" 
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-2 border-primary/40 shadow-[0_0_80px_rgba(0,217,163,0.3)]"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="space-y-6 animate-fade-in order-1 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Mentoria</span>
                <br />
                <span className="text-primary drop-shadow-[0_0_20px_rgba(0,217,163,0.5)]">Família em Ação</span>
              </h1>

              <div className="space-y-4 text-base md:text-lg text-muted-foreground">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Querida mãe atípica,
                </p>
                
                <p className="leading-relaxed">
                  Eu sei o quanto a maternidade no autismo pode ser intensa. Entre terapias, rotina e incertezas, é fácil se sentir perdida, exausta e sem clareza sobre o que realmente fazer para ajudar seu filho a evoluir — e, ainda, cuidar de si mesma.
                </p>
                
                <p className="text-lg md:text-xl font-semibold text-primary">
                  Mas você não precisa viver essa jornada sozinha.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-lg px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_40px_rgba(0,217,163,0.4)] hover:shadow-[0_0_60px_rgba(0,217,163,0.6)] transition-all duration-300"
                  onClick={scrollToEnroll}
                >
                  Quero participar da mentoria
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom section - Who is Carol */}
          <div className="mt-20 max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Sou <strong className="text-primary">Carol Magalhães</strong>, mãe atípica da Luiza (autista não verbal nível 3 de suporte), advogada, pós-graduanda em Neurociências e Autismo, escritora e palestrante.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Criei a <strong className="text-primary">Mentoria Família em Ação</strong> para conduzir mães, pais e cuidadores de crianças autistas a uma maternidade mais leve, consciente e assertiva, com base na prática real e no entendimento profundo das necessidades do autismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
