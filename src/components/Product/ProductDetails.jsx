import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const ProductDetails = () => {
  const { getOneProduct, oneProduct } = useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <h2>Product Details</h2>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {oneProduct ? (
          <Card sx={{ maxWidth: 545, marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="170px"
              sx={{ objectFit: "contain" }}
              image={oneProduct.image}
              alt="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title: {oneProduct.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {oneProduct.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {oneProduct.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {oneProduct.category}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Container>
    </div>
  );
};

export default ProductDetails;
