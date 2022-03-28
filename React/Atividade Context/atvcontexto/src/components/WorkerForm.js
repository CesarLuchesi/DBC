import { Button, Form, Row, Col } from "react-bootstrap";
import { useState, useContext, useRef } from "react";
import Swal from "sweetalert2";

import WorkerContext from "../context/workers/index";
import WorkersList from "./WorkersList";

function WorkerForm() {
  const [validated, setValidated] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const role = useRef(null);
  const { setState: setGlobalState, state } = useContext(WorkerContext);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setGlobalState({
        workersList: [
          ...state.workersList,
          {
            id: state.workersList.length + 1,
            name: name.current.value,
            email: email.current.value,
            role: role.current.value,
          },
        ],
      });

      await Swal.fire({
        title: "Trabalhador cadastrado com sucesso!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <Row>
              <Col></Col>
              <Col>
                <h2>Trabalhador:</h2>
              </Col>
              <Col></Col>
            </Row>
            <Form noValidate validated={validated}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  required
                  type="text"
                  placeholder="Digite o nome completo"
                  pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                  ref={name}
                />
                <Form.Control.Feedback type="invalid">
                  Digite seu nome corretamente
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Digite seu email"
                  // pattern="/^[a-z0-9.] +@[a-z0-9]+\. [a-z]+? $/i"
                  ref={email}
                />
                <Form.Control.Feedback type="invalid">
                  Digite seu email corretamente
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRole">
                <Form.Control
                  required
                  type="text"
                  placeholder="Digite sua profissão"
                  ref={role}
                />
                <Form.Control.Feedback type="invalid">
                  Digite sua profissão corretamente
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Col></Col>
                <Col>
                  <Button variant="primary" onClick={handleSubmit}>
                    Adicionar Usuários
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <br></br>
      <WorkersList Key="Id_1_"></WorkersList>
    </>
  );
}

export default WorkerForm;
