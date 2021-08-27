import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <ProductContainer>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          Details
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>$ {price}</p>
      </footer>
    </ProductContainer>
  );
};

const ProductContainer = styled.article`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  .container {
    position: relative;
  }
  img {
    width: 100%;
    height: 19rem !important;
    display: block;
    object-fit: cover;
    transition: var(--MainTransition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--MainTransition);
    opacity: 0;
    cursor: pointer;
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 0.7px;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--ColorBlack);
  }
  .container:hover img {
    opacity: 0.25;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    width: 95%;
    margin: 0 auto;
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  footer h5 {
    font-family: var(--FontWork);
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--ColorBlack-85);
    margin-bottom: 0.5rem;
  }
  footer p {
    font-family: var(--FontLora);
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 2px;
    color: var(--ColorBlack-7);
    letter-spacing: 1.2px;
  }
`;
export default ProductCard;