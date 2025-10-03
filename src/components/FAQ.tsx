import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает доставка автомобиля?",
    answer: "Доставка автомобиля обычно занимает от 30 до 60 дней в зависимости от страны происхождения и модели. Из Кореи - около 30-40 дней, из Японии - 35-50 дней, из Китая - 40-60 дней. Мы информируем вас на каждом этапе доставки.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы предоставляем полную гарантию на техническое состояние автомобиля. Каждое авто проходит тщательную проверку перед отправкой. Также гарантируем юридическую чистоту и полный пакет документов для регистрации в ГИБДД.",
  },
  {
    question: "Действительно ли можно сэкономить до 35%?",
    answer: "Да, покупка автомобиля напрямую у официальных дилеров в Азии позволяет избежать наценок российских посредников. Экономия зависит от модели и комплектации, но в среднем составляет 25-35% от цены аналогичного авто в России.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Мы предлагаем гибкие схемы оплаты. Обычно требуется предоплата 30% для начала работы, остальная сумма оплачивается перед отправкой автомобиля. Возможна рассрочка и работа с автокредитами.",
  },
  {
    question: "Можно ли заказать автомобиль под заказ?",
    answer: "Да, мы можем заказать автомобиль с нужной вам комплектацией и цветом. Срок поставки в этом случае может увеличиться до 60-90 дней, но вы получите именно тот автомобиль, который хотите.",
  },
  {
    question: "Какие документы я получу?",
    answer: "Вы получите полный пакет документов: договор купли-продажи, грузовая таможенная декларация (ГТД), паспорт транспортного средства (ПТС), сертификат соответствия, акт приема-передачи. Все документы для постановки на учет в ГИБДД.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Вопросы и <span className="text-gold">ответы</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на часто задаваемые вопросы о покупке автомобилей
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-gold transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
