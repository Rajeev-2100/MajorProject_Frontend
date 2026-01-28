import { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const [showData, setShowData] = useState(false);
  const { productId } = useParams();
  console.log(productId);

  const { data, loading, error } = useFetch(
    `http://localhost:3001/api/products/${productId}`,
  );
  const productData = data?.data;

  if (error) <p>{error.message}</p>;
  return (
    <>
      <Header />
      <main className="container py-5">
        {loading && (
          <>
            <p className="d-flex justify-content-center align-items-center">
              loading...
            </p>
          </>
        )}

        <div className="d-flex">
          <div className="">
            <img
              src={productData?.productImage}
              alt=""
              width={480}
              className="img-thumbnail"
            />
          </div>
          <div className="p-5 fs-5">
            <h2 className="fw-bolder">{productData?.productName}</h2>
            <p>
              <b className="">rating:</b> {productData?.rating}
            </p>
            <p>
              <b className="fw-bold">$</b>
              {productData?.productPrice}
            </p>
            <p>
              {productData?.discountPrice}
              <b>% off</b>
            </p>
            <p>
              <b className="fw-bold">Qauntity: </b>
              {productData?.productQuantity}
            </p>
            <p>
              <b className="fw-bold">Size: </b>
              {productData?.size}
            </p>
            <p>
              <b className="fw-bold">Description:</b> <br />
              {productData?.productDescription.join(", ")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
