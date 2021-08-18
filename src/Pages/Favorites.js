import React from "react";
import { connect } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { AddFav,AddToShopping } from "../Redux/actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import CurrencyFormat from "react-currency-format";


//Images
import HeartIcon from "../assets/Heart.icon";
import HeartSolid from "../assets/HeartSolid.icon";

function Favorites({ fav, addToFav, addToShop,item }) {

  
  return (
    <Container>
      <Row>
        {fav.length>0 ?
          fav.map((data) => (
            <Col
              xs={11}
              md={4}
              lg={4}
              className="card-column"
              style={{ marginTop: "7rem" }}
              key={data.id}
            >
              <Card
               className='card-item'
              >
                <Card.Img
                  variant="top"
                  className='card-image'

                  src={data.image}
                  style={{ width: "auto", margin: "auto", height: "80px" }}
                />{" "}
                <Link
                  to='/details'
                  className='card-link'

                >
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text className='cardText'>
                      {data.category}
                    </Card.Text>
                  </Card.Body>
                </Link>
                <Card.Footer className="justify-self-end card-footer">
                  <Card.Text>
                  <CurrencyFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =><strong><em>{ value}</em></strong>} />

                    {data.isFavorite ? (
                      <HeartSolid onClick={() => addToFav(data)} />
                    ) : (
                      <HeartIcon onClick={() => addToFav(data)} />
                    )}
                    {item.map(item=>item.id===data.id && (item.isShopping ?
                      (<LocalMallTwoToneIcon className='shop-box' key={ item.id} style={{ float: 'right', position: 'relative', top: '-2px', marginRight: '5px' }} onClick={()=>addToShop(data)} />
              ):(
              
              <LocalMallOutlinedIcon key={ item.id} style={{ float: 'right', position: 'relative', top: '-2px', marginRight: '5px'}} onClick={()=>addToShop(data)}/>
              )))}
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          )) : (
          <div
            style={{
              position: "fixed",
              top: "10rem",
              left: "23rem",
              fontSize: "2rem",
              color: "GrayText",
              fontVariant: "small-caps",
              textShadow:
                "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
            }}
          >
            <strong>
              <em>You Do Not Have Any Favorite Item</em>
            </strong>
          </div>
        )
          }
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  fav: state.favorites,
  item:state.items,
});
const mapDispatchToProps = (dispatch) => ({
  addToFav: (item) => dispatch(AddFav(item)),
  addToShop: (shop) => dispatch(AddToShopping(shop)),
  

});
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
