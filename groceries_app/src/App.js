import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  //This eseEffect method will be called during rendering only when the "items" state is changed
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length + 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
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
      <SearchItem
        search={search}
        setSearch={setSearch}></SearchItem>
      <Content items={items.filter( item => (item.item).toLowerCase().includes( search.toLocaleLowerCase() ) )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}></Content>
      <Footer length = {items.length}></Footer>
    </div>
  );
}

export default App;
