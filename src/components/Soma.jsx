import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Soma dos números" blue>
            <div >
                <span>
                    <span>Resultado: </span>
                    <strong>{ min + max }</strong>
                </span>
            </div>
        </Card>
    )
}