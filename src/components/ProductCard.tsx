import { useState } from 'react';
import { Product } from 'state/types';
import styled from 'styled-components';

interface Props {
    data: Product,
    isBigCard?: boolean,
}
function ProductCard({ data, isBigCard }: Props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <Wrapper isBigCard={isBigCard} >
            <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                {isHover ? (
                    <SubImg
                        src={data.subImageUrl}
                        isBigCard={isBigCard}
                    />
                ) : (
                    <Img
                        src={data.imageUrl}
                        isBigCard={isBigCard}
                    />
                )}
            </div>
            <Content isBigCard={isBigCard}>
                <Name title={data.name} isBigCard={isBigCard}>{data.name}</Name>
                <Type isBigCard={isBigCard}>{data.type}</Type>
                <Price isBigCard={isBigCard}>{data.price}</Price>
            </Content>
        </Wrapper>
    )
}

export default ProductCard;
const Wrapper = styled.div`
    width:${props => props.isBigCard ? '462px' : '216px'};
    background-color: #f7f7f7;
    cursor:pointer;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #f7f7f7;
    box-sizing: border-box;
`
const Img = styled.img`
    width:${props => props.isBigCard ? '462px' : '216px'};
    height:${props => props.isBigCard ? '462px' : '216px'};
`
const SubImg = styled.img`
    width:${props => props.isBigCard ? '462px' : '216px'};
    height:${props => props.isBigCard ? '462px' : '216px'};
    opacity:0;
    &:hover{
        opacity:1;
        transition: all 0.5s ease-in-out;
    }
`
const Content = styled.div`
    padding:${props => props.isBigCard ? '20px' : '12px'};
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Name = styled.a`
    font-size: ${props => props.isBigCard ? '25px' : '14px'};
    color: #222;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align:center;
`
const Price = styled.span`
    margin: 0 0 10px 0;
    line-height: ${props => props.isBigCard ? '40px' : '24px'};
    color: #ff3c20;
    font-size: ${props => props.isBigCard ? '28px' : '16px'};
    font-weight: 600;
`
const Type = styled.span`
    color:#fec42d;
    font-size: ${props => props.isBigCard ? '25px' : '14px'};
    line-height: ${props => props.isBigCard ? '40px' : '24px'}
`