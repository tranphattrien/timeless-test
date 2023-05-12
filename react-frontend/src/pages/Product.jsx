import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownButton,
  Form,
  FloatingLabel,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid gray;
  &[color~="::active"] {
    border: 5px solid black;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  outline: none;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  color: black;
  font-weight: 600;
  background: linear-gradient(to left, transparent 50%, black 50%) right;
  background-size: 200%;
  transition: 0.2s ease-out;
  &:hover {
    background-position: left;
    color: white;
    transform: translate(20px);
  }
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
`;

const FilterSizeOption = styled.option``;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (!size) {
      console.log(size);
      alert("select size");
    } else if (!color) {
      console.log(color);
      alert("select color");
    } else {
      dispatch(addProduct({ ...product, quantity, color, size }));
    }
  };

  const handleSize = (e) => {
    console.log(e);
    setSize(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Select color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  type="radio"
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                ></FilterColor>
              ))}

              {/* <DropdownButton
                id="dropdown-basic-button"
                title="Color"
                placeholder="Select Size"
                variant="secondary"
              >
                {product.color?.map((c) => (
                  <Dropdown.Item color={c} key={c} onClick={() => setColor(c)}>
                    <button
                      style={{
                        background: `${c}`,
                        padding: "15px",
                        borderRadius: "30px",
                        marginRight: "20px",
                      }}
                    ></button>
                    {c}
                  </Dropdown.Item>
                ))}
              </DropdownButton> */}
            </Filter>
            <Filter>
              <Form.Select
                label="Select Size"
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Select size</option>
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </Form.Select>

              {/* <FilterSize
                placeholder={"Select Size"}
                onChange={(e) => setSize(e.target.value)}
                onSelect={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize> */}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
