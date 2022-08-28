import { News } from "../models/news.model";

export const news = [
  {
      content: 'Attention, en raison de travaux, les horaires du CDI sont modifiés.\n10h30-12h et 13h-15h30',
      imagePath: '/news/news1.jpg',
      title: 'CDI - nouveaux horaires',
  },
  {
      content: 'Pour les élèves de 2nde, les nouvelles offres de stage sont arrivées.\nRendez-vous à la vie scolaire pour en savoir plus',
      imagePath: '/news/news2.jpg',
      title: 'Offres de stages',
  },
  {
      content: 'Le programme des soutenances de thèses est désormais disponible. Par mesure de sécurité...',
      imagePath: '/news/news3.jpg',
      title: 'Atelier musique',
  },
] as News[];
