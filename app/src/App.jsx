import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles(() => {
      const data = { id: uuidv4(), title: title };
      return [...titles, data];
    });

    setTitle("");
  };

  function UpdateCard(id,updatedTitle) {
    const findIndex = titles.findIndex((obj)=>obj.id===id)
    const updatedItems = [...titles];
    updatedItems[findIndex] = { ...updatedItems[findIndex], title: updatedTitle };
    setTitles(updatedItems);
  }

  function deleteCard(id) {
    const filterArray = titles.filter((check) => check.id !== id);
    setTitles(filterArray);
  }

  useEffect(() => {
    console.log(titles);
  }, [titles]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title"
            type="text"
            id="1"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button type="submit" name="Add" />
        </div>
      </form>

      {titles.map((item,index) => {
        return (
          <div key={index}>
            <Card
              values={item}
              deleteCard={() => deleteCard(item.id)}
              UpdateCard={(updatedTitle) => UpdateCard(item.id,updatedTitle)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;