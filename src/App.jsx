import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'

export default (props) =>
    <div className="App">
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