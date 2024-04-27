import { FC } from 'react'
import type { IProject } from '../../types/projectTypes';
import styles from './ProjectCard.module.scss';

export const ProjectCard: FC<IProject> = ({ name, description, profit, expectedProfit}) => {
    const deltaProfits = Math.floor(profit - expectedProfit);
  return (
    <div className={styles.cardWrapp}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>{deltaProfits}</div>
        <div>
            <div>
                {/* Пока просто заглушка */}
            </div>
            {/* Будет отдельный элемент-фича для перенаправления на отдельную странницу проекта */}
            <div>К проекту</div>
        </div>
    </div>
  )
}
