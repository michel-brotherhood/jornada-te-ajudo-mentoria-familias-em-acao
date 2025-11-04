import { Card } from "@/components/ui/card";
import { Users, GraduationCap, Heart, Stethoscope } from "lucide-react";

const ForWho = () => {
  const audience = [
    {
      icon: Heart,
      title: "Mães Atípicas",
      description: "Que se sentem perdidas e querem clareza para ajudar seus filhos",
      color: "text-coral"
    },
    {
      icon: Users,
      title: "Pais e Cuidadores",
      description: "Que buscam estratégias práticas para o dia a dia",
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Famílias em Transição",
      description: "Com diagnóstico recente ou em processo de investigação",
      color: "text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Quem Busca Evolução",
      description: "E quer uma maternidade mais leve, consciente e assertiva",
      color: "text-accent"
    }
  ];

  return (
    <section id="for-who" className="py-16 md:py-20 bg-gradient-to-br from-muted/40 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            Para quem é <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">esta mentoria</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2 leading-relaxed">
            A Mentoria Família em Ação foi criada para famílias que desejam compreender, agir e transformar a jornada atípica com segurança e propósito.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audience.map((item, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-[0_0_40px_rgba(0,217,163,0.3)] transition-all duration-300 hover:-translate-y-2 border border-primary/20 hover:border-primary/40 animate-fade-in bg-white/95 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,217,163,0.4)]`}>
                  <item.icon className="w-8 h-8 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-background">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
