import { Button, TextField } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

 import DefaultTable from "../../../UtilComponents/DefaultTable";


export interface TabPanelProps 
{
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) 
{
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
export default function AddTablesForm() 
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
          <Tab label="Estado de las mesas" {...a11yProps(0)} />
          <Tab label="Añadir Mesas" {...a11yProps(1)} />
          <Tab label="Something More" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h4>Mesas</h4>
            <Row>
            
            <Col>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/assets/img-default.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mesa #
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li>Mesa: </li>
                                <li>Cantidad de Clientes:</li>
                                <li>Tiempo de espera:</li>
                                <li>Mesero encargado:</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Detalle
                </Button>
            </CardActions>
            </Card>
            </Col>
            <Col>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/assets/img-default.png"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Mesa #
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ul>
                                    <li>Mesa: </li>
                                    <li>Cantidad de Clientes:</li>
                                    <li>Tiempo de espera:</li>
                                    <li>Mesero encargado:</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Detalle
                    </Button>
                </CardActions>
                </Card>
            </Col>
           <Col>
           <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/assets/img-default.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mesa #
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li>Mesa: </li>
                                <li>Cantidad de Clientes:</li>
                                <li>Tiempo de espera:</li>
                                <li>Mesero encargado:</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Detalle
                </Button>
            </CardActions>
            </Card>
           </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row>
          <Col>
            <Row>
              <Col>
                <FormControl fullWidth>
                        <TextField
                          required
                          id="standard-required"
                          label="Mesa: "
                        />
                </FormControl>
              </Col>
              <Col>
              <FormControl fullWidth>
              <TextField
                  id="standard-number"
                  label="Numero de Clientes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                    </FormControl>
              </Col>
              <Col>
              
              </Col>
            </Row>
            <Row>
              <Col xs="8">
              <FormControl fullWidth>
                            <TextField
                              margin="none"
                              required
                              id="standard-required"
                              label="Descripcion: "
                            />
                    </FormControl>
              </Col>
              <Col>
              <FormControl fullWidth>
                            <Button variant="contained" color="secondary">
                              Agregar Mesa
                            </Button>
                          </FormControl>
              </Col> 
            </Row>
          </Col>
          <Col xs="4">
            <Row>
              <h4>Resumen de mesas</h4>
            </Row>
            <Row>
              <Col>
              <DefaultTable/>
              </Col>
            </Row>
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Row><h4>Lista de Insumos</h4></Row>
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
                              id: "age-native-helper"
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
        <DefaultTable/>
        </Row>
      </TabPanel>
    </div>
  );
}