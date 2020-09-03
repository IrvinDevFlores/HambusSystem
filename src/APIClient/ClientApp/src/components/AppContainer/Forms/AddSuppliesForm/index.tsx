import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import InputLabel from "@material-ui/core/InputLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import NativeSelect from "@material-ui/core/NativeSelect";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Button, Grid } from "@material-ui/core";
import { Row, Col } from "reactstrap";

import DefaultTable from "../../../UtilComponents/DefaultTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function AddSuppliesForm() {
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai",
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChan = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Crear categoria" {...a11yProps(0)} />
          <Tab label="Inventario" {...a11yProps(1)} />
          <Tab label="Administrar Inventario" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Row>
          <Col>
            <h4>Agregar Categoria</h4>
            <Row>
              <FormControl fullWidth>
                <TextField
                  required
                  id="standard-required"
                  label="Nombre de categoria: "
                />
              </FormControl>
            </Row>
            <Row>
              <FormControl margin="dense">
                <Button
                  className="rounded mx-auto d-block"
                  variant="contained"
                  style={{ background: "primary" }}
                >
                  Agregar
                </Button>
              </FormControl>

              <FormControl margin="dense">
                <Button
                  className="rounded mx-auto d-block"
                  variant="contained"
                  style={{ background: "primary" }}
                >
                  Modificar
                </Button>
              </FormControl>

              <FormControl margin="dense">
                <Button
                  className="rounded mx-auto d-block"
                  variant="contained"
                  style={{ background: "primary" }}
                >
                  Eliminar
                </Button>
              </FormControl>
            </Row>
          </Col>
          <Col>
            <h4>Categorias Existentes</h4>
            <DefaultTable />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row>
          <Col>
            <Row>
              <h4>Agregar Insumo</h4>
            </Row>
            <Row>
              <Col>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="standard-required"
                    label="Nombre del insumo: "
                  />
                </FormControl>
              </Col>
              <Col>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="standard-required"
                    label="Precio de Compra: "
                  />
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">
                    Categoria:
                  </InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChan("age")}
                    inputProps={{
                      name: "age",
                      id: "age-native-helper",
                    }}
                  >
                    <option value="" />
                    <option value={10}>categoria 1</option>
                    <option value={20}>categoria 2</option>
                    <option value={30}>categoria 3</option>
                    <option value={40}>categoria 4</option>
                  </NativeSelect>
                </FormControl>
              </Col>
              <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">Unidad:</InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChan("age")}
                    inputProps={{
                      name: "age",
                      id: "age-native-helper",
                    }}
                  >
                    <option value="" />
                    <option value={10}>Kilos</option>
                    <option value={20}>Libras</option>
                    <option value={30}>Botella</option>
                    <option value={40}>ml</option>
                  </NativeSelect>
                </FormControl>
              </Col>
              <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">Medida</InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChan("age")}
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
              </Col>
              <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">
                    Cantidad x Medida
                  </InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChan("age")}
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
              </Col>
            </Row>
            <Row>
              <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">
                    Proveedor:
                  </InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChan("age")}
                    inputProps={{
                      name: "age",
                      id: "age-native-helper",
                    }}
                  >
                    <option value="" />
                    <option value={10}>categoria 1</option>
                    <option value={20}>categoria 2</option>
                    <option value={30}>categoria 3</option>
                    <option value={40}>categoria 4</option>
                  </NativeSelect>
                </FormControl>
              </Col>
              <Col>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="standard-required"
                    label="Stock Minimo: "
                    margin="dense"
                  />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <FormControl>
                  <Button
                    className="rounded mx-auto d-block"
                    variant="contained"
                    style={{ background: "primary" }}
                  >
                    Agregar
                  </Button>
                </FormControl>
              </Col>
              <Col>
                <FormControl>
                  <Button
                    className="rounded mx-auto d-block"
                    variant="contained"
                    style={{ background: "primary" }}
                  >
                    Actualizar
                  </Button>
                </FormControl>
              </Col>
              <Col>
                <FormControl>
                  <Button
                    className="rounded mx-auto d-block"
                    variant="contained"
                    style={{ background: "primary" }}
                  >
                    Eliminar
                  </Button>
                </FormControl>
              </Col>
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <h4>Productos del inventario</h4>
            </Row>
            <Row>
              <DefaultTable />
            </Row>
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Row>
          <h4>Lista de Insumos</h4>
        </Row>
        <Row>
          <FormControl>
            <TextField
              required
              id="standard-required"
              margin="dense"
              label="Buscar: "
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">Ordenar por:</InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleChan("age")}
              inputProps={{
                name: "age",
                id: "age-native-helper",
              }}
            >
              <option value="" />
              <option value={10}>Categoria</option>
              <option value={20}>Proveedor</option>
              <option value={30}>Marca</option>
              <option value={40}>Fecha de Vencimiento</option>
            </NativeSelect>
          </FormControl>
        </Row>
        <Row>
          <DefaultTable />
        </Row>
      </TabPanel>
    </div>
  );
}
