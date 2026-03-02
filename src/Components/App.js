import { useState } from "react";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((preValues) => [...preValues, newItem]);
  }
  function handleDelete(id) {
    setItems((preValues) => preValues.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((preValues) =>
      preValues.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function onClearListHandler(){
    const message = window.confirm('Do you want to clear the list ?')
    if (message) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onClearListHandler={onClearListHandler}
        onToggleItems={handleToggle}
        onDeleteItems={handleDelete}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}


