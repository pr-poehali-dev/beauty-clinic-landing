import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Sparkles',
      title: 'Очищение лица',
      description: 'Профессиональная чистка и уход за кожей лица',
      price: 'от 3 500₽'
    },
    {
      icon: 'Heart',
      title: 'Anti-age терапия',
      description: 'Процедуры омоложения и восстановления кожи',
      price: 'от 8 000₽'
    },
    {
      icon: 'Zap',
      title: 'Лазерная терапия',
      description: 'Удаление пигментации и коррекция дефектов',
      price: 'от 5 000₽'
    },
    {
      icon: 'Droplets',
      title: 'Увлажнение',
      description: 'Глубокое увлажнение и питание кожи',
      price: 'от 4 000₽'
    }
  ];

  const doctors = [
    {
      name: 'Анна Сергеевна Волкова',
      specialty: 'Главный врач-косметолог',
      experience: '12 лет опыта',
      education: 'РНИМУ им. Н.И. Пирогова',
      image: '/img/b8dbf3db-3f37-4c1e-9f2a-d763f30bc90c.jpg'
    },
    {
      name: 'Екатерина Михайловна Петрова',
      specialty: 'Врач-дерматолог',
      experience: '8 лет опыта',
      education: 'МГМСУ им. А.И. Евдокимова',
      image: '/img/b8dbf3db-3f37-4c1e-9f2a-d763f30bc90c.jpg'
    },
    {
      name: 'Мария Александровна Смирнова',
      specialty: 'Косметолог-эстетист',
      experience: '6 лет опыта',
      education: 'СПбГПМУ',
      image: '/img/b8dbf3db-3f37-4c1e-9f2a-d763f30bc90c.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Анастасия К.',
      text: 'Потрясающий результат! Кожа стала гладкой и сияющей. Очень довольна профессионализмом докторов.',
      rating: 5
    },
    {
      name: 'Елена М.',
      text: 'Прекрасная клиника с современным оборудованием. Процедуры проходят комфортно и эффективно.',
      rating: 5
    },
    {
      name: 'Ольга В.',
      text: 'Индивидуальный подход к каждому клиенту. Результат превзошел все мои ожидания!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat font-bold text-primary">
            Beauty Clinic
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-accent transition-colors">Услуги</a>
            <a href="#doctors" className="text-gray-600 hover:text-accent transition-colors">Врачи</a>
            <a href="#reviews" className="text-gray-600 hover:text-accent transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-600 hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-medium">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-montserrat font-light text-primary leading-tight">
                Красота и здоровье 
                <span className="font-medium text-accent"> вашей кожи</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональная косметология с использованием современных технологий 
                и индивидуальным подходом к каждому клиенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-medium px-8">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/36f55a24-cca9-42fa-95b4-6fffaa8d3e2a.jpg" 
                  alt="Современная косметологическая клиника" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary">500+</p>
                    <p className="text-sm text-gray-600">Довольных клиентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-primary mb-4">
              Наши <span className="font-medium">услуги</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный уход и профессиональные процедуры для красоты вашей кожи
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-montserrat font-medium text-primary mb-4">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <p className="text-2xl font-montserrat font-semibold text-accent">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-primary mb-4">
              Наши <span className="font-medium">специалисты</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда профессиональных врачей-косметологов с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">
                      {doctor.name}
                    </h4>
                    <p className="text-accent font-medium mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-1">{doctor.experience}</p>
                    <p className="text-sm text-gray-500">{doctor.education}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-light text-primary mb-4">
              Отзывы <span className="font-medium">клиентов</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мнения наших клиентов о качестве услуг и результатах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                  <p className="font-montserrat font-medium text-primary">
                    — {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-montserrat font-light mb-8">
                Запишитесь на 
                <span className="font-medium text-accent"> консультацию</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">г. Москва, ул. Тверская, д. 15</p>
                    <p className="text-gray-300">2 минуты от м. Тверская</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                    <p className="text-gray-300">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">info@beautyclinic.ru</p>
                    <p className="text-gray-300">Ответим в течение часа</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h4 className="text-2xl font-montserrat font-medium text-primary mb-6">
                Получите консультацию
              </h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-accent focus:outline-none text-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-accent focus:outline-none text-primary"
                />
                <textarea 
                  placeholder="Расскажите о ваших пожеланиях" 
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-accent focus:outline-none resize-none text-primary"
                ></textarea>
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-medium py-4">
                  Записаться на консультацию
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-2xl font-montserrat font-bold mb-4 text-accent">
                Beauty Clinic
              </h5>
              <p className="text-gray-400">
                Профессиональная косметология для вашей красоты и здоровья
              </p>
            </div>
            <div>
              <h6 className="font-montserrat font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Очищение лица</li>
                <li>Anti-age терапия</li>
                <li>Лазерная терапия</li>
                <li>Увлажнение</li>
              </ul>
            </div>
            <div>
              <h6 className="font-montserrat font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Тверская, д. 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@beautyclinic.ru</li>
              </ul>
            </div>
            <div>
              <h6 className="font-montserrat font-semibold mb-4">Режим работы</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00 - 21:00</li>
                <li>Сб-Вс: 10:00 - 19:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Clinic. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;