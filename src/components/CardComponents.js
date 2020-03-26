import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default class CardComponents extends Component {
    /*state={
        ishover:false
    };
    handleHover(){
        this.setState({ishover:!this.state.ishover})
    }*/
    render() {
        /*const cardStyle=this.state.ishover;
        if(cardStyle){
            cardStyle={height:'400px',boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}
        }
        else{
            cardStyle={height:'400px',boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}
        }*/

        const textStyle={
            textDecoration:'none',
            color:'black'      
        };
        return (
            <Card style={{height:'380px',boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
                <Link to="/details" style={{margin:'auto'}}>
                    <Card.Img variant="top" style={{width: '220px', height: '250px',paddingTop:'20px' }} src={this.props.pic} />
                </Link>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title><Link to="/details" style={textStyle}>{this.props.children}</Link></Card.Title>
                    <Card.Text>
                        <h5>{this.props.price}</h5>
                    </Card.Text>
                    <Card.Text>
                        <a href="#" style={textStyle}><h5>{this.props.category}</h5></a> 
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}


