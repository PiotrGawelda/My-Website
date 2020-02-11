import React from "react"
import styled from "styled-components"
import Container from "./container";

const StyledHeader = styled.header`
    background-color: #000000;
    color: #ffffff;
    height: 100vh;
`;

const Header = () => (
    <StyledHeader>
        <Container>
            <h1>Hello</h1>
            <p>Welcome on my website</p>
        </Container>
    </StyledHeader>
)

export default Header