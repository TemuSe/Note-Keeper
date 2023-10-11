import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function WritingArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
        timeStamp: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()%100}`
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            timeStamp: new Date().toLocaleString()
        });
        event.preventDefault();
    }

  return (
    <div>
      <form className="note-form">
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title"  />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Note ..." rows="3"  />
        <button onClick={submitNote}>
            <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default WritingArea;
