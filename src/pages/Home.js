import React, { Component } from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import { InfoConsumer } from '../context';
import Title from '../components/Title';

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Title name="Our Products" />
        <div className="container">
          <div className="row">
            <InfoConsumer>
              {value=>{
                return value.info.map(item=>{
                  return <Container key={item.id} item={item} />;
                });
              }}
            </InfoConsumer>
            
          </div>
        </div>
      </>
    );
  }
}


