import React from 'react';
import {FaUserCircle,FaHeart,FaCartPlus} from 'react-icons/fa';

const Sidebar=props => {
    let sideclasses = 'sidebar';
    let logs;
    let signin;
    if(props.show){
        sideclasses='sidebar open';
    }
    if(props.Login){
        logs=props.name;
        signin=props.out;
    }
    else{
        logs=props.guest;
        signin=props.in;
    }
    return (
        <nav className={sideclasses}>
            <div className="sideTop"><FaUserCircle size={30} style={{marginLeft:'2rem',marginBottom:'0.3rem'}} /> Hello, {logs}</div>
            <ul>
                <br/>
                <li><a href="/">Your Wishlist <FaHeart size={20} style={{alignItems:'right',marginBottom:'0.3rem'}} /></a></li>
                <li><a href="/">Your Orders</a></li>
                <li><a href="/">Your Cart   <FaCartPlus size={20} style={{alignItems:'right',marginBottom:'0.3rem'}} /></a></li>
                <hr className="hr"/>
                <div style={{textAlign:'left'}} ><h4>Shop By Category</h4></div>
                <li><a href="/">Mobiles,Computers</a></li>
                <li><a href="/">Men's Fashion</a></li>
                <li><a href="/">Women's Fashion</a></li>
                <li><a href="/">Home Decor</a></li>
                <li><a href="/">Accesories</a></li>
                <li><a href="/">Sports, Fitness</a></li>
                <li><a href="/">Bags, Luggage</a></li>
                <hr className="hr"/>
                <li><a href="/">Your Account</a></li>
                <li><a href="/">Customer Service</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/" onClick={props.sign}>{signin}</a></li>
            </ul>
        </nav>
    );
};
export default Sidebar;