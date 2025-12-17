import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Психологические основы самозащиты в криминогенных ситуациях',
    subtitle: 'Пути выхода из конфликтных ситуаций',
    author: 'Выполнил: Ошурков Егор 9Д',
    type: 'title',
  },
  {
    id: 2,
    title: 'Что такое криминогенная ситуация?',
    content: [
      'Криминогенная ситуация — это обстановка, способствующая совершению преступления',
      'Важно уметь распознавать потенциальную опасность заранее',
      'Осведомлённость и бдительность — первый уровень защиты',
    ],
    icon: 'AlertTriangle',
  },
  {
    id: 3,
    title: 'Типы угроз',
    content: [
      'Физическая агрессия — нападение, избиение',
      'Психологическое давление — угрозы, шантаж',
      'Мошенничество — обман, манипуляция',
      'Грабёж и разбой — отнятие имущества силой',
    ],
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'Психологические основы самозащиты',
    content: [
      'Самообладание — контроль эмоций в критической ситуации',
      'Наблюдательность — анализ окружающей обстановки',
      'Быстрое принятие решений — выбор правильной стратегии поведения',
      'Уверенность в себе — демонстрация силы духа',
    ],
    icon: 'Brain',
  },
  {
    id: 5,
    title: 'Виды психологической самозащиты',
    content: [
      'Избегание конфликта — уход от опасной ситуации',
      'Вербальная защита — спокойное и уверенное общение',
      'Привлечение внимания — крик, сигнал о помощи',
      'Психологический блок — демонстрация бесстрашия',
    ],
    icon: 'Target',
  },
  {
    id: 6,
    title: 'Конфликт и его природа',
    content: [
      'Конфликт — столкновение противоположных интересов',
      'Причины: недопонимание, агрессия, борьба за ресурсы',
      'Важно: не все конфликты можно решить мирно',
      'Цель: минимизировать ущерб для себя и других',
    ],
    icon: 'Users',
  },
  {
    id: 7,
    title: 'Пути выхода из конфликта',
    content: [
      'Переговоры — поиск компромисса',
      'Уступка — отступление для сохранения безопасности',
      'Сотрудничество — поиск взаимовыгодного решения',
      'Уход — разрыв контакта с агрессором',
    ],
    icon: 'GitMerge',
  },
  {
    id: 8,
    title: 'Стратегии поведения в конфликте',
    content: [
      'Соперничество — отстаивание своих интересов (риск эскалации)',
      'Приспособление — принятие позиции оппонента',
      'Компромисс — частичное удовлетворение обеих сторон',
      'Избегание — отказ от участия в конфликте',
      'Сотрудничество — совместное решение проблемы',
    ],
    icon: 'Layers',
  },
  {
    id: 9,
    title: 'Практические советы',
    content: [
      'Не провоцируйте агрессора — избегайте резких движений и слов',
      'Сохраняйте спокойствие — контролируйте дыхание и голос',
      'Ищите выход — оцените возможность безопасного ухода',
      'Зовите на помощь — не стесняйтесь просить поддержки',
    ],
    icon: 'Lightbulb',
  },
  {
    id: 10,
    title: 'Чего НЕ стоит делать',
    content: [
      '❌ Вступать в физическое противостояние без крайней необходимости',
      '❌ Проявлять агрессию или оскорблять нападающего',
      '❌ Паниковать — это лишает способности мыслить',
      '❌ Игнорировать интуицию — предчувствие опасности важно',
    ],
    icon: 'XCircle',
  },
  {
    id: 11,
    title: 'Роль профилактики',
    content: [
      'Избегайте опасных мест в тёмное время суток',
      'Изучайте маршруты заранее',
      'Не демонстрируйте ценные вещи на публике',
      'Держите связь с близкими — сообщайте о своём местоположении',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 12,
    title: 'Выводы',
    content: [
      'Психологическая самозащита — это навык, который можно развить',
      'Знание путей выхода из конфликтов повышает вашу безопасность',
      'Бдительность, самообладание и умение действовать — ключевые факторы',
      'Помните: ваша жизнь и здоровье важнее любого конфликта',
    ],
    icon: 'CheckCircle2',
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const downloadPPTX = () => {
    const content = slides.map(slide => {
      if (slide.type === 'title') {
        return `СЛАЙД ${slide.id}:\n${slide.title}\n${slide.subtitle}\n${slide.author}\n`;
      }
      return `СЛАЙД ${slide.id}:\n${slide.title}\n${slide.content?.join('\n')}\n`;
    }).join('\n---\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'presentation-content.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="mb-4 flex justify-end">
          <Button
            onClick={downloadPPTX}
            className="bg-sky-600 hover:bg-sky-700 text-white gap-2"
          >
            <Icon name="Download" size={20} />
            Скачать содержимое презентации
          </Button>
        </div>

        <Card className="relative overflow-hidden shadow-2xl border-2 border-sky-100">
          <div className="aspect-[16/9] bg-white p-12 flex flex-col">
            {slide.type === 'title' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" size={40} />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-2xl text-sky-600 font-semibold">
                  {slide.subtitle}
                </p>
                <div className="pt-8 text-lg text-gray-600">
                  {slide.author}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={slide.icon as any} className="text-white" size={28} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight flex-1 pt-2">
                    {slide.title}
                  </h2>
                </div>
                
                <ul className="space-y-5 flex-1">
                  {slide.content?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-xl text-gray-700 leading-relaxed animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="w-8 h-8 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 font-semibold text-sm mt-1">
                        {index + 1}
                      </span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="absolute bottom-6 left-12 text-sm text-gray-400">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-12 w-12 rounded-full bg-white/80 hover:bg-white shadow-lg disabled:opacity-30"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="h-12 w-12 rounded-full bg-white/80 hover:bg-white shadow-lg disabled:opacity-30"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </Card>

        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-sky-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          Используйте стрелки ← → для навигации
        </div>
      </div>
    </div>
  );
}
