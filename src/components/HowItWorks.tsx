import { Card } from "@/components/ui/card";
import { Brain, MessageCircle, Home, Heart, TrendingUp, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Compreensão do autismo na prática",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: MessageCircle,
      title: "Comunicação e interação social",
      color: "from-secondary/20 to-secondary/10"
    },
    {
      icon: Home,
      title: "Organização da rotina e ambiente",
      color: "from-accent/20 to-accent/10"
    },
    {
      icon: Heart,
      title: "Autocuidado e equilíbrio emocional",
      color: "from-coral/20 to-coral/10"
    },
    {
      icon: TrendingUp,
      title: "Estímulos naturais e autonomia no dia a dia",
      color: "from-primary/20 to-secondary/10"
    },
    {
      icon: Sparkles,
      title: "Mentalidade e propósito na jornada atípica",
      color: "from-accent/20 to-primary/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              🌱 Como funciona <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">a Mentoria</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
              A Família em Ação é um programa de acompanhamento individual, on-line e ao vivo, com <span className="text-primary">6 encontros transformadores</span> ao longo de <span className="text-secondary">3 meses</span>.
            </p>
          </div>

          <Card className="p-8 md:p-10 mb-10 bg-gradient-to-br from-card to-muted/30 border-2">
            <h3 className="text-2xl font-bold mb-6 text-center">Durante esse processo, você vai:</h3>
            <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">⦁</span>
                <span>Entender de forma prática como estimular o desenvolvimento do seu filho(a);</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">⦁</span>
                <span>Aprender a lidar com as emoções e a rotina atípica com mais tranquilidade;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">⦁</span>
                <span>Criar estratégias personalizadas para o seu dia a dia;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">⦁</span>
                <span>E redescobrir o prazer de viver a maternidade com leveza e propósito.</span>
              </li>
            </ul>
          </Card>

          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Em cada encontro, vamos trabalhar pilares essenciais:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {pillars.map((pillar, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
                >
                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${pillar.color} w-fit`}>
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{pillar.title}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <p className="text-center text-lg md:text-xl text-muted-foreground">
              Entre os encontros, você receberá <strong className="text-primary">orientações práticas</strong>, <strong className="text-secondary">materiais de apoio</strong>, e terá <strong className="text-accent">suporte direto comigo</strong> durante toda a mentoria.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
