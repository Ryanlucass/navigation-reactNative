import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'


const {Screen, Navigator } = createDrawerNavigator();

import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';
import {ScreenC} from '../screens/ScreenC';


export function DrawerRoutes () {
    return (
        <Navigator>
            <Screen
            name='Tela A'
            component={ScreenA}
            />

            <Screen
            name='Tela B'
            component={ScreenB}
            />
        </Navigator>
    )
}