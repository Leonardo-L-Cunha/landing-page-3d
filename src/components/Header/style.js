import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 48px;
    background-color:#fff;
    && img {
        width:100px;
        height:100px;
    }

    && div {
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100px
    }
`