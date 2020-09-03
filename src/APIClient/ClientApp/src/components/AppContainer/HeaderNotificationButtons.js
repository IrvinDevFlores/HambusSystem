import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";



const drawerWidth = 240;

const lateralMenuColor = '#212121';
const navbarColor = "#1d110d";
const lateralMenuHeaderColor = '#FFC107';




const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: `${navbarColor}`
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,

    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: `${lateralMenuColor}`,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: `${lateralMenuHeaderColor}`
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));


const HeaderNotificationButtons = () =>{

   const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleInput = (event) => {
    let s = event.target.value;
    console.log(s);

  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const whiteColor = { color: '#fff' };

    return(
        <div className={classes.sectionDesktop}>
            <Tooltip title="Delete">
              <IconButton aria-label="notifications">
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon style={whiteColor} />
                  </Badge>
                </IconButton>
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton aria-label="show 17 new notifications">
                <IconButton aria-label="show 17" color="default">
                  <Badge badgeContent={17} color="secondary">


                    <NotificationsIcon style={whiteColor} />

                  </Badge>
                </IconButton>
              </IconButton>

            </Tooltip>
          </div>
    );
}

export default HeaderNotificationButtons;