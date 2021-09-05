import React from 'react';
import './Projects.css';
import logo from './logo.png';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {red} from "@material-ui/core/colors";
import {Grid} from "@material-ui/core";

//
// const Projects = () => {
//     return (
//         <section>
//             <Card className={classes.root}>
//                 <CardHeader>
//                     <h1>Online store</h1>
//                     </CardHeader>
//             <div className='centered'>
//
//                 <p>
//                     My application was hosted on heroku.<br/>
//                     To create this application I used Angular as front-end and Java Spring boot as back-end and <br/>
//                     the server to get information from is PostgreSQL.
//                 </p>
//                 <p>
//                     In order for the application to fully start, first of all we need to user server link to get it up and <br/>
//                     running, so here's the server link: <a href='https://working-store.herokuapp.com/' target='_blank' rel="noreferrer">
//                     https://working-store.herokuapp.com/</a>, once that is done you now can<br/>
//                     use link to get to login page of the store:<a href='https://working-store.herokuapp.com/' target='_blank' rel="noreferrer">
//                     https://digitalists.herokuapp.com/login.</a><br/>
//                     To log in as an admin, the login Username is : admin and the password is admin. <br/>
//                     To log in as an user, the login Username is : user and the password is user.
//                 </p>
//             </div>
//             </Card>
//         </section>
//     );
// };

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            background: red,
            flexGrow: 1,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        control: {
          padding: theme.spacing(2),
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

export default function Projects () {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
       <Grid style={{paddingTop: '20px'}}
           container
           direction="row"
           justifyContent="space-evenly"
           alignItems="stretch"
       >
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Store" className={classes.avatar}>
                        <img src={logo} alt='Logo'/>
                    </Avatar>
                }
                title="Digital sales outlet"
                subheader="Since 2020"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is my own project created to see how much I learned
                    during Software Development Academy. My application was hosted on heroku.
                    To create this application I used Angular as front-end and Java Spring boot as back-end and
                    the server to get information from is PostgreSQL
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph></Typography>
                    <Typography paragraph>
                        In order for the application to fully start, first of all we need to use server link to get it up and
                        running, so here's the server link: <a href='https://working-store.herokuapp.com/' target='_blank' rel="noreferrer">
                        https://working-store.herokuapp.com/</a>, once that is done you now can
                        use link to get to login page of the store:<a href='https://digitalists.herokuapp.com/login' target='_blank' rel="noreferrer">
                        https://digitalists.herokuapp.com/login.</a>
                    </Typography>
                    <Typography paragraph>
                        To log in as an Admin, you can just use Username: admin and the password: admin
                    </Typography>
                    <Typography paragraph>
                        To log in as an user, the login Username is : user and the password is user.
                    </Typography>
                    <Typography paragraph>
                        Links to github of back-end:
                        <a href='https://github.com/EdvinasA/OnlineStore-Java-Back-End'>Github</a>
                        Links to github of front-end:
                        <a href='https://github.com/EdvinasA/OnlineStore-Angular'>Github</a>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
       </Grid>
    );
}
//
// export default Projects;
