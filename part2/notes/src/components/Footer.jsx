const Footer = () => {
    const footerStyle = {
        color: 'gray',
        textStyle: 'italic',
        fontSize: 16,
        marginTop: 20
    }
    return (
        <div style={footerStyle}>
            <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
        </div>
    )
}

export default Footer