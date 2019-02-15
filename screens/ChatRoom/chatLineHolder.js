import React from 'react';
import { View, Text } from 'react-native';

export const ChatLineHolder = (props) => {
    return (
        <View style={{
            flexDirection: 'column', width: '50%', alignItems: 'flex-start',
            padding: 8, backgroundColor: '#FFF', borderRadius: 8,marginBottom : 10,marginTop : 10,marginLeft : 5,marginRight : 5
        }} >
            <Text style={{ color: '#005ce6', marginBottom: 5 }} >{props.sender}</Text>
            <Text>{props.chatContent}</Text>
        </View>
    );

};