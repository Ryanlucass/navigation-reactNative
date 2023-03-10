import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';
import {ScreenC} from '../screens/ScreenC';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export function TabRoutes(){
    return (
        <Navigator
        screenOptions={{
            //setando as cores para quando o botão estiver ativo ou não
            tabBarActiveTintColor: 'navy',
            tabBarInactiveTintColor: 'gray', 
        }}
        >
            <Screen
                name='ScreenA'
                component={ScreenA}
                options={{
                    tabBarLabel:'Tela A',
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                        name='home'
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
            <Screen
                name='ScreenB'
                component={ScreenB}
                options={{
                    tabBarLabel:'Tela B',
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                        name='add'
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
            <Screen
                name='ScreenC'
                component={ScreenC}
                options={{
                    tabBarLabel:'Tela C',
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                        name='more'
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}