import React from 'react';
import { View, Text, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';
import firebase from 'firebase';
class JoinRoom extends React.Component {
    static navigationOptions = {
        title: 'Welcome to Chat Group',
    };
    state = {
        name : ''
    };
   
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDewG0wu_W4MOEFUfBXwxf1C9iAXQhPCd0",
            authDomain: "simplegroupchat-f5983.firebaseapp.com",
            databaseURL: "https://simplegroupchat-f5983.firebaseio.com",
            projectId: "simplegroupchat-f5983",
            storageBucket: "simplegroupchat-f5983.appspot.com",
            messagingSenderId: "819325153393"
        };
        firebase.initializeApp(config);
    };
    _onChangeName = (text) =>
    {
        this.setState({
            name : text
        });
    };
    _toChatRoom = () => {
        firebase.auth().signInAnonymously().then((user) => {
            AsyncStorage.setItem('name',this.state.name);
            this.props.navigation.navigate('ChatRoom');
        }).catch( (err) => alert(err) );
    }
    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, paddingBottom: 15 }} >
                <Text>
                    ENTER YOUR NAME :
                </Text>
                <TextInput placeholder="" style={{
                    borderColor: "#A5A5A5",
                    borderWidth: 0.5, padding: 8, width: '100%', marginBottom: 15, marginTop: 15
                    }} 
                    onChangeText={(text) => this._onChangeName(text)}
                />
                <TouchableOpacity onPress={() => this._toChatRoom()} >
                    <Text style={{ fontWeight: 'bold' }} >
                        Join Now
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};
export default JoinRoom;