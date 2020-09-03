import React, { useState } from "react";
import { Router, Redirect } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function TablesContainer() {
  const classes = useStyles();

  const [isClick, setClick] = useState<Boolean>(false);

  const redirect = () => {
    console.log(0);
    setClick(true);
    return <Redirect to="/NewOrder" />;
  };

  return isClick ? (
    <Redirect to="NewOrder" />
  ) : (
    <Card className={classes.root}>
      <CardActionArea onClick={redirect}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="50"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mesa 1
          </Typography>

          <List>
            <ListItem>Estatus: </ListItem>
            <ListItem>Asientos: </ListItem>
            <ListItem>Clientes en mesa:{isClick} </ListItem>
            <ListItem>Tiempo en espera: </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink tag={Link} className="text-black" to="/NewOrder">
          Home
        </NavLink>
      </CardActions>
    </Card>
  );
}
