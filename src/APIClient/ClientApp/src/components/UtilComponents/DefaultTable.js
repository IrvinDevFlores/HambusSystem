import React from "react";
import MaterialTable from "material-table";
import { Container, Box, Button, Grid, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class User {
  static UserName = "";
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class CustomTable extends React.Component {
  state = {
    Cols: [],
    Datos: [],
  };

  componentDidMount() {
    this.GetData();
  }

  async GetData() {
    let api = "https://reqres.in/api/users";

    const response = await fetch(api)
      .then((data) => data.json())
      .then((users) => {
        this.setHeaderTable(users.data);

        this.setState({ Datos: users.data });
      })
      .catch((err) => console.log(err));

    console.log(response);
  }

  async setHeaderTable(users) {
    console.log("Usuarios--->" + users);
    const model = users[0];
    const modelProps = [];
    for (let m in model) {
      modelProps.push({ title: `${m}`, field: `${m}` });
    }

    this.setState({ Cols: modelProps });
    console.log("columnas--->" + this.state.Cols);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
      
            <h1>Mantenimiento de usuarios</h1>
            <form style={{ width: "75%" }}>
            <Grid item xs={12}>
              <MaterialTable
                title="Tabla de usuarios"
                columns={this.state.Cols}
                data={this.state.Datos}
                editable={{
                  onRowAdd: (newData) =>
                    new Promise((resolve) => {
                      setTimeout(() => {
                        resolve();
                        this.setState((prevState) => {
                          const data = [...prevState.Datos];
                          data.push(newData);

                          this.setState({ Datos: data });
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                      setTimeout(() => {
                        resolve();
                        if (oldData) {
                          this.setState((prevState) => {
                            const data = [...prevState.Datos];
                            data[data.indexOf(oldData)] = newData;

                            this.setState({ Datos: data });
                            return { ...prevState, data };
                          });
                        }
                      }, 600);
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                      setTimeout(() => {
                        resolve();
                        this.setState((prevState) => {

                          let datos = [...prevState.Datos];
                          let index = datos.indexOf(oldData);

                          datos.splice(index, 1);
                          this.setState({ Datos: datos });

                          return { ...prevState, datos };
                        });
                      }, 600);
                    }),
                }}
              />
            </Grid>
                <br/>
            <Grid item xs={6}>
              <FormControl margin="normal" fullWidth 
                  style={{display:'inline'}}>
                <Box component="span" m={1}>
                  <Button
                    variant="outlined"
                    style={{
                      background: "green",
                      color: "white",
                    }}
                  >
                    Guardar
                  </Button>
                </Box>

                <Box component="span" m={1}>
                  <Button
                    variant="outlined"
                    style={{
                      background: "red",
                      color: "white",
                    }}
                  >
                    Eliminar
                  </Button>
                </Box>
              </FormControl>
            </Grid>
          
            <Grid item xs={6}>
             
            </Grid>

          </form>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(CustomTable);
