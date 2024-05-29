import './App.css';
import Button from './Button/Button';
import Screen from './Screen/Screen';
import Branding from './Branding/Branding';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
    const buttonSymbols = "( ) % CE 7 8 9 ÷ 4 5 6 x 1 2 3 - 0 . = +".split(" ");
    const [formula, setFormula] = useState("");

    const handleButtonClick = (symbol) => {
        if (symbol === "CE") {
            setFormula("");
        } else if (symbol === "=") {
            try {
                const sanitizedFormula = formula.replace(/x/g, "*").replace(/÷/g, "/");
                if (/^[0-9+\-*/().% ]+$/.test(sanitizedFormula)) {
                    const result = evaluate(sanitizedFormula).toString();
                    setFormula(result);
                } else {
                    throw new Error("Invalid input");
                }
            } catch (error) {
                setFormula("Error");
            }
        } else {
            setFormula(prevFormula => prevFormula + symbol);
        }
    };

    return (
        <div className='h-dvh p-3'>
            <div className='rounded-box border border-primary shadow bg-base-300 h-full grid grid-cols-1 gap-3 p-3'>
                <div className='flex flex-col'>
                    <Branding />

                    <div className='grow'>
                        <Screen setFormula={setFormula}>{formula}</Screen>
                    </div>
                    <hr className='my-3 mb-1 p-0 border-primary' />
                </div>
                <div className='grid grid-cols-4 grid-rows-5 gap-3'>
                    {buttonSymbols.map((symbol, index) => (
                        <Button key={index} onClick={() => handleButtonClick(symbol)}>{symbol}</Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
