import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {MaterialIcons} from '@expo/vector-icons';

const {Screen, Navigator } = createDrawerNavigator();

import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';
import {ScreenC} from '../screens/ScreenC';


export function DrawerRoutes () {
    return (
        <Navigator>
            <Screen
            name='ScreenA'
            component={ScreenA}
            options={{
                drawerLabel:'Home',
                drawerIcon: () => <MaterialIcons name="home" size={22}/>
            }}
            />

            <Screen
            name='ScreenB'
            component={ScreenB}
            options={{
                drawerLabel:'Cadastrar',
                drawerIcon: () => <MaterialIcons name="lock" size={22}/>
            }}
            />
        </Navigator>
    )
}