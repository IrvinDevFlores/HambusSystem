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
import { Row, Col} from 'reactstrap';
import Container from 'react-bootstrap/Container'
import {Label,CustomInput, Card, CardImg} from 'reactstrap';

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
export default function PreviousSalesForm() 
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
        <Tab label="Spool" {...a11yProps(0)} />
        <Tab label="Cierres Diarios" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <Row>
        <Col>
        <h5>Mesas</h5>
            <Row>
                <Col>
                    <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="age-native-helper">Mesa:</InputLabel>
                            <NativeSelect
                                value={state.age}
                                onChange={handleChan("age")}
                                inputProps={{
                                name: "age",
                                id: "age-native-helper"
                                }}
                            >
                                <option value="" />
                                <option value={10}> 1</option>
                                <option value={20}> 2</option>
                                <option value={30}> 3</option>
                                <option value={40}> 4</option>
                            </NativeSelect>
                    </FormControl>
                </Col>
                <Col>
                    <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="age-native-helper">Factura a pagar:</InputLabel>
                            <NativeSelect
                                value={state.age}
                                onChange={handleChan("age")}
                                inputProps={{
                                name: "age",
                                id: "age-native-helper"
                                }}
                            >
                                <option value="" />
                                <option value={10}>Julio</option>
                                <option value={20}>Juan</option>
                                <option value={30}>Trolencio</option>
                                <option value={40}>Maria</option>
                            </NativeSelect>
                    </FormControl>
                </Col>
                <Col>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor="age-native-helper">Forma de pago:</InputLabel>
                          <NativeSelect
                              value={state.age}
                              onChange={handleChan("age")}
                              inputProps={{
                              name: "age",
                              id: "age-native-helper"
                              }}
                          >
                              <option value="" />
                              <option value={10}>T/C</option>
                              <option value={20}>T/D</option>
                              <option value={30}>Efectivo</option>
                              <option value={40}>Mixto</option>
                          </NativeSelect>
                  </FormControl>
                </Col>
            </Row>
            <Row>
                  <FormControl margin="dense">
                            <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                              Agregar a factura
                            </Button>
                   </FormControl>
                  <FormControl margin="dense">
                            <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                              Limpiar
                            </Button>
                  </FormControl>
            </Row>
        </Col>
        <Col xs ="4">
          <h5>Factura</h5>
              <Container>
                <Row>
                    <FormControl fullWidth>
                    <TextField
                        id="standard-full-width"
                        label="Factura"
                        style={{ margin: 8 }}
                        placeholder="Numero de Factura"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                         />
                    </FormControl>
                </Row>
                <Row>
                <FormControl fullWidth>
                    <TextField
                        id="standard-full-width"
                        label="Mesa"
                        style={{ margin: 8 }}
                        placeholder="Numero de Mesa"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                         />
                    </FormControl>
                </Row>
                <Row>
                <FormControl fullWidth>
                    <TextField
                        id="standard-full-width"
                        label="Cliente"
                        style={{ margin: 8 }}
                        placeholder="Cliente"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                         />
                    </FormControl>
                </Row>
                <Row>
                <FormControl fullWidth>
                    <TextField
                        id="standard-full-width"
                        label="Elementos"
                        style={{ margin: 8 }}
                        placeholder="Productos del Menu"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                         />
                    </FormControl>
                </Row>
                <Row>
                    <Col>
                        <p>Valor: </p> 
                    </Col>
                </Row>
                <Row>
                     <Col>
                                <p>Impuesto: </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <p>Total de la compra: </p>
                    </Col>
                </Row>
                <Row>
                    <FormControl margin="dense">
                                <Button className="rounded mx-auto d-block" variant="contained" style={{background:'primary'}}>
                                    Realizar Cobro
                                </Button>
                    </FormControl>
                </Row>
              </Container>
        </Col>
      </Row>
    </TabPanel>
  </div>
  );
}