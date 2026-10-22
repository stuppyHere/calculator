function Layout() {
  return (
    <>
      <div className="calculator">
        <div className="inputBox" id="inputBox"></div>
        <div className="button-container">
          <button className="operators">AC</button>
          <button className="operators">%</button>
          <button className="operators">/</button>
          <button className="operators">7</button>
          <button className="operators">8</button>
          <button className="operators">9</button>
          <button className="operators">*</button>
          <button className="operators">4</button>
          <button className="operators">5</button>
          <button className="operators">6</button>
          <button className="operators">+</button>
          <button className="operators">1</button>
          <button className="operators">2</button>
          <button className="operators">3</button>
          <button className="operators">-</button>
          <button className="operators">0</button>
          <button className="operators">.</button>
          <button className="operators">=</button>
        </div>
      </div>
    </>
  );
}

export default Layout;
