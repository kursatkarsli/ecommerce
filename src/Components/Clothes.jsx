import React from "react";
import { Card, Col, CardGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { AddDetails, AddFav, AddToShopping, ToggleToast } from "../Redux/actions";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

//Css
import '../assets/Css/cartItems.css'
//Images
import HeartIcon from "../assets/Heart.icon";
import HeartSolid from "../assets/HeartSolid.icon";
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function Clothes({ data, addToFav, addToDetail, addToShop }) {
  const handleFav = () => {
    addToFav(data);
  };

  const handleDetail = () => {
    addToDetail(data);
  };
  const handleShop = () => {
    addToShop(data)
    
    
  }
  return (
    <Col  xs = {11}  md = {4}  lg = {4} className = "mb-5 card-column" key={data.id} >
    <CardGroup>
      <Card className='card-item'>
        <Link
          to='/details'
          className='card-link'
          onClick={handleDetail}
        >
          <Card.Img
              variant="top"
              className='card-image'
            src={data.image}
            style={{ width: "auto", margin: "auto", height: "80px" }}
          />

          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title><strong>{data.title}</strong></Card.Title>
            <Card.Text className='cardText'>
              <strong>{data.category}</strong>
            </Card.Text>
          </Card.Body>
        </Link>
        <Card.Footer className="justify-self-end card-footer">
          <Card.Text>
          <CurrencyFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =><strong><em>{ value}</em></strong>} />

            {data.isFavorite ? (
              <HeartSolid onClick={handleFav} />
            ) : (
              <HeartIcon onClick={handleFav} />
              )}
              {data.isShopping ? (
                <LocalMallTwoToneIcon className='shop-box' style={{ float: 'right', position: 'relative', top: '-2px', marginRight: '5px' }} onClick={handleShop} />
              ):(
              
              <LocalMallOutlinedIcon style={{ float: 'right', position: 'relative', top: '-2px', marginRight: '5px'}} onClick={handleShop}/>
              )}
          </Card.Text>
        </Card.Footer>
      </Card>
      </CardGroup>
      </Col>
  );
}
const mapStateToProps = (state) =>( {
  favs: state.favorites,
  open: state.toggleToast
})
const mapDispatchToProps = (dispatch) => ({
    addToFav: (item) => dispatch(AddFav(item)),
  addToDetail: (detail) => dispatch(AddDetails(detail)),
  addToShop: (shop) => dispatch(AddToShopping(shop)),
  isOpen:()=>dispatch(ToggleToast()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Clothes);

