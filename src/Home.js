import React, { useEffect } from "react";
import Clothes from "../Components/Clothes.jsx";
import { Row, Container } from "react-bootstrap";
import Navbar from "../Components/Navbar";

//Redux
import { AllItems } from "../Redux/actions.js";
import { connect } from "react-redux";

function Home({ items, setItems }) {
  
  useEffect(() =>
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json)),
    []
  );
  return (
    <Container>
      <Navbar />

      <h1 className="text-center  mb-5" style={{ marginTop: "120px" }}>
        Our Products
      </h1>
      <Row>
      {items && items.map((product) => {
            return(
              <Clothes data={product} key={product.id} />
              
              )
      }
      )}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (item) => dispatch(AllItems(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
