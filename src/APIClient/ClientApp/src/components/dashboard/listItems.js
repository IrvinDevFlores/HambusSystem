import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

const whiteColor = { color: "#fff" };
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={whiteColor} />
      </ListItemIcon>
      <NavLink tag={Link} to={"/"}>
        <ListItemText primary="Dashboard" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={whiteColor} />
      </ListItemIcon>

      <NavLink tag={Link} to={"/mesas"}>
        <ListItemText primary="Mesas" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={whiteColor} />
      </ListItemIcon>

      <NavLink tag={Link} to={"/empleado/add "}>
        <ListItemText primary="Empleados" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={whiteColor} />
      </ListItemIcon>

      <NavLink tag={Link} to={"/almacen"}>
        <ListItemText primary="Almacen" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={whiteColor} />
      </ListItemIcon>

      <NavLink tag={Link} to={"/productos/add"}>
        <ListItemText primary="Productos" />
      </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={whiteColor} />
      </ListItemIcon>

      <NavLink tag={Link} to={"/mesas"}>
        <ListItemText primary="Reportes" />
      </NavLink>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
