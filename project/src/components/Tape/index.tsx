import styles from './Tape.module.css';
import groupImage from '@assets/images/tape/group.png';

const Tape = () => {
  return (
    <section className={styles.tape}>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>HTML5</h1>
      </div>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>CSS3</h1>
      </div>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>JAVASCRIPT</h1>
      </div>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>REACT</h1>
      </div>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>REDUX</h1>
      </div>
      <div className={styles.container}>
        <img src={groupImage} alt="Profile" className={styles.group} />
        <h1 className={styles.content}>GIT</h1>
      </div>
    </section>
  );
};

export default Tape;
