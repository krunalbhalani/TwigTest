import React, { useEffect } from "react";
import styled from "styled-components";
import { groupArrayElements } from '../Utility/common'


const MainDiv = styled.div`
  background-color: gray;
  font-size: 32px;
  color: white;
  width:100%
  height: 100%;
`;

const MainDivTitle = styled.div`
  background-color: black;
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  width:100%;
  height:60px;
  text-align: center;
`;

const SubDiv = styled.div`
  background-color: grey;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  width:100%;
  height:30px;
  text-align: center;
`;


const GroupArray = () => {

useEffect(()=> {
    const result = groupArrayElements([1, 2, 3, 4, 5],-1)
    console.log('Result=', result)
}, [])
  
      
  return (
    <MainDiv>
          <MainDivTitle>Twig Test</MainDivTitle>
          <SubDiv> Please Check Console section in Developer Tool of Browser </SubDiv>
    </MainDiv>
  );
}

export default GroupArray
