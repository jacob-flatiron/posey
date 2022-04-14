import React, {useState} from "react";

function Poem({element }) {
  const [show, setShow] = useState(true)
  let vis = show ? setShow : show 
  return (
    <div>
      <h3>{element.title}</h3>
      <p>{element.content}</p>
      <p>
        <strong>{element.author}</strong>
      </p>
      <button className={vis} onClick={()=> {setShow(!show)}}>{ show ? 'read' : 'unread' }</button>
    </div>
  );
}

export default Poem;


