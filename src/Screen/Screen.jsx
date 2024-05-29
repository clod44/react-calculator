


function Screen(props) {
    return (
        <input type="text" className="font-mono bg-base-100 rounded-box shadow-inner w-full h-full text-end p-3 text-5xl focus:outline-primary outline-primary" value={props.children} onChange={(e) => props.setFormula(e.target.value)}></input>
    );
}

export default Screen;