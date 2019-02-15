import React from 'react';
import {View , Text} from 'react-native';
import { createAppContainer,createStackNavigator,createSwitchNavigator } from 'react-navigation';
import JoinRoomScreen from './screens/JoinRoom';
import ChatRoomScreen from './screens/ChatRoom';

const JoinStack = createStackNavigator({ JoinRoom: JoinRoomScreen });
const ChatRoomStack = createStackNavigator({ChatRoom : ChatRoomScreen});
export default createAppContainer(createSwitchNavigator(
  {
    // App: AppStack,
    Join : {
       screen : JoinStack
    },
    ChatRoom : {
      screen : ChatRoomStack
    }
  },
  {
    initialRouteName: 'Join',
    
  }
));