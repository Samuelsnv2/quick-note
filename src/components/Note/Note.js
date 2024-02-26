import React from 'react';
import './Note.css';

function Note({ note, onClick }) {
    return (
        <div className="note" onClick={() => onClick(note)} >
            <div className="noteTitle">{note.title}</div>
            <div className="noteDescription">{note.description}</div>
        </div>
    );
}

export default Note;