import React, { useEffect } from 'react'
import { useAppDispatch } from 'state';
import { fetchData } from 'state/products';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';
import InPrice from './components/InPrice';
import InUsDolarPrice from './components/InUsDolarPrice';
import InEuroPrice from './components/InEuroPrice';
import { RateType } from 'state/types';

const Home: React.FC = () => {
  const disPatch = useAppDispatch();
  useEffect(() => {
    disPatch(fetchData(RateType.NZD));
    disPatch(fetchData(RateType.USD, 0.76));
    disPatch(fetchData(RateType.EURO, 0.67));
  }, [disPatch]);

  return (
    <Wrapper>
      <Header />
      <Body>
        <InPrice />
        <InUsDolarPrice />
        <InEuroPrice />
      </Body>
      <Footer />
    </Wrapper>
  )
}

export default Home;
const Wrapper = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
  align-items:center;
`
const Body = styled.div`
    max-width:1200px;
    width:100vw;
    padding:20px;
    flex:1;
    @media (max-width: 700px) {
      padding: 0;
    }
`
