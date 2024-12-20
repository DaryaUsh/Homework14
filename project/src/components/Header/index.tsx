import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>{'FRONT'}</span>
      </div>
      <nav className={styles.nav}>
        <a href="#home">ГЛАВНАЯ</a>
        <a href="#tech-stack">ТЕХНОЛОГИЧЕСКИЙ СТЕК</a>
        <a href="#projects">ПРОЕКТЫ</a>
      </nav>
      <div className={styles.socials}>
        <a href="" target="_blank" rel=""><button>СВЯЗАТЬСЯ СО МНОЙ</button>
        </a>
      </div>
    </header>
  );
};

export default Header;