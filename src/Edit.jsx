import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const Edit = ({ id, title, content, onUpdateNote, onDelete, timeStamp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdateNote(id, editedTitle, editedContent);
    setIsEditing(false);
  };

const handleClick = () => {
  const isConfirmed = window.confirm("Are you sure to delete?");
  if(isConfirmed){
    onDelete(id);
  }
};

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
          <button onClick={handleClick}>
                <ClearIcon />
          </button>
          <button onClick={handleEditClick}>Edit</button>
          <p>{timeStamp}</p>

        </div>
      )}

    </div>  
  );
};

export default Edit;
