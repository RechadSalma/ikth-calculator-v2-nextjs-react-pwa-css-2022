import styles from "../styles/CalculatorPage.module.css";
import { useEffect, useState, useRef } from "react";

export default function CalculatorScreen(props) {
    const calculatorScreenRef = useRef();
    const formulaScreenRef = useRef();
    const resultScreenRef = useRef();
    const [result, setResult] = useState(0);
    const [formula, setFormula] = useState(0);
    const clickedButton = props.clickedButton;

    useEffect(() => {
        console.log(clickedButton);
    }, [clickedButton]);

    return (
        <div className={styles.screen} ref={calculatorScreenRef}>
            <div className={styles.formulaScreen} ref={formulaScreenRef}>
                {formula}
            </div>
            <div className={styles.resultScreen} ref={resultScreenRef}>
                {result}
            </div>
        </div>
    );
}
