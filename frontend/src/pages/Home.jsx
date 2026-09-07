import "../css/Home.css";
import { useState } from "react";
import Item from "../components/Item";
import ItemList from "../components/ItemList";

let nextId = 4;

function Home() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [items, setItems] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [total, setTotal] = useState(0);

  const addItem = () => {
    setItems([...items, { id: nextId }]);
    nextId++;
    console.log(total);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="home">
      <h1 className="title">Sales Tracker</h1>
      <button className="add-btn" onClick={addItem}>
        Add Item
      </button>
      <p className="total">Total: {formatter.format(total)}</p>
      <ItemList items={items} onDelete={deleteItem} setTotal={setTotal} />
    </div>
  );
}

export default Home;
