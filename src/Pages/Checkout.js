import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Button,
} from "react-bootstrap";
import {
  AddFav,
  AddToShopping,
  DecreaseQuantity,
  IncreaseQuantity,
} from "../Redux/actions";
import Table from "react-bootstrap/Table";
import CurrencyFormat from "react-currency-format";

//Images
import HeartIcon from "../assets/Heart.icon";
import HeartSolid from "../assets/HeartSolid.icon";

function Checkout({
  shop,
  fav,
  addToFav,
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
}) {
  
  const totalPrice = shop.reduce((accumulator, item) => {
    return item.quantity * item.price + accumulator;
  }, 0);

  return (
    <Container>
      <Row>
        {shop.length > 0 ? (
          <div>
            <Table
              hover
              responsive
              style={{
                width: "80%",
                margin: "130px 114px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <thead>
                <tr>
                  <th>
                    <em>Picture</em>
                  </th>
                  <th>
                    <em>Name</em>
                  </th>
                  <th>
                    <em>Price</em>
                  </th>
                </tr>
              </thead>
              {shop.map((data, i) => (
                <tbody key={i + 1}>
                  <tr>
                    <td style={{ width: "10px", background: "white" }}>
                      <img
                        src={data.image}
                        alt="image"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      {data.title}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        verticalAlign: "middle",
                        width: "10px",
                      }}
                    >
                      <CurrencyFormat
                        value={data.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value) => <div>{value}</div>}
                      />
                    </td>
                    <td>
                      <div
                        style={{
                          height: "68px",
                          textAlign: "center",
                          display: "flex",
                          alignContent: "center",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Button
                          size="sm"
                          style={{
                            minWidth: "10px",
                            padding: "0",
                            fontSize: "1.8rem",
                            border: "none",
                            background: "none",
                            color: "green",
                          }}
                          onClick={() => increaseQuantity(data)}
                        >
                          <strong>
                            <em>+</em>
                          </strong>
                        </Button>
                        <label style={{ fontSize: "1.8rem" }}>
                          {data.quantity}
                        </label>
                        <Button
                          size="sm"
                          style={{
                            minWidth: "10px",
                            padding: "0",
                            fontSize: "1.8rem",
                            border: "none",
                            background: "none",
                            color: "red",
                          }}
                          onClick={() => decreaseQuantity(data)}
                        >
                          <strong>
                            <em>-</em>
                          </strong>
                        </Button>
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        verticalAlign: "middle",
                        width: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          {fav.find((item) => item.id === data.id) ? (
                            <HeartSolid onClick={() => addToFav(data)} />
                          ) : (
                            <HeartIcon onClick={() => addToFav(data)} />
                          )}
                        </div>
                        <div
                          onClick={() => addToBasket(data)}
                          style={{
                            marginLeft: "10px",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          <strong>X</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>

            <div>
              <CurrencyFormat
                value={totalPrice.toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (
                  <div>
                    <strong>
                      <em
                        style={{
                          position: "fixed",
                          transform: "rotate(90deg)",
                          position: "fixed",
                          left: "64%",
                          top: "44%",
                          fontSize: "1.89rem",
                          width: "20rem",
                        }}
                      >
                        Total Price : {value}
                      </em>
                    </strong>
                  </div>
                )}
              />
            </div>
          </div>
        ) : (
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
              <em>You Do Not Have Any Item In Your Basket</em>
            </strong>
          </div>
        )}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  fav: state.favorites,
  shop: state.shoppingBox,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (item) => dispatch(AddFav(item)),
  addToBasket: (item) => dispatch(AddToShopping(item)),
  increaseQuantity: (item) => dispatch(IncreaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(DecreaseQuantity(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
