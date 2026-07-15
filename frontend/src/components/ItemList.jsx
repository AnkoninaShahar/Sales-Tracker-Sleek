import "../css/ItemList.css";
import Item from "./Item";
import { AnimatePresence } from "framer-motion";

function ItemList({ items, onDelete, setTotal }) {
  return (
    <div className="list">
      <AnimatePresence>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            onDelete={onDelete}
            setTotal={setTotal}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ItemList;
