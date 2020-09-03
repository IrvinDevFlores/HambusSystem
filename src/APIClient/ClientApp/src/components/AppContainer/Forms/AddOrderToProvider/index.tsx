import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputLabel from "@material-ui/core/InputLabel";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NativeSelect from "@material-ui/core/NativeSelect";
import Box from '@material-ui/core/Box';
import FormControl from "@material-ui/core/FormControl";
import { TextField, Button, Grid } from "@material-ui/core";
import { Row, Col } from 'reactstrap';
import DefaultTable from "../../../UtilComponents/DefaultTable";
import {Label,CustomInput, Card, CardImg} from 'reactstrap'
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
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
}));
export default function AddOrderToProvider() 
{
  const [state, setState] = React.useState<{age: string | number; name: string;}>
  ({
    age: "",
    name: "hai"
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
      [name]: event.target.value
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
          <Tab label="Crear Pedido" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Row>
          <Col>
          <h5>Añadir a la lista de compras</h5>
            <FormControl fullWidth>
                <TextField
                                    required
                                    id="standard-required"
                                    label="Buscar Insumo: "
                />
              </FormControl>
              <Row>
                  <Col>
                     <TextField
                                    required
                                    id="standard-required"
                                    label="Cantidad a pedir: "
                      />
                  </Col>
                  <Col>
                      <TextField
                                    required
                                    id="standard-required"
                                    label="Precio Unitario: "
                         />
                  </Col>
                  <Col>
                    <TextField
                                        required
                                        id="standard-required"
                                        label="Stock: "
                    />
                  </Col>
              </Row>
              <Row>    
                    <FormControl margin="dense">
                              <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                                Agregar al carrito
                              </Button>
                     </FormControl>
                    <FormControl margin="dense">
                              <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                                Limpiar
                              </Button>
                    </FormControl>
              </Row>
          </Col>
          <Col>
            <h5>Inversion Aproximada</h5>
                <Row>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="standard-required"
                            label="Factura: "
                            />
                    </FormControl>
                </Row>
                <Row>
                    <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="age-native-helper">Proveedor:</InputLabel>
                            <NativeSelect
                                value={state.age}
                                onChange={handleChan("age")}
                                inputProps={{
                                name: "age",
                                id: "age-native-helper"
                                }}
                            >
                                <option value="" />
                                <option value={10}>categoria 1</option>
                                <option value={20}>categoria 2</option>
                                <option value={30}>categoria 3</option>
                                <option value={40}>categoria 4</option>
                            </NativeSelect>
                    </FormControl>
                </Row>
                <Row>
                    <Col>
                                <p>Valor: </p> 
                    </Col>
                    <Col>
                                <p>Impuesto: </p>
                    </Col>
                    <Col>
                             <p>Total de la compra: </p>
                    </Col>
                </Row>
                <Row>
                    <FormControl margin="dense">
                                <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                                    Hacer Lista de Compra
                                </Button>
                    </FormControl>
                </Row>
          </Col>
        </Row>
        <Row>
            <h5>Elementos del Carrito</h5>
            <DefaultTable/>
            <FormControl margin="dense">
                              <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                                Limpiar Carrito
                              </Button>
            </FormControl>
        </Row>
      </TabPanel>
    </div>
  );
}