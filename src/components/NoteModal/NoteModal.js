import React from 'react';
import { Button } from '@mui/material';
import './NoteModal.css';

function NoteModal({ note, closeModal }) {
    return (
        <div className="noteModal">
            <input className="noteModalTitle" type="text" />
            <textarea className="noteModalDescription" />
            <div className="noteModalButtons">
                <Button>Cancelar</Button>
                <Button variant="contained" color="primary">
                    Salvar
                </Button>
            </div>
        </div>
    );
}

export default NoteModal;