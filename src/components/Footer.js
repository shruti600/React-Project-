import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <>
        <button type="button" className="btn btn-secondary btn-lg btn-block"><a href="/" style={{textDecoration:'none',color:'white'}} >Back to top</a></button>
        <FooterContainer className="main-footer">
        
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Raps</h4>
                        <ul className="list-unstyled">
                            <li>raps@gmail.com</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Connect With Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Make Money With Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Buy With Us</a></li>
                            <li><a href="/">Sell With Us</a></li>
                            <li><a href="/">Advertise Your Products</a></li>
                            <li><a href="/">Become a Merchant</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Get To Know Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">Gifts</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Raps-All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>  
      </>
    );
};
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background: var(--mainDark);
        padding-top:2rem;
        color:var(--mainWhite);
    }
    .footer-bottom{
        padding-top:2rem;
        padding-bottom:1rem;
    }
    ul li a{
        color:var(--mainGrey);
    }
    ul li a:hover{
        color: var(--mainLightGrey);
    }
`;
