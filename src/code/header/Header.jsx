import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    align-items: center;
`;

/* === BASE HEADING === */ 
const H1 = styled.h1`
    position: relative;
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 40px;
    color: #080808;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;

    text-align: center;
    color:#222; font-size:30px; font-weight:400;
    text-transform: uppercase;
    word-spacing: 1px; letter-spacing:2px; color:#c50000;
  `;
  
const H1Span = styled.span`
    display: block;
    font-size: 0.5em;
    line-height: 1.3;

    line-height:2em; padding-bottom:15px;
    text-transform: none;
    font-size:.7em;
    font-weight: normal;
    font-style: italic; font-family: "Playfair Display","Bookman",serif;
    color:#999; letter-spacing:-0.005em; word-spacing:1px;
    letter-spacing:none;
  `;
const H1EM = styled.em`
    font-style: normal;
    font-weight: 600;
  `;

/* STYLE 6
   ----------------------------- */
//    .six h1 {
//     text-align: center;
//     color:#222; font-size:30px; font-weight:400;
//     text-transform: uppercase;
//     word-spacing: 1px; letter-spacing:2px; color:#c50000;
//   }
//   .six h1 span {
//     line-height:2em; padding-bottom:15px;
//     text-transform: none;
//     font-size:.7em;
//     font-weight: normal;
//     font-style: italic; font-family: "Playfair Display","Bookman",serif;
//     color:#999; letter-spacing:-0.005em; word-spacing:1px;
//     letter-spacing:none;
//   }



function Header(props) {
    return (
        <Wrapper className="six">
            <H1>My Practice Page
                <H1Span>My Practice Page</H1Span>
            </H1>
        </Wrapper>
    );
}

export default Header;