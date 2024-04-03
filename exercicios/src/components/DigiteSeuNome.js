import React, {useState} from 'react'
import {Text, View, TextInput} from 'react-native'
import Estilo from './estilo'

export default props => {
    let [nome , setNome] = useState('Teste')

    return(
        <View style={Estilo.fontG}>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}