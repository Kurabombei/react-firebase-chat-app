import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Login = () => {
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
                        <Button variant={"outlined"}>Log in with Google account</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
