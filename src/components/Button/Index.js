const UserName = ({ name }) => {
    return <>{name}</>
}
const PostName = ({ name }) => {
    return <>{name}</>
}
const PostUserName = ({ name }) => {
    return <>{name}</>
}

export function Button() {
    return <button type="button">Button</button>
}

export function ButtonTypeSecondary({ type, title = 'Default name' }) {
    return <button style={{ color: type }} type="button">{title}</button>
}