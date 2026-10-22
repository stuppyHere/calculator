import React , {useState} from "react";
function Layout() {
  const [output, setOutput] = useState("");

 function handleClick(smmtg) {
  setOutput(prev => prev + smmtg);
 }

 function clearALl(){
  setOutput("")
 }

 function execute(){
  try{
    setOutput(eval(output))
  }catch(error){
    setOutput("ERROR")
  }
 }
 
  return (
    <>
      <div className="calculator">
        <p className="inputBox" id="inputBox">{output}</p>
        <div className="button-container">
          <button onClick={() => clearALl()} style={{ gridArea: "ac" }} className="operators ac">AC</button>
          <button onClick={() => handleClick("%")} style={{ gridArea: "percent" }} className="operators">%</button>
          <button onClick={() => handleClick("/")} style={{ gridArea: "divide" }} className="operators">/</button>

          <button onClick={() => handleClick("7")} style={{ gridArea: "seven" }} className="operators">7</button>
          <button onClick={() => handleClick("8")} style={{ gridArea: "eight" }} className="operators">8</button>
          <button onClick={() => handleClick("9")} style={{ gridArea: "nine" }} className="operators">9</button>
          <button onClick={() => handleClick("*")} style={{ gridArea: "multiply" }} className="operators">*</button>

          <button onClick={() => handleClick("4")} style={{ gridArea: "four" }} className="operators">4</button>
          <button onClick={() => handleClick("5")} style={{ gridArea: "five" }} className="operators">5</button>
          <button onClick={() => handleClick("6")} style={{ gridArea: "six" }} className="operators">6</button>
          <button onClick={() => handleClick("+")} style={{ gridArea: "add" }} className="operators">+</button>

          <button onClick={() => handleClick("1")} style={{ gridArea: "one" }} className="operators">1</button>
          <button onClick={() => handleClick("2")} style={{ gridArea: "two" }} className="operators">2</button>
          <button onClick={() => handleClick("3")} style={{ gridArea: "three" }} className="operators">3</button>
          <button onClick={() => handleClick("-")} style={{ gridArea: "subtract" }} className="operators">-</button>

          <button onClick={() => handleClick("0")} style={{ gridArea: "zero" }} className="operators zero">0</button>
          <button onClick={() => handleClick(".")} style={{ gridArea: "decimal" }} className="operators">.</button>
          <button onClick={() => execute()} style={{ gridArea: "equals" }} className="operators">=</button>
        </div>
      </div>
    </>
  );
}

export default Layout;