import React from "react";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'black',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Navbar() {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" disableRipple>
                            <Link className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                                  to="/" >Edvinas Alimas</Link>
                        </Button>
                    </Typography>
                    <div>
                        <Button color="inherit">
                            <Link className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                                  to="/about" >About</Link>
                        </Button>
                    </div>
                    <div>
                        <Button color="inherit">
                            <Link to="/projects"
                                  className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none' }}
                            >Projects</Link>
                        </Button>
                    </div>
                    <div>
                        <Button color="inherit">
                            <Link to="/contact"
                                  className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                            >Contact</Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
}
