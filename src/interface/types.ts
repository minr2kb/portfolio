export type SkillItemType = {
  name: string;
  rating: number;
  image: string;
  description?: string;
  language?: string;
  code?: string;
};

type DetailType = {
  content: string;
  type: 'subtitle' | 'text';
};
export type ProjectItemType = {
  title: string;
  description: string;
  details: DetailType[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
};
