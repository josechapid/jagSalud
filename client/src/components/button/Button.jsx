import "./Button.css"
function Button (props) {
    return (
        <>
            <button className="container-button">
                {props.name}
            </button>
        </>
    )
}

export default Button;