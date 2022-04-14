import React, {useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App({form, setForm, poems, setPoems}) {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div className="sidebar">
      <div style={{ visibility: show ? "visible" : "hidden" }}>
        <button onClick={() => setShow((s) => !s)}>Show/hide new poem form</button>
  <NewPoemForm form={form} setPoems={setPoems} /> 
      </div>
      </div>
      {true ? <PoemsContainer setShow={setShow} show={show} form={form} setForm={setForm} poems={poems} /> : null}
    </div>
  );
}

export default App;


{/* <button className={star} onClick={() => {setFavs(!favs)}} */}