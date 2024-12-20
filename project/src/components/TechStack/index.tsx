import styles from './TechStack.module.css';
import techStack from '../../data/techStack.json';
import { Technology } from '../../types';

const TechStack = () => {
  return (
    <section className={styles.techStack} id="tech-stack">
        {techStack.technologies.map((tech: Technology) => (
          <div key={tech.id} className={styles.tech}>
            <img className={`icon`} src={`${tech.icon}`}/>
          </div>
        ))}
    </section>
  );
};

export default TechStack;