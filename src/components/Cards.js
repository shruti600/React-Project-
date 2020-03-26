import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import {FaChevronCircleRight    } from "react-icons/fa";
import mob1 from '../images/mob1.jpg';
import mob2 from '../images/mob2.jpg';
import mob3 from '../images/mob3.jpg';
import mob4 from '../images/mob4.jpg';
import men1 from '../images/men1.jfif';
import men2 from '../images/men2.jfif';
import men3 from '../images/men3.jfif';
import men4 from '../images/men4.jfif';
import women1 from '../images/women1.jfif';
import women2 from '../images/women2.jfif';
import women3 from '../images/women3.jfif';
import women4 from '../images/women4.jfif';
import hd1 from '../images/hd1.jfif';
import hd2 from '../images/hd2.jfif';
import hd3 from '../images/hd3.jfif';
import hd4 from '../images/hd4.jfif';

import CardComponents from './CardComponents';
import Title from './Title';

export default class Cards extends Component{
    render(){
        return(
            <>
            <Title name="Our Products" />
            <CardDeck style={{width:'95%',margin:'auto',paddingTop:'5px'}} >
                <CardComponents pic={mob1} price="Price : Rs.9,000" category="Mobiles">Samsung Galaxy</CardComponents>
                <CardComponents pic={mob2} price="Price : Rs.12,000" category="Mobiles">Redmi Note4</CardComponents>
                <CardComponents pic={mob3} price="Price : Rs.7,000" category="Mobiles">Realme</CardComponents>
                <CardComponents pic={mob4} price="Price : Rs.10,500" category="Mobiles">Lenovo</CardComponents>
                <FaChevronCircleRight size={30} style={{margin:'auto'}} />
            </CardDeck>
            
            <br />
            <CardDeck style={{width:'95%',margin:'auto',paddingTop:'5px'}} >
                <CardComponents pic={men1} price="Price : Rs.500" category="Clothing Men">T-shirt</CardComponents>
                <CardComponents pic={men2} price="Price : Rs.1,000" category="Clothing Men">Hoodie</CardComponents>
                <CardComponents pic={men3} price="Price : Rs.800" category="Clothing Men">Shirt</CardComponents>
                <CardComponents pic={men4} price="Price : Rs.1,200" category="Clothing Men">Shirt</CardComponents>
                <FaChevronCircleRight size={30} style={{margin:'auto'}} />
            </CardDeck> 
            <br />
            <CardDeck style={{width:'95%',margin:'auto',paddingTop:'5px'}} >
                <CardComponents pic={women1} price="Price : Rs.800" category="Clothing Women">Formal</CardComponents>
                <CardComponents pic={women2} price="Price : Rs.1,200" category="Clothing Women">Ethnic</CardComponents>
                <CardComponents pic={women3} price="Price : Rs.1,000" category="Clothing Women">Casual</CardComponents>
                <CardComponents pic={women4} price="Price : Rs.1,500" category="Clothing Women">Jacket</CardComponents>
                <FaChevronCircleRight size={30} style={{margin:'auto'}} />
            </CardDeck>
            <br />
            <CardDeck style={{width:'95%',margin:'auto',paddingTop:'5px'}} >
                <CardComponents pic={hd1} price="Price : Rs.23,000" category="Home Decor">Sofa-set</CardComponents>
                <CardComponents pic={hd2} price="Price : Rs.1,400" category="Home Decor">Bean Bag</CardComponents>
                <CardComponents pic={hd3} price="Price : Rs.1,800" category="Home Decor">Shelf</CardComponents>
                <CardComponents pic={hd4} price="Price : Rs.2,500" category="Home Decor">Wall Decor</CardComponents>
                <FaChevronCircleRight size={30} style={{margin:'auto'}} />
            </CardDeck>
            
            </>        
        );
    }
}