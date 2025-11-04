import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heartPuzzle from "@/assets/heart-puzzle.ico";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Mãe atípica",
      content: "A Mentoria Família em Ação mudou completamente minha perspectiva. Agora tenho clareza sobre como ajudar meu filho e não me sinto mais sozinha nessa jornada.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Mãe de autista não verbal",
      content: "Carol me ensinou a enxergar além do autismo e a encontrar força que eu nem sabia que tinha. A mentoria é transformadora!",
      rating: 5
    },
    {
      name: "Patricia Alves",
      role: "Mãe atípica",
      content: "Finalmente encontrei um espaço onde sou compreendida. A Carol compartilha sua experiência real e isso faz toda a diferença. Saí da exaustão para a ação!",
      rating: 5
    },
    {
      name: "Amanda Silva",
      role: "Mãe e cuidadora",
      content: "A mentoria me deu ferramentas práticas que uso todos os dias. Aprendi a cuidar do meu filho E de mim mesma. Gratidão eterna!",
      rating: 5
    },
    {
      name: "Fernanda Oliveira",
      role: "Mãe atípica",
      content: "Sair da sobrevivência para protagonista da minha história foi possível graças à Carol. A Mentoria Família em Ação é essencial!",
      rating: 5
    },
    {
      name: "Luciana Santos",
      role: "Mãe de TEA nível 3",
      content: "Carol entende de verdade o que vivemos porque ela vive isso também. A conexão é real e os resultados aparecem rapidamente.",
      rating: 5
    },
    {
      name: "Roberta Lima",
      role: "Mãe atípica",
      content: "Depois da mentoria, minha casa virou mais leve, minha relação com meu filho melhorou e eu aprendi a me valorizar. Melhor investimento!",
      rating: 5
    },
    {
      name: "Camila Rodrigues",
      role: "Mãe e profissional",
      content: "A Carol tem um dom especial de transformar desespero em esperança. A mentoria me deu direção quando eu mais precisava.",
      rating: 5
    },
    {
      name: "Daniela Ferreira",
      role: "Mãe atípica",
      content: "Aprendi que cuidar de mim não é egoísmo. A mentoria me ensinou a equilibrar maternidade atípica com autocuidado. Transformador!",
      rating: 5
    },
    {
      name: "Vanessa Souza",
      role: "Mãe de autista",
      content: "Carol não vende ilusões, ela mostra o caminho real. A Mentoria Família em Ação é para quem quer resultados de verdade!",
      rating: 5
    },
    {
      name: "Adriana Martins",
      role: "Mãe atípica",
      content: "Finalmente entendi que não preciso ser perfeita, preciso ser presente. A mentoria me libertou da culpa e me deu segurança.",
      rating: 5
    },
    {
      name: "Renata Barbosa",
      role: "Mãe e cuidadora",
      content: "A abordagem da Carol é única: prática, amorosa e transformadora. Saí da mentoria sabendo exatamente o que fazer!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-coral text-coral" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            O Que Mães Atípicas <span className="text-coral">Estão Dizendo</span>
          </h2>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
            Depoimentos reais de quem transformou a maternidade atípica com a mentoria
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                      <img 
                        src={heartPuzzle} 
                        alt="" 
                        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 fill-coral text-coral"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-white leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="bg-coral/10 border-2 border-coral/20 rounded-2xl p-6 md:p-8 inline-flex flex-col sm:flex-row gap-6 md:gap-12 items-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral mb-1">
                4.9/5.0
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Média de avaliações
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral mb-1">
                500+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Famílias transformadas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;