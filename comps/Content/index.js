import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:${props=>props.bgcolor ? props.bgcolor: '#DEFECD'};
    background-image:${props=>props.bgimg ? props.bgimg: 'url()'};
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 10px;
    min-height: 10px;
`;

const ChildrenContainer = styled.div`
    display:${props=>props.helpsection ? props.helpsection: 'none'};
`;

const Content = ({children, bgcolor, bgimg, helpsection}) =>{
    return <Container bgcolor={bgcolor} bgimg={bgimg}>

        <ChildrenContainer helpsection={helpsection}>
        {children}
        </ChildrenContainer>

    </Container>
}

Content.defaultProps = {
    bgcolor: '#DEFECD',
    bgimg:  'url()',
    helpsection: 'none'
}



export default Content;