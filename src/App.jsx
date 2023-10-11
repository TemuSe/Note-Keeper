import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WritingArea from "./WritingArea";
import Edit from "./Edit";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";


function App() {
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/note');
      };
    
    const handleRegister = () => {
        navigate('/login');
    };

    const handleNotReg = () => {
        navigate('/register');
    }

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note]
        })
    }

    function removeNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

    // Editing
    const updateNote = (id, newTitle, newContent) => {
        setNotes((prevNotes) =>
            prevNotes.map((note, index) =>
                index === id ? { ...note, title: newTitle, content: newContent } : note
            )
        );
    };


    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note" element={
                <div>
                    <Header isMain={"true"} />
                    <WritingArea onAdd={addNote} />

                    {notes.map((note, index) => (
                        <Edit
                            key={index}
                            id={index}
                            title={note.title}
                            content={note.content}
                            onUpdateNote={updateNote}
                            onDelete={removeNote}
                            timeStamp={note.timeStamp}
                        />
                    ))}

                    <Footer />
                </div>

           
            } />
            
            <Route path="/login" element={
            <>
            <Header />
            <Login onLogin={handleLogin} handleNotReg={handleNotReg} />
            <Footer />
            </>
            } />

            <Route path="/register" element={
            <>
            <Header />
            <Register onRegister={handleRegister} />  
            <Footer />
            </>
            } />
        </Routes>
    );
}

export default App;