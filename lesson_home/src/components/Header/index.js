// Components
import Logo from '../Logo';

// Styles
import styles from './styles.module.css';

export function Header() {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}