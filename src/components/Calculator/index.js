import { useState } from "react";
import Container from "../Container";
import { CalculatorStyled } from "./style";
import Display from "./Display";
import Numpad from "./Numpad";
const stringMath = require("string-math");

const Calculator = () => {
  const operators = ["+", "-", "*", "/", "."];
  const [inputValues, setInputValues] = useState("0");
  const [firstInputTaken, setFirstInputTaken] = useState(false);
  const [expression, setExpression] = useState("");

  const handleFirstInput = (keyPressed) => {
    const key = keyPressed.target.name || keyPressed.key;
    if (!isNaN(key) || key === "-") {
      setInputValues(key);
      setFirstInputTaken(true);
    }

    if (key === ".") {
      setInputValues(inputValues.concat(key));
      setFirstInputTaken(true);
    }
  };

  const handleInput = (keyPressed) => {
    let key;
    keyPressed.detail === 1
      ? (key = keyPressed.target.name)
      : (key = keyPressed.key);

    if (key === "Backspace") return backspace();
    if (key === "Delete") return backspace();
    if (key === "Escape") return clearInputs();
    if (key === "Enter") return calculate();

    if (!isNaN(key) || operators.includes(key)) {
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

  const error = () => {
    setInputValues("Error!");
  };

  const calculate = () => {
    let expression = "";
    const lastDigit = inputValues[inputValues.length - 1];
    let result = "";

    if (operators.includes(lastDigit)) {
      return;
    } else {
      expression = inputValues;
      result = stringMath(expression, error);
      setExpression(expression);
      setInputValues(result.toString());
    }
  };

  return (
    <Container onKeyDown={firstInputTaken ? handleInput : handleFirstInput}>
      <h1>React Calculator</h1>
      <CalculatorStyled>
        <Display>
          <input value={expression} readOnly className="input_queue"></input>
          <input value={inputValues} readOnly></input>
        </Display>
        <Numpad>
          <button className="button_clear highlight" onClick={clearInputs}>
            Clear
          </button>
          <button
            className="button_operator highlight button_backspace"
            onClick={backspace}
          >
            &#8592;
          </button>
          <button
            name="/"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            &#247;
          </button>
          <button
            name="7"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
            tabIndex="-1"
          >
            7
          </button>
          <button
            name="8"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            8
          </button>
          <button
            name="9"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            9
          </button>
          <button
            name="*"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            &#10761;
          </button>
          <button
            name="4"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            4
          </button>
          <button
            name="5"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            5
          </button>
          <button
            name="6"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            6
          </button>
          <button
            name="-"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            -
          </button>
          <button
            name="1"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            1
          </button>
          <button
            name="2"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            2
          </button>
          <button
            name="3"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            3
          </button>
          <button
            name="+"
            className="button_operator highlight"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            +
          </button>
          <button
            name="0"
            className="button_number"
            onClick={firstInputTaken ? handleInput : handleFirstInput}
          >
            0
          </button>
          <button name="." className="button_number" onClick={handleInput}>
            .
          </button>
          <button className="button_equal highlight" onClick={calculate}>
            =
          </button>
        </Numpad>
        <p>by Gustavo P. Nunes</p>
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
    </Container>
  );
};

export default Calculator;
