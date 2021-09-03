import { useState } from "react";
import { Button } from "./Button";
import { CalculatorStyled, NumPadStyled, ScreenStyled } from "./style";
const stringMath = require("string-math");

export const Calculator = () => {
  const operators = ["+", "-", "*", "/"];
  const [inputValues, setInputValues] = useState("0");
  const [firstInputTaken, setFirstInputTaken] = useState(false);
  // const [hasDot, setHasDot] = useState(false);
  //todo: tratar entrada de mais de um ponto
  const [expression, setExpression] = useState("");

  const handleFirstInput = (keyPressed) => {
    const key = keyPressed.target.name || keyPressed.key;
    if (!isNaN(key) || key === "-") {
      setInputValues(key);
      setFirstInputTaken(true);
    }
  };

  const handleInput = (keyPressed) => {
    const key = keyPressed.target.name || keyPressed.key;
    if (key === "Backspace") return backspace();
    if (key === "Delete") return backspace();
    if (key === "Escape") return clearInputs();
    if (key === "Enter") return calculate();

    if (inputValues.length < 12) {
      setInputValues(inputValues);
      const lastDigit = inputValues[inputValues.length - 1];
      if (!operators.includes(lastDigit) || !isNaN(key)) {
        setInputValues(inputValues.concat(key));
      } else {
        if (operators.includes(key)) {
          setInputValues(String(inputValues.slice(0, -1).concat(key)));
        } else {
          setInputValues(inputValues.concat(key));
        }
        return;
      }
      setInputValues(inputValues.concat(key));
    }
  };

  const backspace = () => {
    if (inputValues.length === 1 && inputValues[0] === "0") {
      return;
    }

    if (inputValues.length === 1) {
      setInputValues("0");
      setFirstInputTaken(false);
      setExpression("");
      return;
    }

    setInputValues(inputValues.slice(0, -1));
    const lastDigit = inputValues[inputValues.length - 1];
    if (operators.includes(lastDigit)) {
    }
  };

  const clearInputs = () => {
    setInputValues("0");
    setFirstInputTaken(false);
    setExpression("");
  };

  const calculate = () => {
    let expression = "";
    const lastDigit = inputValues[inputValues.length - 1];
    let result = "";

    if (operators.includes(lastDigit)) {
      return;
    } else {
      expression = inputValues;
      result = stringMath(expression);
      setExpression(expression);
      setInputValues(result.toString());
    }
  };

  return (
    <>
      <h1>React Calculator</h1>
      <CalculatorStyled
        onKeyDown={firstInputTaken ? handleInput : handleFirstInput}
      >
        <ScreenStyled>
          <input value={expression} readOnly className="input_queue"></input>
          <input value={inputValues} readOnly></input>
        </ScreenStyled>
        <NumPadStyled>
          <Button
            text="Clear"
            className="button_clear highlight"
            onClick={clearInputs}
            onKeyPress={""}
          ></Button>
          <Button
            text={<span>&#8701;</span>}
            className="button_operator highlight button_backspace"
            onClick={backspace}
          ></Button>
          <Button
            text={"\u00F7"}
            name="/"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            ÷
          </Button>
          <Button
            text="7"
            name="7"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="8"
            text="8"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="9"
            text="9"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            9
          </Button>
          <Button
            name="*"
            text="X"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="4"
            text="4"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="5"
            text="5"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="6"
            text="6"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="-"
            text={"\u2212"}
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="1"
            text="1"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="2"
            text="2"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="3"
            text="3"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          ></Button>
          <Button
            name="+"
            text="+"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            +
          </Button>
          <Button
            name="8"
            text="8"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            0
          </Button>
          <Button
            name="."
            text="."
            className="button_number"
            onClick={handleInput}
          >
            .
          </Button>
          <Button
            text="="
            className="button_equal highlight"
            onClick={calculate}
          >
            =
          </Button>
        </NumPadStyled>
        <p>made by Greg</p>
      </CalculatorStyled>
      <div className="instructions">
        <p>insert numbers by clicking on them, or use your keyboard</p>
        <br />
        <p>
          <span>Esc: </span> clean display
        </p>
        <p>
          <span>Del / backspace:</span> delete last symbol
        </p>
        <p>
          <span>Enter:</span> calculate
        </p>
      </div>
    </>
  );
};
