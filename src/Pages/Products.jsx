import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/quicksy")  // tweak endpoint as needed
         .then(r => setItems(r.data))
         .catch(console.error);
  }, []);

  return (
    <main className="p-3">
      <h2 className="mb-3">All Products</h2>
      {items.length === 0
        ? <p>Loading…</p>
        : <ul>{items.map(p => <li key={p.id}>{p.name}</li>)}</ul>}
    </main>
  );
};
export default Products;
