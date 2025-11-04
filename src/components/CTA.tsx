import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

const CTA = () => {
  const includes = [
    "6 encontros individuais ao vivo (3 meses)",
    "Acompanhamento personalizado e suporte direto",
    "Materiais práticos e orientações entre encontros",
    "Acesso ao Curso 'Do Zero ao TEA' por 1 ano",
    "Sessão online especial de encerramento",
    "Estratégias personalizadas para sua família"
  ];

  return (
    <section id="enroll" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-card to-primary/5">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
                💰 <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Investimento</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                A Mentoria Família em Ação é um programa diferenciado, com acompanhamento próximo, individual e metodologia exclusiva.
              </p>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">O que está incluído:</h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="mt-0.5 md:mt-1 p-1 rounded-full bg-primary/20 flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-4 md:space-y-6">
              <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-xl p-6 md:p-8 shadow-xl">
                <p className="text-sm sm:text-base text-white/90 mb-3">Valor total da mentoria:</p>
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    R$ 4.997,00
                  </span>
                  <p className="text-base sm:text-lg text-white/90">Opções à vista ou parceladas disponíveis</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 md:p-6">
                <h3 className="font-bold text-lg mb-2">💬 Próximos passos</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Se você sente que está pronta para viver essa transformação, clique no botão abaixo e preencha o formulário de interesse.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  Esse é o primeiro passo para se tornar uma mãe atípica mais confiante, tranquila e preparada para conduzir a evolução do seu filho(a) — com amor e ação. 💜
                </p>
              </div>
              
              <a 
                href="https://pay.hotmart.com/Y102367809O?sck=HOTMART_PRODUCT_PAGE&off=usezyyql&hotfeature=32&bid=1761836693512"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl font-bold"
                >
                  Quero participar da Mentoria Família em Ação
                </Button>
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground px-4">
                Após preencher o formulário, entraremos em contato com você para os próximos passos
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
