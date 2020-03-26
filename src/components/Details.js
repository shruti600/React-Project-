import React, { Component } from 'react'
import {InfoConsumer} from '../context';

export default class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {value=>{
                    const{
                        id,
                        name,
                        price,
                        category,
                        image,
                        color,
                        description
                    }=value.info;
                }}
            </InfoConsumer>
        );
    }
}
