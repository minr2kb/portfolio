export interface SkillItemType {
  name: string;
  rating: number;
  image: string;
  description?: string;
  language?: string;
  code?: string;
}

export interface ProjectItemType {
  title: string;
  description: string;
  details: string[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
}
