import React, { useContext, useState } from "react";
import { productContext } from "../../context/ProductContextProvider";
import { Button, Container, TextField } from "@mui/material";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);

  const initProduct = {
    name: "",
    description: "",
    price: "",
    image: "",
    type: "",
  };

  const [product, setProduct] = useState(initProduct);

  function handleAddProduct(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  function saveProduct() {
    addProduct(product);
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      type: "",
    });
  }

  return (
    <Container>
      <h2>Add Product</h2>
      <div
        style={{
          display: "flex",
          margin: "50px auto",
          width: "40%",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.name}
          onChange={handleAddProduct}
          placeholder="Имя"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.description}
          onChange={handleAddProduct}
          placeholder="Описвние"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.price}
          onChange={handleAddProduct}
          placeholder="Цена"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.image}
          onChange={handleAddProduct}
          placeholder="Картинка"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.type}
          onChange={handleAddProduct}
          placeholder="Тип"
        />
        <Button variant="contained" onClick={saveProduct}>
          Add Product
        </Button>
      </div>
    </Container>
  );
};

export default AddProduct;