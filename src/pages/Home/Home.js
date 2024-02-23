import React from 'react';
import Note from '../../components/Note';
import './Home.css';

const notes = [
    {
        id: 1,
        title: 'Note 1',
        description: 'description 1'
    },
    {
        id: 2,
        title: 'Note 2',
        description: 'description 2'
    },
    {
        id: 3,
        title: 'Note 3',
        description: 'description 3'
    },
    {
        id: 4,
        title: 'Note 4',
        description: 'description 4'
    },
    {
        id: 5,
        title: 'Note 5',
        description: 'description 5'
    },
    {
        id: 6,
        title: 'Note 6',
        description: 'description 6'
    },
    {
        id: 7,
        title: 'Note 7',
        description: 'description 7'
    },
    {
        id: 8,
        title: 'Note 8',
        description: 'description 8'
    },
    {
        id: 9,
        title: 'Note 9',
        description: 'description 9'
    },
    {
        id: 10,
        title: 'Note 10',
        description: 'description 10'
    }
]

function Home() {
    return (
        <div className="noteContainer">
            {notes.map(note => (
                <Note key={note.id} note={note} />
            ))}
        </div>
    );
}

export default Home;