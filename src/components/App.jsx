import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App(){

    const [notes,setNotes] = useState([]);
    function addNote(newNote){
        setNotes(prevValue => {
           return [...prevValue,newNote]
        })
    }

    function deleteNote(id){
        setNotes(prevValue => {
            return prevValue.filter((item,index) => {
                return index !== id;
            })
            }
        )
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd = {addNote} />
                { notes.map((noteItem,index)=> {
                    return <Note key={index} id={index} onChecked ={deleteNote} title={noteItem.title} content={noteItem.content} />
                }) }
                   
            
{/*         
                <Note
                    
                    title = ""
                    content = "Note content"
                 /> */}
    
            <Footer />
        </div>
    );
}






export default App;
