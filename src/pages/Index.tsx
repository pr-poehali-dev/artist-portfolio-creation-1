import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { GalleryModal } from '@/components/GalleryModal';

interface GalleryImage {
  image: string;
  title: string;
  description: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<GalleryImage[]>([]);

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

  const paintingWorks = [
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/f9cd8fc4-4443-4760-b82e-aa73c4e4d997.jpg',
      title: 'Пейзаж',
      description: 'Масло, холст, 60x80 см',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/40c7bf34-994e-4eb8-b9f0-09c3081b5ac5.jpg',
      title: 'Портрет',
      description: 'Масло, холст, 50x70 см',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/de689c68-c429-4cc1-ac40-d28ecb106d68.jpg',
      title: 'Цветы',
      description: 'Акварель, бумага, 40x50 см',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/273b7e13-8dfd-4760-98e1-62ad74a25018.jpg',
      title: 'Абстракция',
      description: 'Масло, холст, 70x90 см',
    },
  ];

  const leatherWorks = [
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/39de0bb4-38c0-42f4-b508-fa192eefe962.jpg',
      title: 'Кожаный кошелек',
      description: 'Натуральная кожа, ручная работа',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/b2452710-b117-4cc2-a6f0-b9496111445d.jpg',
      title: 'Сумка',
      description: 'Натуральная кожа, авторский дизайн',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/806320e9-03ad-4fcc-8d78-118798be81ba.jpg',
      title: 'Аксессуары',
      description: 'Брелок и браслет из натуральной кожи',
    },
  ];

  const muralWorks = [
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/9a6665c2-d749-4231-ac57-bc6ba3d99009.jpg',
      title: 'Роспись гостиной',
      description: 'Художественная роспись стены в жилом интерьере',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/4e2e6f5d-0107-49d9-8b2d-b303e0c8a1b1.jpg',
      title: 'Детская комната',
      description: 'Яркая роспись стен в детской',
    },
    {
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/646b3685-0a62-4118-a2a1-4b2211070049.jpg',
      title: 'Ресторан',
      description: 'Декоративное панно для ресторана',
    },
  ];

  const portfolioItems = [
    {
      id: 'painting',
      title: 'Живопись',
      description: 'Профессиональная живопись маслом, акварелью и другими техниками. Создание уникальных произведений искусства.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/27064110-59e6-4125-906b-81bf4df26439.jpg',
      icon: 'Palette',
      works: paintingWorks,
    },
    {
      id: 'leather',
      title: 'Кожаные изделия',
      description: 'Изготовление изделий из натуральной кожи ручной работы. Авторские аксессуары и декоративные элементы.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/6b7b76e0-623f-474e-b56d-0e1eab1b6bde.jpg',
      icon: 'Scissors',
      works: leatherWorks,
    },
    {
      id: 'murals',
      title: 'Роспись стен',
      description: 'Художественная роспись стен на заказ. Фрески, декоративные панно и уникальные интерьерные решения.',
      image: 'https://cdn.poehali.dev/projects/20c87400-0867-484e-8a18-ba702b96b896/files/9f15b8f5-db26-4050-8b4f-7efe743e6248.jpg',
      icon: 'Paintbrush',
      works: muralWorks,
    },
  ];

  const openGallery = (works: GalleryImage[], index: number) => {
    setCurrentGallery(works);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

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
            <h2 className="text-5xl font-bold text-center mb-8">Живопись</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Профессиональная живопись маслом, акварелью и другими техниками
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {paintingWorks.map((work, index) => (
                <Card
                  key={work.title}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openGallery(paintingWorks, index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="leather" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8">Кожаные изделия</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Авторские изделия из натуральной кожи ручной работы
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {leatherWorks.map((work, index) => (
                <Card
                  key={work.title}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openGallery(leatherWorks, index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="murals" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8">Роспись стен</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Создание уникальных интерьеров через художественную роспись
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {muralWorks.map((work, index) => (
                <Card
                  key={work.title}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openGallery(muralWorks, index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </Card>
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

      <GalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={currentGallery[currentImageIndex]?.image || ''}
        title={currentGallery[currentImageIndex]?.title || ''}
        description={currentGallery[currentImageIndex]?.description}
        onNext={currentGallery.length > 1 ? nextImage : undefined}
        onPrev={currentGallery.length > 1 ? prevImage : undefined}
      />
    </div>
  );
};

export default Index;