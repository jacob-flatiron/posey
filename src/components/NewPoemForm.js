import React, {useState} from "react";

function NewPoemForm({setPoems}) {
  const [form, setForm] = useState({title: '', content: '', author: ''})

  // const updateForm = (e) => {
  //   setForm({...form, [e.target.getAttribute('name')]: e.target.value})
  // }

  return (
    <form className="new-poem-form" 
    onSubmit={async (e) => {
      e.preventDefault()
      let req = await fetch('http://localhost:8004/poems', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(form) 
      })
      let res = await req.json()
      setPoems((prevState) => {return [...prevState, res]})
    }}>
      <input placeholder="Title" />
      <input placeholder="Author" />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
