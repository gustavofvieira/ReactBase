import React from 'react'
import './App.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) =>
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={11}>

            </CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}>

            </Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao>

            </Repeticao>
        </Card>
        <Card titulo="#03 - Componentes com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Sebastião</li>
                    <li>Bia </li>
                    <li>Milla</li>
                    <li>Josa</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Esse é o titulo"
                subtitulo="Esse é o subtitulo" />

        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

  
    </div>