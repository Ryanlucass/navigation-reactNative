import React from "react";
import { View, Button} from "react-native";
import { useNavigation} from '@react-navigation/native';


export function ScreenB(){
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
        </View>
    );
}