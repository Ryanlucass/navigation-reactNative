import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from './stack.routes'

//Estou criando um contexto, e chamando as telas relacionadas a esse contexto.
//no caso, StackRoutes.

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
        
    )
}