import styles from './Hero.module.css';
import avatarImage from '@assets/images/hero/avatar.png';
import buttonImage from '@assets/images/hero/button.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>ПОТРЯСАЮЩИЙ САЙТ ОТ</h1>
        <h2 className={styles.content}>FRONTEND</h2>
      </div>
      <div className={styles.image}>
        <img src={avatarImage} alt="Profile" className={styles.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.content2}>
          <h2>ДАВАЙТЕ</h2>
          <img src={buttonImage} alt="Profile" className={styles.button} />
        </div>
        
        <h2> РАБОТАТЬ ВМЕСТЕ</h2>
      </div>
    </section>
  );
};

export default Hero;
