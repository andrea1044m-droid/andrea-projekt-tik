export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Fact {
  title: string;
  content: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "vjetër" | "modern";
}
