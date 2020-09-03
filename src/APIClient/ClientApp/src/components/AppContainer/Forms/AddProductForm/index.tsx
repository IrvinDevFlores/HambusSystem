import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { TextField, Button } from "@material-ui/core";
import DefaultTable from "../../../UtilComponents/DefaultTable";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import FormGroup from "react-bootstrap/FormGroup";
import { CustomInput } from "reactstrap";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function AddProductForm() {
  const classes = useStyles();
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai",
  });

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    // setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const col = 12;
  const row = 11;

  return (
    <div>
      <Row>
        <Col>
          <h2>Registrar Producto</h2>
          <Row>
            <Col>
              <Row>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="standard-required"
                    label="Nombre del Producto: "
                  />
                </FormControl>
              </Row>
              <Row>
                <FormControl fullWidth>
                  <TextField required id="standard-required" label="Precio: " />
                </FormControl>
              </Row>
              <Row>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">Categoria</InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChange("age")}
                    inputProps={{
                      name: "age",
                      id: "age-native-helper",
                    }}
                  >
                    <option value="" />
                    <option value={10}>Hamburguesas</option>
                    <option value={20}>Ensaladas</option>
                    <option value={30}>Combos</option>
                    <option value={40}>Bebidas</option>
                  </NativeSelect>
                </FormControl>
              </Row>
            </Col>
            <Col>
              <Row>
                <FormControl fullWidth>
                  <Image
                    src="/assets/img-default.png"
                    className="rounded mx-auto d-block"
                    fluid
                    width="150"
                  />
                </FormControl>
              </Row>
              <Row>
                <FormControl fullWidth>
                  <FormGroup>
                    <CustomInput
                      type="file"
                      id="exampleCustomFileBrowser"
                      name="customFile"
                    />
                  </FormGroup>
                </FormControl>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormControl fullWidth>
                <Button variant="contained" style={{ background: "primary" }}>
                  Registrar
                </Button>
              </FormControl>
            </Col>
            <Col>
              <FormControl fullWidth>
                <Button variant="contained" style={{ background: "primary" }}>
                  Editar
                </Button>
              </FormControl>
            </Col>
            <Col>
              <FormControl fullWidth>
                <Button variant="contained" style={{ background: "primary" }}>
                  Eliminar
                </Button>
              </FormControl>
            </Col>
          </Row>
        </Col>
        <Col>
          <h2>Productos Existentes</h2>
          <DefaultTable />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <h2>Insumos Para el producto</h2>
          <Row>
            <Col>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="age-native-helper">Insumo</InputLabel>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange("age")}
                  inputProps={{
                    name: "age",
                    id: "age-native-helper",
                  }}
                >
                  <option value="" />
                  <option value={10}>Queso</option>
                  <option value={20}>Salsa X</option>
                  <option value={30}>Salsa Y</option>
                  <option value={40}>Pan</option>
                </NativeSelect>
              </FormControl>
            </Col>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField required id="standard-required" label="Cantidad: " />
            </FormControl>
          </Row>
          <Row>
            <FormControl>
              <Button
                className="rounded mx-auto d-block"
                variant="contained"
                style={{ background: "primary" }}
              >
                Agregar
              </Button>
            </FormControl>
          </Row>
        </Col>
        <Col>
          <h3>Insumos</h3>
          <DefaultTable />
        </Col>
      </Row>
    </div>
  );
}
