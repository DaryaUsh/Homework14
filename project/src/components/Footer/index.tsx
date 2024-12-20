import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <small>Terms & Conditions, Privacy Policy</small>
        <small>&copy; 2024 FRONTEND.</small>
    </footer>
  );
};

export default Footer;