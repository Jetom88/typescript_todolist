import { ChangeEvent, MouseEvent, useState } from "react";
import "./calculator.css";

type Mode = "FIRST_INPUT" | "SECOND_INPUT" | "RESULT";

const Calculator = () => {
  const [numberState, setNumberState] = useState({
    first: 0,
    second: 0,
  });

  const [operator, setOperator] = useState("");

  const [result, setResult] = useState(0);

  const [mode, setMode] = useState<Mode>("FIRST_INPUT");

  const onClickNumber = (e: MouseEvent<HTMLButtonElement>) => {
    if (mode === "SECOND_INPUT") {
      setNumberState({
        ...numberState,
        second: Number(numberState.second + e.currentTarget.value),
      });
    } else if (mode === "FIRST_INPUT") {
      setNumberState({
        ...numberState,
        first: Number(numberState.first + e.currentTarget.value),
      });
    }
  };

  const onClickOperator = (x: string) => {
    setMode("SECOND_INPUT");

    if (x === "/") {
      setOperator("/");
    } else if (x === "*") {
      setOperator("*");
    } else if (x === "-") {
      setOperator("-");
    } else if (x === "+") {
      setOperator("+");
    }
  };

  const onResult = () => {
    setMode("RESULT");
    if (operator === "/") {
      setResult(numberState.first / numberState.second);
    } else if (operator === "*") {
      setResult(numberState.first * numberState.second);
    } else if (operator === "-") {
      setResult(numberState.first - numberState.second);
    } else if (operator === "+") {
      setResult(numberState.first + numberState.second);
    } else if (operator === "%") {
      setResult(numberState.first % numberState.second);
    }
  };

  const onReset = () => {
    setNumberState({
      first: 0,
      second: 0,
    });
    setOperator("");
    setMode("FIRST_INPUT");
  };

  const getInputComponent = () => {
    switch (mode) {
      case "FIRST_INPUT":
        return <input className="input" value={numberState.first} readOnly />;
      case "SECOND_INPUT":
        return <input className="input" value={numberState.second} readOnly />;
      case "RESULT":
        return <input className="input" value={result} readOnly />;
      default:
        throw new Error("말도안되는mode");
    }
  };

  // // const getNumber = (x) => {
  // //   return x.map( num => <div><input  onClick={(e) => {
  //             onClickNumber(e);
  //           }}
  //           value={num}>{num}/></div>)
  // // }

  return (
    <div className="container">
      <p className="displayNumber">
        {operator !== "" ? (
          <>
            <span>{numberState.first}</span>
            <span>{operator === "*" ? "×" : operator}</span>

            <span>{numberState.second}</span>
          </>
        ) : (
          <span>{numberState.first}</span>
        )}
      </p>
      {getInputComponent()}
      <div className="btnCon">
        <div className="btnList">
          <button
            className="btn point reset"
            onClick={() => {
              onReset();
            }}
          >
            AC
          </button>

          <button
            className="btn point"
            onClick={() => {
              onClickOperator("%");
            }}
          >
            %
          </button>
          <button
            className="btn orange"
            onClick={() => {
              onClickOperator("/");
            }}
          >
            ÷
          </button>
        </div>
        <div className="btnList">
          {/* 일부분을 map으로 돌려도 됨 */}
          {/* const number = [7,8,9] */}
          {/* number.map(num =>  <button
            className="btn"
            onClick={(e) => {
              onClickNumber(e);
            }}
            value={num}
          >
            {num} 
          </button> ) */}
          <button
            className="btn"
            onClick={(e) => {
              onClickNumber(e);
            }}
            value="7"
          >
            7
          </button>
          <button
            className="btn"
            value="8"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            8
          </button>
          <button
            className="btn"
            value="9"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            9
          </button>
          <button
            className="btn orange"
            onClick={() => {
              onClickOperator("*");
            }}
          >
            ×
          </button>
        </div>
        <div className="btnList">
          <button
            className="btn"
            value="4"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            4
          </button>
          <button
            className="btn"
            value="5"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            5
          </button>
          <button
            className="btn"
            value="6"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            6
          </button>
          <button
            className="btn orange "
            onClick={() => {
              onClickOperator("-");
            }}
          >
            -
          </button>
        </div>
        <div className="btnList">
          <button
            className="btn"
            value="1"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            1
          </button>
          <button
            className="btn"
            value="2"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            2
          </button>
          <button
            className="btn"
            value="3"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            3
          </button>
          <button
            className="btn orange"
            onClick={() => {
              onClickOperator("+");
            }}
          >
            +
          </button>
        </div>
        <div className="btnList">
          <button
            className="btn zero"
            value="0"
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            0
          </button>
          <button
            className="btn"
            value="."
            onClick={(e) => {
              onClickNumber(e);
            }}
          >
            .
          </button>
          <button
            className="btn orange"
            onClick={() => {
              onResult();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
