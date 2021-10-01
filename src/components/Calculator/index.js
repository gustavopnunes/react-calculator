import { useState } from "react";
import Container from "../Container";
import CalculatorStyled from "./style";
import Display from "./Display";
import Numpad from "./Numpad";
import stringMath from "string-math";
import { Instructions } from "../Instructions";

const Calculator = () => {
  const operators = ["+", "-", "*", "/", "."];
  const [inputValues, setInputValues] = useState("0");
  const [firstInputTaken, setFirstInputTaken] = useState(false);
  const [expression, setExpression] = useState("");

  const handleFirstInput = (keyPressed) => {
    const key = keyPressed;
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
    let key = keyPressed;
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
      result = result.toString();
      if (result.includes(".")) {
        result = Number(result);
        result = result.toFixed(2);
      }
      setInputValues(result.toString());
    }
  };

  return (
    <Container
      onKeyDown={(e) => {
        e.preventDefault();
        firstInputTaken ? handleInput(e.key) : handleFirstInput(e.key);
      }}
    >
      <h1>React Calculator</h1>
      <CalculatorStyled>
        <Display expression={expression} inputValues={inputValues} />
        <Numpad>
          <button className="button_clear highlight" onClick={clearInputs}>
            Clear
          </button>
          <button
            className="highlight button_backspace"
            onClick={() => backspace()}
          >
            &#8592;
          </button>
          <button
            name="/"
            className="highlight"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            &#247;
          </button>
          <button
            name="7"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            7
          </button>
          <button
            name="8"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            8
          </button>
          <button
            name="9"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            9
          </button>
          <button
            name="*"
            className="highlight"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            &#10761;
          </button>
          <button
            name="4"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            4
          </button>
          <button
            name="5"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            5
          </button>
          <button
            name="6"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            6
          </button>
          <button
            name="-"
            className="highlight"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            -
          </button>
          <button
            name="1"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            1
          </button>
          <button
            name="2"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            2
          </button>
          <button
            name="3"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            3
          </button>
          <button
            name="+"
            className="highlight"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            +
          </button>
          <button
            name="0"
            className="button_number"
            onClick={(e) =>
              firstInputTaken
                ? handleInput(e.target.name)
                : handleFirstInput(e.target.name)
            }
          >
            0
          </button>
          <button
            name="."
            className="button_number"
            onClick={(e) => handleInput(e.target.name)}
          >
            .
          </button>
          <button className="button_equal highlight" onClick={calculate}>
            =
          </button>
        </Numpad>
        <p>by Gustavo P. Nunes</p>
      </CalculatorStyled>
      <Instructions />
    </Container>
  );
};

export default Calculator;

// TODO: fix cursor pointer bug
