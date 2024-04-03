import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"


import Mega from "./components/mega/Mega"
// import FlexboxV4 from "./components/layout/FlexboxV4"
// import FlexboxV3 from "./components/layout/FlexboxV3"
// import FlexboxV2 from "./components/layout/FlexboxV2"
//import FlexboxV1 from "./components/layout/FlexboxV1"
//import Quadrado from "./components/layout/Quadrado"
//import DigiteSeuNome from "./components/DigiteSeuNome"
//import ListaProdutos from "./components/produtos/ListaProdutos"
//import ListaProdutosV2 from "./components/produtos/ListaProdutosV2"
//import UsuarioLogado from "./components/UsuarioLogado"
//import Familia from './components/relacao/Familia'
//import Membro from "./components/relacao/Membro"
//import ParImpar from "./components/ParImpar"
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from "./components/indireta/Pai"
//import Pai from "./components/direta/Pai"
//import Contador from "./components/Contador"
//import Botao from "./components/Botao"
//import Titulo from './components/Titulo'
//import Aleatorio from "./components/Aleatorio"
//import MinMax from "./components/MinMax"
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtDeNumeros={12}/>

        {/*
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />

        <DigiteSeuNome />

        <ListaProdutosV2 />
        
        <ListaProdutos />

        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
        <UsuarioLogado usuario={{ email: 'gui@gui.com' }} />
        <UsuarioLogado usuario={{ nome: 'Gui' }} />
        
        <Familia>
            <Membro nome='Bia ' sobrenome='Arruda'/>
            <Membro nome='Carlos' sobrenome='Arruda'/>
        </Familia>
        <Familia>
            <Membro nome='André' sobrenome='Prestes'/>
            <Membro nome='Sergio' sobrenome='Prestes'/>
            <Membro nome='Fernanda' sobrenome='Prestes'/>
        </Familia>
        
        <ParImpar num={2}/>
        
        <ContadorV2 />
        <Pai />
        <Pai />
        
        <Contador inicial={100} passo={13}/>

        <Contador />
        <Botao />
        <Titulo principal='Cadastro'
                secundario='Tela de Cadastro do Produto'
        />
        <Aleatorio max={60} min={1}/>
        <MinMax max={20} min={2}/>
        <MinMax max={94} min={1}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})
