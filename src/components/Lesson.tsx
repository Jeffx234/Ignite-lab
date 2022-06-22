import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson({ title, slug, availableAt, type }: ILessonProps) {
  const isLessonsAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE', 'd' de 'MMMM' às 'HH:mm'", {
    locale: ptBR,
  });

  return (
    <a href="#">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">

          {
            isLessonsAvailable ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2"> 
                <CheckCircle size={20}/> Conteúdo da liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2"> 
                <Lock size={20}/> Em breve
              </span>
            )
          }

          <span className="text-xs rounded py[0.125rem] px-2 text-white border border-green-300 font-bold"> 
            {type === 'live' ? 'Aula ao vivo' : 'Aula pratica'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </a>
  );
}