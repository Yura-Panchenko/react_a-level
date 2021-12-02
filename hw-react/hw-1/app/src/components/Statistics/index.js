import styles from './styles.module.css';
export function Statistics(props) {
    return (
        <ul className={styles.statistics}>
            {Object.entries(props.statistics).map(function ([key, value]) {
                return (
                    <li>
                        <span className={styles.title}>{key}</span>
                        <b className={styles.num}>{value}</b>
                    </li>
                );
            })}
        </ul>
    );
}
