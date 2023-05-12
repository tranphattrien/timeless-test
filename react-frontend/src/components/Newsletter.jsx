import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
  padding-left: 20px;
  /* font-family: "Urbanist", sans-serif; */
  font-weight: 600;
  font-size: 16px;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  cursor: pointer;
  color: white;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
  &:hover {
    transition: all 0.5s ease;
    background-color: #efefef;
    color: green;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
