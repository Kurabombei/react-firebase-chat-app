import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Grid, Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/constants";

const Navbar = () => {
    const user = false;
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Log in</Button>
                        </NavLink>
                    }
                </Grid>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
