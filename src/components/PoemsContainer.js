import React, {useState, useEffect} from "react";
import Poem from "./Poem";


function PoemsContainer() {

  const [poems, setPoems] = useState([])

  useEffect(() => {
    (async() => {
      let req = await fetch('http://localhost:8004/poems')
      let res = await req.json()
      setPoems(res)

    })()
  }, [])
  console.log('poems:', poems)
  return (
    <div className="poems-container">
      {
        poems.map((element) => {
          return(
            <Poem element={element} poems={poems} setPoems={setPoems} />
            )
        })
      }
      {/* render a list of <Poem> components in here */}
    </div>
  );
}

export default PoemsContainer;
