/**
 * CALCULATOR PAGE
 */
import Head from "next/head";
import Calculator from "../components/Calculator.js";

export default function CalculatorPage(props) {
    return (
        <div className={`calPage1`}>
            <Head>
                <title>I am calculator page</title>
                <meta name="description" content="iK calculator page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Calculator />
        </div>
    );
}
