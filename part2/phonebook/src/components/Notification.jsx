const Notification = ({ message }) => {

    if (message === null) {
        return null
    }

    const errorStyle = {
        color: 'black',
        border: '2px solid red',
        textSize: 16,
        maxWidth: 700,
        margin: 20,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgb(255, 228, 228)'
    }

    const successStyle = {
        color: 'black',
        border: '2px solid green',
        textSize: 16,
        maxWidth: 700,
        margin: 20,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgb(219, 253, 219)'
    }

    const style = message.category === 'error' ? errorStyle : successStyle
    return (
        <div style={style}>{message.content}</div>
    )
}

export default Notification