import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style + ' glyphicon glyphicon-' + props.icon}
            onClick={props.onClick}>
        </button>
    </If>
)