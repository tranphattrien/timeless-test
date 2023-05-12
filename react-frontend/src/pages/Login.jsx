import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link as Lnk } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
    text-align: center;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 60%;
  margin-left: 20%;
  margin-bottom: 10px;
  padding: 15px 20px;
  color: black;
  font-weight: 600;
  background: linear-gradient(to left, transparent 50%, teal 50%) right;
  background-size: 200%;
  transition: 0.2s ease-out;
  &:hover {
    background-position: left;
    color: white;
    border: 1px solid white;
  }
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    login(dispatch, { username, password });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            {/* <Link> */}
            <Lnk to={"/"}>Forgot your password ?</Lnk>
            {/* </Link> */}
            {/* <Link> */}
            <Lnk to="/register">Do not have an account ?</Lnk>
            {/* </Link> */}
            {/* <Link> */}
            {" "}
            <Lnk to={"/"}>Home</Lnk>
            {/* </Link> */}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
