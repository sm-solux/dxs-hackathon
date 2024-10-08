import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`
    border-radius: 15px;
    border: 1px solid #0057FF;
    padding: clamp(1rem, 1.2vw, 1.2rem);
    flex-direction: column; 
    align-items: center;
    margin-top: 1vw;
    margin-bottom: 1rem;
    flex-grow: 1;
    width: 100%;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    padding-left: clamp(0.5rem, 0.5vw, 1.2rem);
`

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: calc(0.26vw + 14.08px);
    margin-bottom: 0.5rem;
`

const StyledPoint = styled.div`
    font-size: calc(0.26vw + 14.08px);
    margin-left: 0.3vw;
`

const List = styled.ul`
    list-style: disc; /* 기본 점 스타일 */
    font-size: calc(0.26vw + 14.08px);
    padding-left: clamp(2rem, 2.3vw, 2.3rem); 
    margin: 0; /* 기본 여백 제거 */
`;

const ListItem = styled.li`
    font-size: calc(0.26vw + 14.08px);
    margin-top: 0.7vw;
`;

function Box(props){
    const { title, point, contents } = props;

    return(
        <StyledBox>
                <TitleContainer>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledPoint>{point}</StyledPoint>
                </TitleContainer>
                <List>
                    {contents && contents.map((content, index) => (
                        <ListItem key={index}>{content}</ListItem>
                    ))}
                </List>
        </StyledBox>
    );
}

export default Box;