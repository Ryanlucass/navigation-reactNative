import React from "react";
import { View, Button, Text} from "react-native";
import { useNavigation, useRoute} from '@react-navigation/native';

type Paramprops = {
    name: string,
}

export function ScreenB(){
    const route = useRoute();
    const {name} = route.params as Paramprops;

    const navigation = useNavigation();
    
    return (
        <View style={{flex:1, backgroundColor:'blue'}}>
            <Button 
                title="ir para o vermelho"
                onPress={()=> navigation.navigate('ScreenA')}
            />
            <Button
                title="Ir para o verde"
                onPress={() => navigation.navigate('ScreenC')}
            />
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 25}}>
                    {name}
                </Text>
            </View>

        </View>
    );
}