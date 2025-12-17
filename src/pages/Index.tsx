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
    image: 'https://cdn.poehali.dev/projects/229cb354-e988-431a-9436-418d13f382d3/files/fc83f225-c720-4c59-b477-3c5374aa457f.jpg',
  },
  {
    id: 2,
    title: 'Что такое криминогенная ситуация?',
    content: [
      'Криминогенная ситуация — это совокупность обстоятельств и условий, которые способствуют совершению преступления или повышают вероятность противоправных действий.',
      'Такие ситуации возникают в местах с недостаточным освещением, малолюдных районах, при встрече с агрессивными незнакомцами.',
      'Важно уметь распознавать потенциальную опасность заранее: обращать внимание на поведение окружающих, маршрут движения, наличие свидетелей.',
      'Осведомлённость и бдительность — первый уровень защиты. Знание признаков опасности позволяет избежать многих проблем.',
      'Статистика показывает: большинство преступлений можно предотвратить, если вовремя заметить признаки угрозы.',
    ],
    icon: 'AlertTriangle',
    image: 'https://cdn.poehali.dev/projects/229cb354-e988-431a-9436-418d13f382d3/files/00fc3bc6-b2a6-4c0c-9119-1f910fcb4491.jpg',
  },
  {
    id: 3,
    title: 'Типы угроз в криминогенных ситуациях',
    content: [
      'Физическая агрессия — прямое нападение, избиение, применение силы. Цель: причинение вреда здоровью или запугивание.',
      'Психологическое давление — угрозы, шантаж, запугивание словами. Направлено на подавление воли жертвы без физического контакта.',
      'Мошенничество — обман, манипуляция доверием. Преступник использует хитрость, чтобы завладеть имуществом или информацией.',
      'Грабёж и разбой — открытое или скрытое отнятие имущества с применением насилия или угрозой его применения.',
      'Каждый тип угрозы требует своей стратегии защиты: от избегания до активного противодействия.',
    ],
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'Психологические основы самозащиты',
    content: [
      'Самообладание — способность контролировать эмоции в критической ситуации. Паника мешает принимать правильные решения.',
      'Наблюдательность — постоянный анализ окружающей обстановки. Замечать подозрительное поведение, изменения в ситуации.',
      'Быстрое принятие решений — умение оценить угрозу и выбрать правильную стратегию поведения за секунды.',
      'Уверенность в себе — демонстрация силы духа отпугивает потенциальных агрессоров. Жертва с уверенной походкой реже подвергается нападению.',
      'Эти навыки можно развивать через тренинги, изучение ситуаций, практику самоконтроля.',
    ],
    icon: 'Brain',
    image: 'https://cdn.poehali.dev/projects/229cb354-e988-431a-9436-418d13f382d3/files/8481cbbb-356e-4522-a473-be1943d10c79.jpg',
  },
  {
    id: 5,
    title: 'Виды психологической самозащиты',
    content: [
      'Избегание конфликта — самый эффективный способ защиты. Уход от опасной ситуации до её развития.',
      'Вербальная защита — спокойное и уверенное общение, попытка деэскалации конфликта словами.',
      'Привлечение внимания — громкий крик, свисток, сигнал о помощи. Преступники избегают свидетелей.',
      'Психологический блок — демонстрация бесстрашия, твёрдости. Создание впечатления сложной цели.',
      'Выбор метода зависит от ситуации: иногда лучше уйти, иногда — закричать, иногда — показать силу.',
    ],
    icon: 'Target',
  },
  {
    id: 6,
    title: 'Конфликт и его природа',
    content: [
      'Конфликт — это столкновение противоположных интересов, мнений, целей двух или более сторон.',
      'Основные причины: недопонимание, агрессивное поведение, борьба за ресурсы, личная неприязнь.',
      'Важно понимать: не все конфликты можно решить мирно. Некоторые агрессоры не готовы к диалогу.',
      'Главная цель в конфликтной ситуации — минимизировать ущерб для себя и других, найти безопасный выход.',
      'Психология конфликта изучает мотивы сторон, помогает предсказать развитие ситуации.',
    ],
    icon: 'Users',
  },
  {
    id: 7,
    title: 'Пути выхода из конфликта',
    content: [
      'Переговоры — активный диалог, поиск компромисса, обсуждение интересов обеих сторон.',
      'Уступка — добровольное отступление для сохранения личной безопасности. Иногда лучше потерять малое, чем рисковать здоровьем.',
      'Сотрудничество — поиск взаимовыгодного решения, где обе стороны получают желаемое.',
      'Уход — полный разрыв контакта с агрессором, избегание дальнейшего взаимодействия.',
      'Каждая стратегия имеет своё место: переговоры работают с адекватными людьми, уход — с опасными.',
    ],
    icon: 'GitMerge',
  },
  {
    id: 8,
    title: 'Стратегии поведения в конфликте',
    content: [
      'Соперничество — активное отстаивание своих интересов, игнорирование позиции другой стороны. Риск эскалации конфликта.',
      'Приспособление — принятие позиции оппонента, отказ от своих интересов ради мира.',
      'Компромисс — частичное удовлетворение интересов обеих сторон. Каждый получает часть желаемого.',
      'Избегание — полный отказ от участия в конфликте, уход от ситуации.',
      'Сотрудничество — совместная работа над решением проблемы, учёт интересов всех сторон.',
      'Выбор стратегии зависит от важности вопроса и уровня опасности.',
    ],
    icon: 'Layers',
  },
  {
    id: 9,
    title: 'Практические советы по самозащите',
    content: [
      'Не провоцируйте агрессора — избегайте резких движений, громких слов, вызывающего поведения.',
      'Сохраняйте спокойствие — контролируйте дыхание, говорите ровным голосом, не показывайте страх.',
      'Ищите выход — постоянно оценивайте возможность безопасного ухода, маршруты отступления.',
      'Зовите на помощь — не стесняйтесь кричать, звонить в полицию, просить поддержки у прохожих.',
      'Доверяйте интуиции — если что-то кажется опасным, скорее всего так и есть.',
    ],
    icon: 'Lightbulb',
  },
  {
    id: 10,
    title: 'Чего НЕ стоит делать в конфликте',
    content: [
      '❌ Вступать в физическое противостояние без крайней необходимости — это подвергает жизнь опасности.',
      '❌ Проявлять агрессию или оскорблять нападающего — это усиливает конфликт и провоцирует насилие.',
      '❌ Паниковать — паника лишает способности мыслить логически и быстро реагировать.',
      '❌ Игнорировать интуицию — предчувствие опасности часто оказывается правильным.',
      '❌ Пытаться быть героем — ваша безопасность важнее имущества или самолюбия.',
    ],
    icon: 'XCircle',
  },
  {
    id: 11,
    title: 'Роль профилактики и предупреждения',
    content: [
      'Избегайте опасных мест в тёмное время суток — статистика показывает пик преступлений вечером и ночью.',
      'Изучайте маршруты заранее — знание местности даёт преимущество, позволяет найти безопасные пути.',
      'Не демонстрируйте ценные вещи на публике — дорогие телефоны, украшения привлекают грабителей.',
      'Держите связь с близкими — регулярно сообщайте о своём местоположении, особенно в незнакомых местах.',
      'Профилактика эффективнее защиты: предотвратить опасность проще, чем бороться с ней.',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 12,
    title: 'Выводы и заключение',
    content: [
      'Психологическая самозащита — это навык, который можно и нужно развивать через знания и практику.',
      'Знание путей выхода из конфликтов значительно повышает вашу личную безопасность в различных ситуациях.',
      'Бдительность, самообладание и умение быстро действовать — ключевые факторы успешной самозащиты.',
      'Помните: ваша жизнь и здоровье всегда важнее любого конфликта, имущества или самолюбия.',
      'Будьте внимательны, осторожны и уверены в себе!',
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
      <div className="w-full max-w-6xl">
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
          <div className="aspect-[16/9] bg-white flex">
            {slide.type === 'title' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-8">
                {slide.image && (
                  <img 
                    src={slide.image} 
                    alt="Титульный слайд" 
                    className="w-32 h-32 object-cover rounded-3xl shadow-lg mb-4"
                  />
                )}
                <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
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
              <>
                <div className="flex-1 p-10 flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={slide.icon as any} className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight flex-1 pt-1">
                      {slide.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3 flex-1 overflow-y-auto">
                    {slide.content?.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-base text-gray-700 leading-relaxed animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="w-7 h-7 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 font-semibold text-xs mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-xs text-gray-400">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>

                {slide.image && (
                  <div className="w-1/3 bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center p-6">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                )}
              </>
            )}
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
          Используйте стрелки ← → или точки для навигации
        </div>
      </div>
    </div>
  );
}
