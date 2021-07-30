import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

export default function LoginPage() {
  const history = useHistory();

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputLogin({
      ...inputLogin,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (inputLogin.email === "") {
      alert("Falta el email");
      return;
    }
    if (inputLogin.password === "") {
      alert("Falta la contraseña");
      return;
    }
    localStorage.setItem("usuario_registrado", JSON.stringify(inputLogin));
    history.push("/");
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={10}>
          <div className="card-login border-0 my-5">
            <div className="p-0">
              <Row>
                <Col lg={3} className="d-none d-lg-block bg-img">
                </Col>
                <Col lg={6}>
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="mb-4">
                         <b>Bienvenido! Inicia sesion para continuar.</b>
                      </h4>
                    </div>
                    <div>
                      <Form className="h-100" onSubmit={handleSubmit}>
                        <Form.Group className="mt-2" controlId="LoginEmail">
                          <Form.Control
                            onChange={handleChange}
                            type="email"
                            placeholder="Example@gmail.com"
                            name="email"
                            className="inputCommon"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="LoginPassword">
                          <Form.Control
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            name="password"
                            className="inputCommon"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center">
                          <Button
                            className="mt-1 col-9 btnLogin "
                            type="submit"
                          >
                            Ingresar
                          </Button>
                        </Form.Group>
                      </Form>
                    </div>
                    <hr />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
