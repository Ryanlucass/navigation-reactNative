import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';
import {ScreenC} from '../screens/ScreenC';

const {Screen, Navigator, Group} = createNativeStackNavigator();

//separar rotas de acordo com o seu contexto, em arquivos diferentes 
// ex: 

// adminRoutes
// AutenthicRoutes

// configurações de tela como cabeçalho ou estilo da animação
// podem ser configurados, com a tag options, podendo ser armazenada 
// e separada com o atributo group


export function StackRoutes(){
    return (
        <Navigator>

        <Group screenOptions={{animation: 'slide_from_left'}}>
            <Screen 
            name='ScreenA'
            options={{
                headerShown: false
            }}
            component={ScreenA}
            />
            <Screen
            name='ScreenB'
            component={ScreenB}
            />
        </Group>

            <Screen
            options={{animation:'slide_from_bottom'}}
            name='ScreenC'
            component={ScreenC}
            />
        </Navigator>
    )
}