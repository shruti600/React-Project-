import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import { Link } from 'react-router-dom';

class Container extends Component {
    render() {

const {
  id,
  name,
  category,
  price,
  image
} = this.props.item;
const textStyle={
  textDecoration:'none',
  color:'black'      
};
        return (
            <InfoConsumer>
                {value => (
                  <div className=".col-10 col-lg-3 mx-auto mb-5">
                    <div className="card" style={{height:'380px',boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
                      <Link to="/details" style={textStyle}><img src={image} className="card-img-top" style={{width: '100%', height: '250px' }}/>
                      </Link>
                      <div className="card-body">
                        <Link to="/details" style={textStyle}>
                        <h5 className="card-title text-uppercase">{name}</h5>
                        </Link>
                        <h6 className="card-title">{price}</h6>
                        <h6 className="card-title">{category}</h6>
                      </div>
                    </div>
                  </div>
                )}
                
            </InfoConsumer>
        );
    }
}
export default Container;


