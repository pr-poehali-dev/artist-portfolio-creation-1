import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'teaching', label: 'Преподавание' },
    { id: 'painting', label: 'Живопись' },
    { id: 'leather', label: 'Кожаные изделия' },
    { id: 'murals', label: 'Роспись стен' },
    { id: 'contact', label: 'Контакты' },
  ];

  const portfolioItems = [
    {
      id: 'painting',
      title: 'Живопись',
      description: 'Профессиональная живопись маслом, акварелью и другими техниками. Создание уникальных произведений искусства.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/27064110-59e6-4125-906b-81bf4df26439.jpg',
      icon: 'Palette',
    },
    {
      id: 'leather',
      title: 'Кожаные изделия',
      description: 'Изготовление изделий из натуральной кожи ручной работы. Авторские аксессуары и декоративные элементы.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/6b7b76e0-623f-474e-b56d-0e1eab1b6bde.jpg',
      icon: 'Scissors',
    },
    {
      id: 'murals',
      title: 'Роспись стен',
      description: 'Художественная роспись стен на заказ. Фрески, декоративные панно и уникальные интерьерные решения.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/9f15b8f5-db26-4050-8b4f-7efe743e6248.jpg',
      icon: 'Paintbrush',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Портфолио художника</h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-bold text-primary mb-6">
              Искусство в каждой детали
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Профессиональная живопись, изделия из кожи и художественная роспись стен на заказ
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('painting')}>
                Портфолио
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-scale-in">
                <div className="aspect-square bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={120} className="text-primary/30" />
                </div>
              </div>
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg leading-relaxed">
                  Профессиональный художник с многолетним опытом работы в различных техниках изобразительного искусства.
                </p>
                <p className="text-lg leading-relaxed">
                  Специализируюсь на живописи, создании изделий из натуральной кожи и художественной росписи стен.
                </p>
                <p className="text-lg leading-relaxed">
                  Каждая работа создается с душой и вниманием к деталям, отражая индивидуальность и пожелания заказчика.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="teaching" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold text-center mb-12">Преподавание</h2>
            <Card className="p-8 md:p-12 animate-scale-in">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4">
                  <Icon name="GraduationCap" size={48} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">
                    Педагог отделения изобразительного искусства
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Детская школа искусств
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Обучаю детей основам изобразительного искусства, развиваю творческие способности и помогаю раскрыть художественный потенциал каждого ученика.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Работа с детьми приносит огромное удовольствие и вдохновляет на собственное творчество.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="painting" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">Мои работы</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="leather" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold text-center mb-8">Кожаные изделия</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Авторские изделия из натуральной кожи ручной работы
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {['Кошельки', 'Сумки', 'Аксессуары', 'Декоративные элементы'].map((item, index) => (
                <Card
                  key={item}
                  className="p-6 hover:bg-accent/50 transition-colors animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="Check" className="text-primary" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="murals" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold text-center mb-8">Роспись стен</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Создание уникальных интерьеров через художественную роспись
            </p>
            <div className="space-y-6">
              {[
                'Художественные фрески для дома и офиса',
                'Декоративные панно любой сложности',
                'Роспись детских комнат',
                'Интерьерные решения для кафе и ресторанов',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-2 mt-1">
                    <Icon name="Paintbrush" className="text-primary" size={20} />
                  </div>
                  <p className="text-lg flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-5xl font-bold text-center mb-12">Контакты</h2>
            <Card className="p-8 md:p-12 animate-scale-in">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-xl mb-8">
                    Свяжитесь со мной для обсуждения проекта или заказа
                  </p>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <span className="text-lg">artist@example.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Instagram" className="text-primary" size={24} />
                    <span className="text-lg">@artist_portfolio</span>
                  </div>
                </div>
                <Separator />
                <Button className="w-full" size="lg">
                  Написать сообщение
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Портфолио художника. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
