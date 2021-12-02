const UserName = ({ name }) => {
    return <>{name}</>
}
const PostName = ({ name }) => {
    return <>{name}</>
}
const PostUserName = ({ name }) => {
    return <>{name}</>
}

export ConstProfile = () => {
    const name = 'Natasha';
    return (
        <>
            <UserName name={name} />
            <PostName name={name} />
            <PostUserName name={name} />
        </>
    )
}
