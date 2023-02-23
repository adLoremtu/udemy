import { useContext, useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import AppContext from "../context/AppContext";
import { login, registerUser } from "../lib/auth";

const Login = () => {
  const [data, setData] = useState({ identifier: "", password: "" });
  const appContext = useContext(AppContext);
  // console.log(data);

  const handleLogin = () => {
    console.log("=== ", data.identifier, data.password);
    login(data.identifier, data.password)
      .then((res) => {
        appContext.setUser(res.data.user);
        // console.log(res.data.user)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス</Label>
                  <Input
                    type="email"
                    name="identifier"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <span>
                  <a href="">パスワードをお忘れですか？</a>
                </span>
                <Button
                  style={{ float: "right", width: 120 }}
                  color="primary"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  ログイン
                </Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px;
          }
        `}
      </style>
    </Container>
  );
};

export default Login;
