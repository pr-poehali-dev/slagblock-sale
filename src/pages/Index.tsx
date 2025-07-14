import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2D3748] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} />
            <h1 className="text-2xl font-bold">СтройБлок ДНР</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-300 transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-gray-300 transition-colors">Каталог</a>
            <a href="#contacts" className="hover:text-gray-300 transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#2D3748]">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#2D3748] mb-6 leading-tight">
                Качественный<br />
                <span className="text-[#4A5568]">шлакоблок</span><br />
                для строительства
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Производим и поставляем сертифицированный шлакоблок высокого качества 
                по всей территории ДНР. Прямые поставки с завода.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#2D3748] hover:bg-[#4A5568]">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать
                </Button>
                <Button size="lg" variant="outline" className="border-[#2D3748] text-[#2D3748] hover:bg-[#2D3748] hover:text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Калькулятор
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Сертифицировано
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="Truck" size={16} className="mr-2" />
                  Доставка по ДНР
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="Award" size={16} className="mr-2" />
                  15 лет на рынке
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/9bee21b2-8d0c-4772-a297-d9b5dda2af60.jpg" 
                alt="Качественный шлакоблок" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2D3748] text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-[#2D3748] mb-12">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#2D3748] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#2D3748]">Высокое качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Все блоки соответствуют ГОСТ и имеют необходимые сертификаты качества
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#2D3748] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#2D3748]">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Собственный автопарк обеспечивает доставку в течение 24 часов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-[#2D3748] rounded-full flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#2D3748]">Выгодные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Прямые поставки с завода без посредников. Скидки при оптовых закупках
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-[#2D3748] mb-12">
            Каталог продукции
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/img/b7f4a296-7808-42dd-be18-abcfe0eec04b.jpg" 
                  alt="Стандартный шлакоблок" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-[#2D3748]">Стандартный блок</CardTitle>
                <CardDescription>390×190×188 мм</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#2D3748]">45 ₽</span>
                  <Badge>За штуку</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Универсальный блок для строительства стен и перегородок
                </p>
                <Button className="w-full bg-[#2D3748] hover:bg-[#4A5568]">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/img/9bee21b2-8d0c-4772-a297-d9b5dda2af60.jpg" 
                  alt="Перегородочный блок" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-[#2D3748]">Перегородочный блок</CardTitle>
                <CardDescription>390×120×188 мм</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#2D3748]">35 ₽</span>
                  <Badge>За штуку</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Для возведения внутренних перегородок и ненесущих стен
                </p>
                <Button className="w-full bg-[#2D3748] hover:bg-[#4A5568]">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/img/b7f4a296-7808-42dd-be18-abcfe0eec04b.jpg" 
                  alt="Половинчатый блок" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-[#2D3748]">Половинчатый блок</CardTitle>
                <CardDescription>190×190×188 мм</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#2D3748]">25 ₽</span>
                  <Badge>За штуку</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Для завершения кладки и создания архитектурных элементов
                </p>
                <Button className="w-full bg-[#2D3748] hover:bg-[#4A5568]">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Certificates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2D3748] mb-6">
                Качество и сертификаты
              </h3>
              <p className="text-gray-600 mb-8">
                Наша продукция соответствует всем требованиям ГОСТ и имеет необходимые 
                сертификаты качества. Мы гарантируем высокие технические характеристики 
                и долговечность наших изделий.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <span className="text-gray-700">Сертификат соответствия ГОСТ 6133-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <span className="text-gray-700">Сертификат пожарной безопасности</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <span className="text-gray-700">Санитарно-эпидемиологическое заключение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <span className="text-gray-700">ISO 9001:2015 - Система менеджмента качества</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#2D3748] mb-4">Технические характеристики</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Прочность:</span>
                  <span className="font-medium">M50-M75</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Морозостойкость:</span>
                  <span className="font-medium">F50</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Теплопроводность:</span>
                  <span className="font-medium">0,35-0,65 Вт/(м·°C)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Плотность:</span>
                  <span className="font-medium">1200-1800 кг/м³</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16 bg-[#2D3748] text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Контакты
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} />
                  <div>
                    <div className="font-medium">+7 (XXX) XXX-XX-XX</div>
                    <div className="text-gray-300">Отдел продаж</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} />
                  <div>
                    <div className="font-medium">info@stroyblok-dnr.ru</div>
                    <div className="text-gray-300">Общие вопросы</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <div className="font-medium">г. Донецк, ул. Промышленная, 15</div>
                    <div className="text-gray-300">Производство и склад</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} />
                  <div>
                    <div className="font-medium">Пн-Пт: 8:00-18:00</div>
                    <div className="text-gray-300">Сб: 9:00-15:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#2D3748] mb-6">Быстрый заказ</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип блока
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3748] focus:border-transparent">
                    <option>Стандартный блок</option>
                    <option>Перегородочный блок</option>
                    <option>Половинчатый блок</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество (шт.)
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    placeholder="1000"
                  />
                </div>
                <Button className="w-full bg-[#2D3748] hover:bg-[#4A5568]">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A202C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-bold mb-4">СтройБлок ДНР</h5>
              <p className="text-gray-400">
                Качественный шлакоблок для строительства в ДНР. 
                Производство и поставка строительных материалов.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Быстрые ссылки</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Документы</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Прайс-лист</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия доставки</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-400">
            © 2024 СтройБлок ДНР. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;