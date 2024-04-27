import { FC } from 'react';
import type { IProject } from '../../types/projectTypes';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './CardsList.module.scss';

export const CardsList: FC<{projectsList: IProject[]}> = ({projectsList}) => {
  return (
    <div className={styles.cardsList}>
        {projectsList.map(project => (
        <ProjectCard
          key={project.id}
          id={project.id} //Нормальный ключ задать не забыть
          name={project.name}
          description={project.description}
          profit={project.profit}
          expectedProfit={project.expectedProfit}
        />
      ))}
    </div>
  )
}
