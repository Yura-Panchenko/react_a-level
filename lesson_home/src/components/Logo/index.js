// styles
import styles from './styles.module.css';
import logoImg from '../../theme/images/logo.svg';

function Logo() {
    return (
        <a href="/" className={styles.logo}>
            <img src={logoImg} alt="logo" width="40" height="40" />
        </a>
    )
}

export default Logo;