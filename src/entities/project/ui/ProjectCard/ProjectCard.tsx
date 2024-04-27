import { FC } from 'react'
import type { IProject } from '../../types/projectTypes';
import styles from './ProjectCard.module.scss';

export const ProjectCard: FC<IProject> = ({ name, description, profit, expectedProfit}) => {
    const deltaProfits = Math.floor(profit - expectedProfit);
  return (
    <div className={styles.card__wrapp}>
        <h3 className={styles.card__title}>{name}</h3>
        <p className={styles.card__description}>{description}</p>
        <div>{deltaProfits}</div>

            <div>
                {/* Пока просто заглушка */}
            </div>
            {/* Будет отдельный элемент-фича для перенаправления на отдельную странницу проекта */}
            <div className={styles.card__forward}>К проекту</div>
    </div>
  )
}
