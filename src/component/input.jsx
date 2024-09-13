import styles from "./input.module.css";
import Button from "./Button";
import { useState } from "react";

const Input = ({ calval }) => {
  return <input className={styles.Input} type="" value={calval} readOnly />;
};

export default Input;
