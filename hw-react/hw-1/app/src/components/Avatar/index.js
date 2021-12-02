import styles from './styles.module.css';

export function Avatar(props) {
    return (
        <div className={styles.avatar}>
            <img
                src={props.user}
                alt={props.alt}
            />
        </div>
    )
}