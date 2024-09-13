import styles from "./button.module.css";

const Button = ({ ondisplay }) => {
  const values = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const buttons = values.map((value) => (
    <button
      key={value}
      className={styles.Button}
      onClick={() => ondisplay(value)}
    >
      {value}
    </button>
  ));
  return <div>{buttons}</div>;
};
export default Button;
