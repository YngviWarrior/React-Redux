import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Media(props) {
    const { max, min } = props
    return (
        <Card title="Média de números" green>
            <div >
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Media)