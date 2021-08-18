import React from "react";
import { connect } from "react-redux";
import { ToggleToast } from "../Redux/actions";
import { Toast, Row, Col } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

function Toaster({ isClose, isOpen, shopping }) {
  return (
    <Row
      style={{
        position: "fixed",
        zIndex: "1",
        left:
          window.innerWidth > 1330
            ? "58rem"
            : window.innerWidth < 1330 && window.innerWidth > 1200
            ? "50rem"
            : window.innerWidth < 1200 && window.innerWidth > 1090
            ? "45rem"
            : window.innerWidth < 1200 && window.innerWidth > 1090
            ? "35rem"
            : "0",
        display: window.innerWidth < 978 ? "none" : "flex",
        width: "100%",
        top:'110px'
      }}
    >
      <Col xs={6}>
        <Toast onClose={() => isClose()} show={isOpen} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">
              {shopping.length > 0
                ? "These Items In Your Basket"
                : "You Do Not Have Anything In Your Basket"}
            </strong>
          </Toast.Header>
          {shopping &&
            shopping.map((data, i) => (
              <div key={i}>
                <Toast.Body
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={data.image}
                    className="rounded me-2"
                    alt="image"
                    style={{
                      width: "auto",
                      height: "80px",
                      marginRight: "18px",
                    }}
                  />
                  <em style={{ marginRight: "10px", fontSize: "1.1em" }}>
                    <strong>{data.title}</strong>
                  </em>
                  <strong style={{ float: "right", fontSize: "1.5rem" }}>
                    <CurrencyFormat
                      value={data.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </strong>
                </Toast.Body>
              </div>
            ))}
        </Toast>
      </Col>
    </Row>
  );
}
const mapStateToProps = (state) => ({
  isOpen: state.toggleToast,
  shopping: state.shoppingBox,
});
const mapDispatchToProps = (dispatch) => ({
  isClose: () => dispatch(ToggleToast()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
