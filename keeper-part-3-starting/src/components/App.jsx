import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function submit(newNote){
    setItems(preValue=>{
      return [...preValue, newNote]
    });
  }

  function onDelete(id){
    console.log(id);
    console.log(items);

    // setItems(
    //   items.filter((value, index)=>{
    //     return index !== id;
    //   })
    // );
    setItems((preValue)=>{
      return preValue.filter((value, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={submit}/>

      {items.map((item, index)=>{
        return <Note key={index} id={index} title={item.title} content={item.content} onDelete={onDelete}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
