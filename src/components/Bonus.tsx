import { Card } from "@/components/ui/card";
import { Gift, BookOpen, Video } from "lucide-react";

const Bonus = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              🎁 <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Bônus Exclusivos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/40 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Curso "Do Zero ao TEA"</h3>
                  <p className="text-muted-foreground">Acesso completo ao curso com materiais complementares durante 1 ano</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/40 bg-gradient-to-br from-card to-secondary/5">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10">
                  <Video className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sessão Especial de Encerramento</h3>
                  <p className="text-muted-foreground">Participação online sobre evolução e próximos passos na sua jornada</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Valor agregado em bônus: R$ 997,00
            </h3>
            <p className="text-lg opacity-95">
              Materiais e recursos extras inclusos sem custo adicional
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
