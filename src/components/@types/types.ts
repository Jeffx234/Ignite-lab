export interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
export interface LessonsProps {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: 'live' | 'class';
  }[]
}

export interface GetLessonBySlugResponse {
  lesson: {
    videoId: string;
    description: string;
    title: string;
    teacher: {
      name: string;
      avatarURL: string;
      bio: string;
    };
  };
}


export interface IVideoProps {
  lessonSlug: string;
}
