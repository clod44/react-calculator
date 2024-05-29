


function Button(props) {
    const handleClick = () => {
        props.onClick(props.children);
    }
    return (
        <button className="btn h-full btn-lg text-4xl shadow-lg" onClick={handleClick}>{props.children}</button>
    );
}

export default Button;