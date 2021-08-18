import React from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AddFav } from "../Redux/actions";

import HeartIcon from "../assets/Heart.icon";
import HeartSolid from "../assets/HeartSolid.icon";

function Details({ detailProduct, addToFav,items }) {


  const handleFav = () => {
    addToFav(detailProduct);

  };
  return (
    <Container>
      {detailProduct ? (
        <Row>
          <Col xs={11} style={{marginTop:'7rem'}}>
            <Card className="mt-5">
              <Card.Body className="m-auto">
                <Row className="m-auto">
                  <Col xs={12} md={4} className="m-auto" key={detailProduct.id}>
                    <Card.Img
                      variant="top"
                      src={detailProduct.image}
                      height="350px"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50px",
                      }}
                    />
                  </Col>
                  <Col xs={12} md={8} className='d-flex flex-column justify-content-around'>
                    <Card.Title className="text-center p-3">
                      {detailProduct.title}
                    </Card.Title>
                    <Card.Text style={{marginBottom:'3cm'}}>{detailProduct.description} </Card.Text>
                
                    {/* <Button onClick={handleCart} variant="dark" className="me-3 mt-4" style={{ backgroundColor: "rgba(0,0,0,0.8)", border: "none" }}>
                                    <Basket isFrom="Details" />
                                    Add To Cart
                                </Button>
                                 */}
                                 <Card.Footer className="justify-self-end " style={{backgroundColor:'transparent',border:'1px solid rgba(0,0,0,0.125)'}}>
                  <Card.Text>
                    ${detailProduct.price}{" "}
                    {detailProduct.isFavorite?
                         (<HeartSolid onClick={handleFav} />  
                     ) : (
                        <HeartIcon onClick={handleFav} />
                          )}
                      </Card.Text>
                      </Card.Footer>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Redirect to="/" />
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  detailProduct: state.details,
  items:state.items
});
const mapDispatchToProps = (dispatch) => ({
  addToFav:item=>dispatch(AddFav(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(Details);
