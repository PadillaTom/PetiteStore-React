import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";

import { single_product_url } from "../Utils/constants";
import { formatPrice } from "../Utils/helpers";

import { Loading, Error } from "../Components/Utils";
import { ProductImages, Stars, AddToCart } from "../Components/SingleProduct";

import { useProductsContext } from "../Context/products_context";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  // Fetch
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  // Redirect on Error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  // RENDER:
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <SingleProductContainer>
      <Link className="btn-back" to="/products">
        Back to Products
      </Link>
      <div className="section section-center">
        <div className="product-center">
          <ProductImages images={images}></ProductImages>
          <section className="content">
            <h2>{name}</h2>
            <Stars></Stars>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
              <span>SKU: </span>
              {sku}
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart></AddToCart>}
          </section>
        </div>
      </div>
    </SingleProductContainer>
  );
};

const SingleProductContainer = styled.main`
  padding-top: 1.5rem;
  .btn-back {
    font-family: var(--FontWork);
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--ColorPiel);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 0.5rem;
  }
  .content h2 {
    font-family: var(--FontWork);
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
  hr {
    opacity: 0.35;
  }
  .price {
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--ColorSemiCrimson);
  }
  .desc {
    line-height: 1.55;
    color: var(--FontColorGrey);
    letter-spacing: 0.7px;
    padding: 1.3rem 0rem;
  }
  .info {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 8rem 1fr;
    row-gap: 1.25rem;
    padding-bottom: 1.5rem;
    color: var(--FontColorGrey);
    letter-spacing: 0.7px;
    font-family: var(--FontWork);
    font-size: 0.9rem;
    span {
      font-family: var(--FontWork);
      letter-spacing: 0.5px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--FontColorDark);
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
