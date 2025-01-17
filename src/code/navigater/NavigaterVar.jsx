import React from "react";
import styled from "styled-components";
import porckatBall1 from "../../image/porckatBall1.png";


const Nav = styled.nav`
    background-color: #C50000;
`;

const NavUl = styled.ul`
    align-items: center;
    color: white;
    height: 100%;

    &:hover {
        cursor: url(${porckatBall1}), auto;
    }
`;

const NavUlLi = styled.li`
    display: inline-block;
    justify-content: center;
    font-size: 12px;
    height: 100%;
    padding-left : 10px;
    padding-right: 10px;
    
    &:hover {
        background-color: #FF4747;
        cursor: url(${porckatBall1}), auto;
    }
`;

function NavigaterVar(props) {

    const chapters = ["chapter_03","chapter_04","chapter_05","chapter_06","chapter_07","chapter_08","chapter_09","chapter_10","chapter_11","chapter_12","chapter_13","chapter_14","chapter_15"]

    return(
        <div>
            <Nav>
                <NavUl>
                    {
                        chapters.map((chapter, index) => {
                            return (
                                <NavUlLi key={index} onClick={() => props.loadPage(chapter)}>{chapter}</NavUlLi>
                            );
                            
                        })
                    }
                </NavUl>
            </Nav>
        </div>
    );

}

export default NavigaterVar;