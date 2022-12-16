import "./calculator.css";

const Calculator = () => {
  return (
    <div className="container">
      <input className="input" value={1} />
      <div className="btnCon">
        <div className="btnList">
          <button className="btn point">C</button>
          <button className="btn point">+/-</button>
          <button className="btn point">%</button>
          <button className="btn orange">÷</button>
        </div>
        <div className="btnList">
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn orange">x</button>
        </div>
        <div className="btnList">
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn orange">-</button>
        </div>
        <div className="btnList">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn orange">+</button>
        </div>
        <div className="btnList">
          <button className="btn zero">0</button>
          <button className="btn">.</button>
          <button className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
