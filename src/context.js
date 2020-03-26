import React, { Component, createContext } from 'react';
import {productInfo} from './data';

const InfoContext=createContext();

class InfoProvider extends Component {
    state={
       info:productInfo 
    };
    render() {
        return (
            <InfoContext.Provider 
            value={{
                info:this.state.info,
                id:this.state.id,
                name:this.state.name,
                price:this.state.price,
                category:this.state.category,
                color:this.state.color,
                image:this.state.image
                }}>
                {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer=InfoContext.Consumer;

export {InfoProvider,InfoConsumer};