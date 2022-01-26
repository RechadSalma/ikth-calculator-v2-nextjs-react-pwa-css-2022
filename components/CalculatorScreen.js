import styles from "../styles/CalculatorPage.module.css";
import { useState, useRef } from "react";

export default function CalculatorScreen(props) {
    const calculatorScreenRef = useRef();
    const formulaScreenRef = useRef();
    const resultScreenRef = useRef();
    const [result, setResult] = useState(0);
    const [formula, setFormula] = useState(0);
    const clickedButton = props.clickedButton;

    console.log(clickedButton);

    // result
    // previousNumber
    // currentNumber
    // currentMathSign
    // formulaScreen

    // IF clickedButton is a number OR a minus sign OR a dot THEN
    //  IF
    //  END IF
    // ELSE IF clickedButton is a math sign AND previousNumber NOT null THEN
    // ELSE IF clickedButton is a equal sign THEN
    // ELSE IF clickedButton is a d (delete button) THEN
    // ELSE IF clickedButton is a c (clear button) THEN
    // END IF

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
