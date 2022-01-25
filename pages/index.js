/**
 * CALCULATOR PAGE
 */
import styles from "../styles/CalculatorPage.module.css";
import Head from "next/head";
import Calculator from "../components/Calculator.js";

export default function CalculatorPage(props) {
  // console.log(props);
  return (
    <div className={`${styles.calPage} calPage1`}>
      {/* <h1>iK calculator page</h1> */}
      <Head>
        <title>I am calculator page</title>
        <meta name="description" content="iK calculator page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calculator />
    </div>
  );
}
