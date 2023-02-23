import { Col, Row } from "reactstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Cart from "../components/Cart";
import CheckOutForm from "../components/Checkout/CheckOutForm";

const checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51MeDPsLrUdQMyaUoR9LJ7tJE0Rw8AOdpn4rmVDgpyvlpyNLccOGl8FZYWAzXVr1CTIuzeNwn7HaczfyZ1wup5b7i00ygqzR949"
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
          checkout
        </h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </Col>
    </Row>
  );
};

export default checkout;
