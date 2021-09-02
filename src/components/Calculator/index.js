import { useState } from "react";
import { CalculatorStyled, NumPadStyled, ScreenStyled } from "./style";

export const Calculator = () => {
  const [screenValues, setScreenValues] = useState("");

  const handleClick = (e) => {
    setScreenValues(screenValues.concat(e.target.name));
  };

  const handleKeyDown = (keyPressed) => {
    // console.log(keyPressed.key);
    const validator = /^(\d+|\*\*|[+\-*/])$/;
    if (keyPressed.key.match(validator)) {
      setScreenValues(screenValues.concat(keyPressed.key));
    } else {
      keyPressed.key === "Delete" && backspace();
      keyPressed.key === "Backspace" && backspace();
      keyPressed.key === "Enter" && calculate();
      keyPressed.key === "Escape" && clearScreen();
      return;
    }

    try {
      console.log("sei la que que ta rolando auqi");
    } catch {
      console.log("deu ruim");
    }
  };

  //todo: tratar inputs invalidos

  const clearScreen = () => {
    setScreenValues("");
  };

  const backspace = () => {
    setScreenValues(screenValues.slice(0, -1));
  };

  const calculate = () => {
    setScreenValues(String(eval(screenValues)));
  };

  return (
    <>
      <h1>Simple React Calculator</h1>
      <CalculatorStyled onKeyDown={handleKeyDown}>
        <ScreenStyled>
          <input value={screenValues} maxLength="12" readOnly></input>
        </ScreenStyled>
        <NumPadStyled>
          <button
            className="button_clear highlight"
            onClick={clearScreen}
            onKeyPress={handleKeyDown}
          >
            Clear
          </button>
          <button className="button_operator highlight" onClick={backspace}>
            C
          </button>
          <button
            name="/"
            className="button_operator highlight"
            onClick={handleClick}
          >
            /
          </button>
          <button name="7" className="button_number" onClick={handleClick}>
            7
          </button>
          <button name="8" className="button_number" onClick={handleClick}>
            8
          </button>
          <button name="9" className="button_number" onClick={handleClick}>
            9
          </button>
          <button
            name="*"
            className="button_operator highlight"
            onClick={handleClick}
          >
            X
          </button>
          <button name="4" className="button_number" onClick={handleClick}>
            4
          </button>
          <button name="5" className="button_number" onClick={handleClick}>
            5
          </button>
          <button name="6" className="button_number" onClick={handleClick}>
            6
          </button>
          <button
            name="-"
            className="button_operator highlight"
            onClick={handleClick}
          >
            -
          </button>
          <button name="1" className="button_number" onClick={handleClick}>
            1
          </button>
          <button name="2" className="button_number" onClick={handleClick}>
            2
          </button>
          <button name="3" className="button_number" onClick={handleClick}>
            3
          </button>
          <button
            name="+"
            className="button_operator highlight"
            onClick={handleClick}
          >
            +
          </button>
          <button name="0" className="button_number" onClick={handleClick}>
            0
          </button>
          <button name="." className="button_number" onClick={handleClick}>
            .
          </button>
          <button className="button_equal highlight" onClick={calculate}>
            =
          </button>
        </NumPadStyled>
        <p>by Gustavo</p>
      </CalculatorStyled>
      <div className="instructions">
        insert numbers by clicking on them, or use your keyboard
      </div>
    </>
  );
};
