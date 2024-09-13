import Input from "./component/input";
import Button from "./component/Button";
import Container from "./component/container";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      setcalval(eval(calval));
    } else {
      const newVal = calval + buttonText;
      setcalval(newVal);
    }
  };

  return (
    <Container>
      <Input calval={calval}></Input>
      <Button ondisplay={onButtonclick}></Button>
    </Container>
  );
}

export default App;
