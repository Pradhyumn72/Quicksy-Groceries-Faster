import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const ENDPOINT = "http://localhost:3001";
const CATEGORIES = ["essentials", "snacks", "beverages", "fruits", "household"];

const Home = () => {
  const [products, setProducts] = useState([]);   // ← plural

  const loadData = async () => {
    try {
      // fetch all categories in parallel
      const responses = await Promise.all(
        CATEGORIES.map(cat => axios.get(`${ENDPOINT}/${cat}`))
      );
      // flatten the arrays of items into one big array
      const merged = responses.flatMap(res => res.data);
      setProducts(merged);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const navigate = useNavigate();
  const toViewProduct = id => navigate(`/product/${id}`);

  const slides = products.map(item => (
    <Carousel.Item key={item.id} onClick={() => toViewProduct(item.id)}>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
      <Carousel.Caption
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "10px 20px",
          borderRadius: "10px",
          bottom: 0
        }}
      >
        <h5>{item.title}</h5>
        <p>
          {item.brand} — ₹{item.price}
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel
      controls
      indicators={false}
      interval={3000}
      nextIcon={<span style={{ fontSize: "2.5rem", color: "black" }}>›</span>}
      prevIcon={<span style={{ fontSize: "2.5rem", color: "black" }}>‹</span>}
      style={{ width: "100%", maxHeight: "500px" }}
    >
      {slides}
    </Carousel>
  );
};

export default Home;
