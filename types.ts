
export type SlideType = 'intro' | 'capa' | 'content' | 'checklist' | 'reflection' | 'verse';

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface Slide {
  id: number;
  title: string;
  type: SlideType;
  subtitle?: string;
  content?: string[];
  callout?: string;
  verse?: {
    text: string;
    reference: string;
  };
  question?: string;
  checklist?: ChecklistItem[];
  expandableContent?: string;
  measurement?: string[];
  expectations?: string[];
  commitments?: string[];
  posture?: string[];
  timeline?: { time: string; text: string }[];
  goldRules?: string[];
  fullScreen?: boolean;
  reference?: string;
}

export interface AppState {
  currentSlideIndex: number;
  isMenuOpen: boolean;
  hasStarted: boolean;
  completedItems: Set<string>;
}
