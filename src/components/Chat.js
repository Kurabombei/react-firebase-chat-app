import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        // send the message to a firestore collection
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        // Clean the textfield
        setValue('');
    }

    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify={"center"}
                  style={{height: window.innerHeight - 70, paddingTop: 20}}>
                <div className={"chat-box"} style={{width:'80%', height:'70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    { messages.map(message =>
                        <div className={"message-block"}
                            style={{
                                margin: 10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content',
                                padding: 5,
                                borderRadius: 15
                            }}
                            >
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container
                      direction={"column"}
                      alignItems={"flex-end"}
                      style={{width: '80%'}}>
                    <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        onClick={sendMessage}
                        variant={"outlined"}>
                        Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
