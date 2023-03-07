import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';

const {Screen, Navigator} = createNativeStackNavigator();

//separar rotas de acordo com o seu contexto, em arquivos diferentes 
// ex: 

// adminRoutes
// AutenthicRoutes

export function StackRoutes(){
    return (
        <Navigator>
            <Screen 
            name='ScreenA'
            component={ScreenA}
            />
            <Screen
            name='ScreenB'
            component={ScreenB}
            />
        </Navigator>
    )
}