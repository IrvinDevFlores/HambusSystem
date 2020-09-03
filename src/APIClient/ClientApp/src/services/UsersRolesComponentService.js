import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import StoreIcon from '@material-ui/icons/Store';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import KitchenIcon from '@material-ui/icons/Kitchen';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import TableChartIcon from '@material-ui/icons/TableChart';

const whiteColor = { color: '#fff' };


const UsersRolesComponentService = () =>{
    
   const lateralNavItems = [
    {
      text: 'Home',
      icon: <StoreIcon style={whiteColor} />,
      route: '/'
    },
    {
      text: 'Mesas',
      icon: <TableChartIcon style={whiteColor} />,
      route: '/mesas'
    },
    {
      text: 'Empleados/Usuarios',
      icon: <PersonAddIcon style={whiteColor} />,
      route: '/almacen'
    },
    {
      text: 'Almacen',
      icon: <KitchenIcon style={whiteColor} />,
      route: '/almacen'
    },
    {
      text: 'Productos',
      icon: <MenuBookIcon style={whiteColor} />,
      route: '/productos/add'
    },
    {
      text: 'Compras',
      icon: <ListAltIcon style={whiteColor} />,
      route: '/productos/hacer-pedido'
    }

  ]

    return lateralNavItems;
}

export default UsersRolesComponentService;