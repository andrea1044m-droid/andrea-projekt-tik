import { TimelineItem, QuizQuestion, Fact, GalleryItem } from "./types";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "1837",
    title: "Makina Analitike e Babbage",
    description: "Charles Babbage projektoi makinën e parë mekanike të programueshme.",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dbfe?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "1945",
    title: "ENIAC",
    description: "Kompjuteri i parë elektronik gjerësisht i përdorshëm, që zinte një dhomë të tërë.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "1951",
    title: "UNIVAC I",
    description: "Kompjuteri i parë komercial i prodhuar në SHBA.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "1971",
    title: "Mikroprocesori i Parë",
    description: "Intel 4004 hapi rrugën për kompjuterët personalë.",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "1981",
    title: "IBM PC",
    description: "Kompjuteri që standardizoi arkitekturën e PC-ve modernë.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "1991",
    title: "Lindja e World Wide Web",
    description: "Tim Berners-Lee krijoi uebin, duke ndryshuar përdorimin e kompjuterëve përgjithmonë.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "2007",
    title: "Revolucioni i Smartphone-ve",
    description: "Prezantimi i iPhone solli fuqinë e kompjuterit në xhepin tonë.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
  },
  {
    year: "Sot",
    title: "Inteligjenca Artificiale",
    description: "Kompjutimi Cloud dhe AI po formësojnë të ardhmen e njerëzimit.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Kush njihet si 'Babai i Kompjuterit'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    correctAnswer: 1,
  },
  {
    question: "Cili ishte kompjuteri i parë elektronik i madh?",
    options: ["UNIVAC", "Apple I", "ENIAC", "IBM 5150"],
    correctAnswer: 2,
  },
  {
    question: "Në cilin vit u lëshua IBM PC i parë?",
    options: ["1975", "1981", "1990", "1968"],
    correctAnswer: 1,
  },
  {
    question: "Cila pajisje konsiderohet 'kompjuteri në xhepin tonë'?",
    options: ["Smartwatch", "Laptop", "Smartphone", "Tablet"],
    correctAnswer: 2,
  },
];

export const FACTS: Fact[] = [
  {
    title: "Bugs (Insektet)",
    content: "Termi 'bug' (insekt) u bë i famshëm kur Grace Hopper gjeti një molë të vërtetë brenda kompjuterit Harvard Mark II në vitin 1947.",
  },
  {
    title: "Pesha e ENIAC",
    content: "ENIAC peshonte rreth 27 ton dhe zinte një hapësirë prej 167 metra katrorë.",
  },
  {
    title: "Miu i parë",
    content: "Miu i parë i kompjuterit u krijua me dru nga Doug Engelbart në vitin 1964.",
  },
  {
    title: "Fuqia e iPhone",
    content: "Një iPhone modern ka miliona herë më shumë fuqi llogaritëse sesa kompjuterët që dërguan njeriun në Hënë në vitin 1969.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: "Difference Engine", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800", category: "vjetër" },
  { id: 2, title: "Vacuum Tubes", image: "https://images.unsplash.com/photo-1614064641938-3bbee5294247?auto=format&fit=crop&q=80&w=800", category: "vjetër" },
  { id: 3, title: "Old Punch Cards", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800", category: "vjetër" },
  { id: 4, title: "Modern Setup", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", category: "modern" },
  { id: 5, title: "Quantum Computing", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800", category: "modern" },
  { id: 6, title: "Futuristic Laptop", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800", category: "modern" },
];
