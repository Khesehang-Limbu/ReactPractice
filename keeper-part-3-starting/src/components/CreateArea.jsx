import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false);

  // const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    // const newNote = {
    //   title: event.target.title.value,
    //   content: event.target.content.value
    // }

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    });
  }

  function handleClick(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded &&  <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
        <textarea onClick={handleClick} name="content" placeholder="Take a note..." rows={expanded ? "3" : "1"} onChange={handleChange} value={note.content} />

        <Zoom in={expanded}>
          <Fab onClick={handleSubmit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
