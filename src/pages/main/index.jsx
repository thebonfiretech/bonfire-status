import React from 'react';

import { Container, Box, StatusContainer, StatusLine } from './styles';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const status = [
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
    {
        percentage: '100%',
    },
]

const Main = () => {

    return (
        <Container>
            <Box>
                <StatusContainer>
                    {
                        status.slice(0,90).map((item, index) => {
                            return (
                                <StatusLine key={index}/>
                            )
                        })
                    }
                </StatusContainer>
            </Box>
        </Container>
    )
}

export default Main