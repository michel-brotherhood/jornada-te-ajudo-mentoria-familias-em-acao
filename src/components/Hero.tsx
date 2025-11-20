import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play } from "lucide-react";
import { useState, useRef } from "react";
import logo from "@/assets/logo-teajudo.webp";
import carolVideo from "@/assets/carol-chamada-mentoria.mp4";
import carolFallback from "@/assets/carol-hero.jpeg";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Video/Image */}
            <div className="flex justify-center md:justify-end animate-fade-in order-2 md:order-1">
              <div className="relative w-full max-w-sm md:max-w-xs">
                {!videoError && (
                  <>
                    {/* Autoplay indicator badge */}
                    <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-sm text-background px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5 animate-pulse-slow">
                      <Play className="w-3 h-3 fill-background" />
                      <span>Reproduzindo</span>
                    </div>
                    
                    {/* Audio toggle button */}
                    <button
                      onClick={toggleMute}
                      className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-primary/30"
                      aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-primary animate-pulse" />
                      )}
                    </button>
                  </>
                )}
                
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                
                {videoError ? (
                  <img 
                    src={carolFallback} 
                    alt="Carol Magalhães - Mentora" 
                    className="relative rounded-2xl w-full h-auto object-cover border border-primary/30 shadow-[0_0_60px_rgba(0,217,163,0.25)]"
                  />
                ) : (
                  <video 
                    ref={videoRef}
                    src={carolVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={handleVideoError}
                    className="relative rounded-2xl w-full h-auto object-cover border border-primary/30 shadow-[0_0_60px_rgba(0,217,163,0.25)]"
                    aria-label="Vídeo de apresentação da Carol Magalhães"
                  />
                )}
              </div>
            </div>

            {/* Right: Copy */}
            <div className="space-y-6 animate-fade-in order-1 md:order-2 text-center md:text-left">
              {/* Logo above title */}
              <div className="flex justify-center md:justify-start mb-4">
                <img src={logo} alt="Jornada TEAjudo" className="h-12 md:h-16 w-auto opacity-90" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">JornadaTEAjudo - Mentoria</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-[#cb71bc] to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(203,113,188,0.5)]">Família em Ação</span>
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
                <button
                  onClick={scrollToEnroll}
                  className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-sans font-semibold text-base w-full md:w-auto"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-full transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

                  <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-background via-muted to-background"></span>

                  <div className="relative flex items-center justify-center py-4 px-12 text-sm md:text-lg text-background rounded-full transform -translate-y-1 bg-gradient-to-r from-white via-primary/80 to-primary gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110 animate-pulse-slow">
                    <span className="select-none font-bold">Quero participar da mentoria</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
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
    </header>
  );
};

export default Hero;
