import styles from "../styles/CalculatorPage.module.css";
import { useRef, useEffect, useState } from "react";
import CalculatorScreen from "./CalculatorScreen";

export default function Calculator() {
    // user clicked button
    const [clickedButton, setClickedButton] = useState("");

    // use delegate eventlisteners to all the buttons
    useEffect(() => {
        calculatorComponent.addEventListener("click", (event) => {
            let buttonPressed = event.target.textContent;
            console.log(buttonPressed);

            // true if the button is not a number   #so it will either be math symbol or functional button
            if (isNaN(event.target.textContent)) {
                setClickedButton(event.target.textContent);
                return;
            }

            // parseFloat the number button
            buttonPressed = parseFloat(buttonPressed);
            setClickedButton(buttonPressed);
        });
    }, [clickedButton]);

    const displayCalculatorScreen = () => {
        console.log(<CalculatorScreen />);
        return <CalculatorScreen clickedButton={clickedButton} />;
    };

    return (
        <div className={styles.calculatorComponent} id="calculatorComponent">
            {displayCalculatorScreen()}

            <div className={styles.c}>C</div>
            <div className={styles.d}>D</div>
            <div className={styles.plus}>+</div>
            <div className={styles.seven}>7</div>
            <div className={styles.eight}>8</div>
            <div className={styles.nine}>9</div>
            <div className={styles.minus}>-</div>
            <div className={styles.four}>4</div>
            <div className={styles.five}>5</div>
            <div className={styles.six}>6</div>
            <div className={styles.multipy}>*</div>
            <div className={styles.one}>1</div>
            <div className={styles.two}>2</div>
            <div className={styles.three}>3</div>
            <div className={styles.divide}>/</div>
            <div className={styles.dot}>.</div>
            <div className={styles.zero}>0</div>
            <div className={styles.equal}>=</div>
        </div>
    );
}
