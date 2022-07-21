import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <CopyRight>
                eMarket © 2022 Demo Store. All Rights Reserved. Designed by <Link>OpenCartWorks.Com</Link>
            </CopyRight>
        </Wrapper>
    )
}
export default Footer;
const Wrapper = styled.div`
    background-color: #232f3e;
    margin-top: 45px;
    padding: 15px 0;
    display: flex;
    width:100vw;
`
const CopyRight = styled.span`
    font-size: 14px;
    line-height: 26px;
    color:#fff;
    text-align:center;
    flex:1;
`
const Link = styled.a`
    color: #ff3c20 !important;
    cursor: pointer;
    text-decoration: none;
`