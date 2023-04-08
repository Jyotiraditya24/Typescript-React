type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps): JSX.Element => {
    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>Welcome {props.name} your have 10 unread messsages</h2>
            <h1>the message count is {props.messageCount}</h1>
            <h1>{props.isLoggedIn}</h1>
        </div>
    )
}



