import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import Content from "./Content";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length + 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return; //TODO: show error msg to user
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List"> </Header>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}>
      </AddItem>
      <Content items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}></Content>
      <Footer length = {items.length}></Footer>
    </div>
  );
}

export default App;
