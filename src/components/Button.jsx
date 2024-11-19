function Button({buttonType, buttonClicked, isDisabled, buttonText} ) {
    return (
        <button type={buttonType} onClick={buttonClicked} disabled={isDisabled}>
            {buttonText}
        </button>
    );
}

export default Button;