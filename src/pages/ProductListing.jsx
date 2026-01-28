import { Link } from "react-router-dom";
import useFetch from "../useFetch.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductListing = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/products",
  );

  const productLength = data?.data?.length;

  return (
    <>
      <Header />
      <main className="container py-5">
        <h5 className="py-2">
          Show All Products (Showing {productLength} products)
        </h5>
        {loading && (
          <>
            <p className="d-flex justify-content-center align-items-center">
              loading...
            </p>
          </>
        )}

        <div className="d-flex flex-row flex-wrap gap-5">
          {data?.data?.map((product) => (
            <>
              <div
                className="card d-flex align-items-center justify-content-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.productImage}
                  className="img-fluid h-100 object-fit-cover card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-text">{product.productName}</h5>
                  <h6>${product.productPrice}</h6>
                  <Link to={`/`} className="btn btn-primary px-5 mx-3 mb-4">
                    Go to Cart
                  </Link>
                  <Link
                    to={`/productPage/${product._id}`}
                    className="px-5 mx-3 btn btn-primary"
                  >
                    More Detail
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductListing;
