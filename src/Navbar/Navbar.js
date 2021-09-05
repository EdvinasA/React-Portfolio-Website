import React from "react";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import './Navbar.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {AiOutlineMenu} from "react-icons/all";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'black',
        height: 60,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <header >
            <AppBar position="static" className={classes.root}>
                <div>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" disableRipple>
                            <Link className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                                  to="/" >Edvinas Alimas</Link>
                        </Button>
                    </Typography>
                    <div className='change-from-icon'>
                        <Button color="inherit">
                            <Link className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                                  to="/about" >About</Link>
                        </Button>
                    </div>
                    <div className='change-from-icon'>
                        <Button color="inherit">
                            <Link to="/projects"
                                  className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none' }}
                            >Projects</Link>
                        </Button>
                    </div>
                    <div className='change-from-icon'>
                        <Button color="inherit">
                            <Link to="/contact"
                                  className="Nav_link"
                                  style={{ color: 'white', textDecoration: 'none'}}
                            >Contact</Link>
                        </Button>
                    </div>


                    <div className='change-to-icon'>
                        <Button color='inherit'  onClick={handleClick}>
                            <AiOutlineMenu/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link className="Nav_link"
                                      style={{ color: 'black', textDecoration: 'none'}}
                                      to="/about" >About</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/projects"
                                      className="Nav_link"
                                      style={{ color: 'black', textDecoration: 'none' }}
                                >Projects</Link></MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/contact"
                                      className="Nav_link"
                                      style={{ color: 'black', textDecoration: 'none'}}
                                >Contact</Link></MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
                </div>
            </AppBar>
        </header>
    );
}
