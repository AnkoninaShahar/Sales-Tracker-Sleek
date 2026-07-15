import "../css/Item.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Item({ id, onDelete, setTotal }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sales, setSales] = useState(0);

  const prevContributionRef = useRef(0);

  useEffect(() => {
    const currentContribution = (parseFloat(price) || 0) * sales;
    const difference = currentContribution - prevContributionRef.current;
    console.log(difference);
    setTotal((prevTotal) => prevTotal + difference);

    prevContributionRef.current = currentContribution;
  }, [price, sales]);

  useEffect(() => {
    return () => {
      setTotal((prevTotal) => prevTotal - prevContributionRef.current);
    };
  }, [setTotal]);

  const handleSale = (amount) => {
    setSales((sales) => sales + amount);
  };

  const handlePriceChange = (event) => {
    const char = event.nativeEvent.data;

    const validChar =
      /\d/.test(char) ||
      (char === "." && !price.includes(".")) ||
      char === null;

    const maxLength =
      price.includes(".") &&
      price.length > price.indexOf(".") + 2 &&
      char != null;

    if (!maxLength && validChar) {
      let nextPrice = char === null ? price.slice(0, -1) : price + char;

      if (nextPrice !== "" && parseFloat(nextPrice) > 999.99) {
        nextPrice = "999.99";
      }

      setPrice(nextPrice);
    }
  };

  return (
    <motion.div
      key={id}
      className="item"
      layout
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
      }}
      onAnimationComplete={() => onDelete(id)}
    >
      <button className="sell-btn" onClick={() => handleSale(1)}>
        $
      </button>
      <button className="remove-btn" onClick={() => handleSale(-1)}>
        -$
      </button>
      <input
        className="name-input"
        type="text"
        id="name"
        onChange={(event) => {
          if (event.target.value.length < 25) setName(event.target.value);
        }}
        value={name}
        placeholder="Enter item name"
      />
      <input
        className="price-input"
        type="text"
        id="price"
        placeholder="$0.00"
        value={price === "" ? price : formatter.format(price)}
        onChange={handlePriceChange}
      />
      <p className="sales">Sales: {sales}</p>
      <button className="remove-btn" onClick={() => onDelete(id)}>
        X
      </button>
    </motion.div>
  );
}

export default Item;
