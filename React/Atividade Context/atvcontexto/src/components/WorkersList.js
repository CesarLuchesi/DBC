import { Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import WorkerContext from "../context/workers/index";
import Swal from "sweetalert2";

function WorkersList() {
  const { setState, state } = useContext(WorkerContext);

  const handleEdit = async (id) => {
    const { value: formValues } = await Swal.fire({
      title: "Alterar Cadastro",
      html:
        '<input id="swal-input1"  placeholder="Digite o nome completo" class="swal2-input" value="' +
        state.workersList.find((item) => item.id === id).name +
        '">' +
        '<input id="swal-input2"  placeholder="Digite seu email" class="swal2-input" value="' +
        state.workersList.find((item) => item.id === id).email +
        '">' +
        '<input id="swal-input3"  placeholder="Digite sua profissão" class="swal2-input" value="' +
        state.workersList.find((item) => item.id === id).role +
        '">',

      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
        ];
      },
    });

    const workersListAux = state.workersList.filter(function (item) {
      if (item.id === id) {
        item.name = formValues[0];
        item.email = formValues[1];
        item.role = formValues[2];
      }

      return item;
    });

    setState({
      workersList: workersListAux,
    });
  };

  const handleRemove = async (id) => {
    const workersListAux = state.workersList.filter(function (item) {
      return item.id !== id;
    });

    setState({
      workersList: workersListAux,
    });

    await Swal.fire({
      title: "Trabalhador removido com sucesso!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <br></br>
          {state.workersList.map((item) => (
            <>
              <Row key={item.id}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <h3>ID:</h3>
                      </Col>
                      <Col>
                        <h3>{item.id}</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <h3>Nome:</h3>
                      </Col>
                      <Col>
                        <h3>{item.name}</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <label>Email:</label>
                      </Col>
                      <Col>
                        <label>{item.email}</label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <label>Profissão:</label>
                      </Col>
                      <Col>
                        <label>{item.role}</label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remover
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="warning"
                          onClick={() => handleEdit(item.id)}
                        >
                          Atualizar
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <br></br>
            </>
          ))}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default WorkersList;
