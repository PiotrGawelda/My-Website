import React from "react"
import styled from "styled-components"
import Container from "./container";
import Preloader from "./preloader";

const StyledHeader = styled.header`
    background-color: #000000;
    height: 100vh;
`;

const Header = () => {


    return (
        <StyledHeader>
            <Container>
                <Preloader/>
            </Container>
        </StyledHeader>

    )
}

export default Header