import styles from './styles.module.css';
import { Avatar } from './../Avatar/index';
import { Statistics } from './../Statistics/index';

export function Profile(props) {
    return (
        <div className={styles.card}>
            <Avatar
                user={props.avatar}
                alt={props.username}
            />
            <div className={styles.body}>
                <h2>{props.username}</h2>
                <p>@{props.tag}</p>
                <address>{props.location}</address>
            </div>
            <Statistics
                statistics={props.stats}
            />
        </div >
    )
}