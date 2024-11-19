function Button(props ) {
    return (
        <button type={props.type} onClick={props.onClick} disabled={props.isDisabled}>
            {props.buttonText}
        </button>
    );
}

export default Button;