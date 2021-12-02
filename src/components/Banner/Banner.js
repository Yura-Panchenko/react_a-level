import styles from './styles.module.css';
import { ButtonTypeSecondary } from '../Button/Index';


export function Banner() {
    return <>
        <p className={styles.banner}>Banner</p>
        <ButtonTypeSecondary type="blue" />
    </>
}