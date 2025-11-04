import { Card } from "@/components/ui/card";
import { Heart, Video, Clock, Award } from "lucide-react";

const WhyDifferent = () => {
  const transformations = [
    {
      icon: Heart,
      title: "Mais clareza e segurança",
      description: "Nas decisões sobre seu filho(a) e seu futuro"
    },
    {
      icon: Clock,
      title: "Calma e estratégia",
      description: "Para lidar com desafios diários sem sobrecarga"
    },
    {
      icon: Video,
      title: "Rotina funcional e possível",
      description: "Construída de forma realista para sua família"
    },
    {
      icon: Award,
      title: "Maternidade mais leve",
      description: "Consciente, feliz e cheia de propósito"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              💫 A <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">transformação</span> que te espera
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Ao final da mentoria, você vai:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {transformations.map((item, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-start gap-2">
                      <span className="text-secondary">✅</span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-10 md:p-12 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Família em Ação — porque compreender é o primeiro passo para transformar
            </h3>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              Você não precisa mais enfrentar essa jornada sozinha. É hora de ter clareza, apoio e estratégia para viver uma maternidade atípica com leveza e propósito. 💜
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
