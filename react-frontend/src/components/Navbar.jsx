import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding-top: 20px;
  height: 110px;
  ${mobile({ height: "20px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px", marginRight: "15px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: "Alkatra", cursive;
  font-weight: bold;
  font-size: 70px;
  line-height: 0;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  text-decoration: none;
  padding: 0px 20px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "teal"
              }}
              to={`/`}
            >
              Home
            </Link>
          </MenuItem>
          {admin && (
            <MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "teal"
                }}
                to={`/admin`}
              >
                Admin
              </Link>
            </MenuItem>
          )}
        </Left>
        <Center>
          <Logo>Timeless</Logo>
        </Center>
        <Right>
          {user === null ? (
            <>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    color: "teal"
                  }}
                  to={`/register`}
                >
                  Register
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    color: "teal"
                  }}
                  to={`/login`}
                >
                  Login
                </Link>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "teal"
                }}
                onClick={() => logout()}
              >
                Logout
              </Link>
            </MenuItem>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
