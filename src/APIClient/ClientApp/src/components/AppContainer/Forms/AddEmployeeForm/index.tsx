import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { TextField, Button, Grid } from "@material-ui/core";
import DefaultTable from "../../../UtilComponents/DefaultTable";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from "react-bootstrap";
import FormGroup from 'react-bootstrap/FormGroup'
import {Label,CustomInput, Card, CardImg} from 'reactstrap'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default function AddEmployeeForm() {
  const classes = useStyles();
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai"
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
      [name]: event.target.value
    });
  };
  
  return (
    <div>
       <fieldset>
          <Container fluid>
            <Row>
              <Col  sm={6}> 
                <h2>Agregar Empleado</h2>
                <Row>
                  <Col>
                      <Image src="/assets/img-default.png" className="rounded mx-auto d-block" fluid width="150" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl fullWidth>
                      <FormGroup>
                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                      </FormGroup>
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl fullWidth>
                      <TextField
                        required
                        id="standard-required"
                        label="Nombre del Empleado: "
                      />
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl fullWidth>
                        <TextField
                          required
                          id="standard-required"
                          label="Primer Apellido: "
                        />
                    </FormControl>
                  </Col>
                  <Col>
                  <FormControl fullWidth>
                      <TextField
                        required
                        id="standard-required"
                        label="Segundo Apellido: "
                      />
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl fullWidth>
                            <TextField 
                              required
                              id="standard-required"
                              label="N° de identidad: "
                            />
                    </FormControl>
                  </Col>
                  <Col>
                  <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="age-native-helper">Sexo</InputLabel>
                        <NativeSelect
                          value={state.age}
                          onChange={handleChange("age")}
                          inputProps={{
                            name: "age",
                            id: "age-native-helper"
                          }}
                        >
                          <option value="" />
                          <option value={10}>Masculino</option>
                          <option value={20}>Femenino</option>
                        </NativeSelect>
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl fullWidth>
                                <TextField
                                  required
                                  id="standard-required"
                                  label="Fecha de Nacimiento: "
                                />
                    </FormControl>
                  </Col>
                  <Col>
                  <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="age-native-helper">Puesto</InputLabel>
                        <NativeSelect
                          value={state.age}
                          onChange={handleChange("age")}
                          inputProps={{
                            name: "age",
                            id: "age-native-helper"
                          }}
                        >
                          <option value="" />
                          <option value={10}>Mesero</option>
                          <option value={20}>Cocinero</option>
                          <option value={30}>Cajero</option>
                          <option value={40}>Administrador</option>
                        </NativeSelect>
                    </FormControl>
                  </Col>
                    
                </Row>
                <Row>
                  <Col>
                      <Row>
                        <Col>
                          <FormControl fullWidth>
                            <Button variant="contained" style={{background:'primary'}}>
                              Agregar
                            </Button>
                           </FormControl>
                        </Col>
                        <Col>
                          <FormControl fullWidth>
                            <Button variant="contained" color="secondary">
                              Limpiar
                            </Button>
                          </FormControl>
                        </Col>
                      </Row>
                  </Col>
                  <Col>
                  <FormControl fullWidth>
                    
                    </FormControl>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <h2>Listado de Empleados</h2>
              <DefaultTable/>
            </Col>
            </Row>
          </Container>
        </fieldset>
    </div>
  );
}
