import React, { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import Estilo from "../estilo";

export default class Mega extends Component {

    state = {
        qtDeNumeros: this.props.qtDeNumeros,
        numeros: []
    }

    alterarQtDeNumero = (qtde) => {
        this.setState({ qtDeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtDeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    value={`${this.state.qtDeNumeros}`}
                    onChangeText={this.alterarQtDeNumero}
                // onChangeText={qtde => this.alterarQtDeNumero(qtde)}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }

}

// constructor(props) {
//     super(props)

//     this.alterarQtDeNumero = this.alterarQtDeNumero.bind(this)
// }