import React, {useContext} from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Context} from "../index";
import firebase from "firebase";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid container
                    style={{width: 400, background: 'lightgrey'}}
                    alignItems={"center"}
                    direction={"column"}
                    >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Log in with Google account</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
