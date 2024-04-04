import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../estilo";

import MegaNumero from "./MegaNumero";
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

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtDeNumeros)
    //         .fill()
    //         .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
    //         .sort((a, b) => a - b)
    //     this.setState({ numeros })
    // }

    gerarNumeros = () => {
        const { qtDeNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtDeNumeros; i++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }

        numeros.sort((a, b) => a - b)

        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
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
                {/* <Text>
                    {this.state.numeros.join(',')}
                </Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: "center"
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }

}

// constructor(props) {
//     super(props)

//     this.alterarQtDeNumero = this.alterarQtDeNumero.bind(this)
// }