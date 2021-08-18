import React, { useEffect } from "react";
import Clothes from "../Components/Clothes.jsx";
import { Row, Container, Col, CardDeck } from "react-bootstrap";
import Navbar from "../Components/Navbar";


//Redux
import { AllItems } from "../Redux/actions.js";
import { connect } from "react-redux";
import axios from "axios";

function Home({ items, setItems }) {
  useEffect(() =>{
    const FetchItems = () => {
      return (
        axios.get("https://fakestoreapi.com/products")
          .then((res) => setItems(res.data))
      )}
      FetchItems();
    }
      , [])

    
  return (
    <Container>
      <Navbar />

      <h1 className="text-center  mb-5" style={{ marginTop: "120px",fontFamily: 'Dancing Script, cursive'}}>
        Our Products
      </h1>
      <Row>
      {items && items.map((product) => {
        return (
              
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
