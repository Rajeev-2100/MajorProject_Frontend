import useFetch from "../useFetch.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductListing = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/products",
  );
  console.log(data);

  const productLength = data?.data?.length;

  return (
    <>
      <Header />
      <main className="container py-5">
        <h5 className="py-2">
          Show All Products (Showing {productLength} products)
        </h5>

        <div className="d-flex flex-row flex-wrap gap-5">
          {data?.data?.map((product) => (
            <>
              <div className="card d-flex align-items-center justify-content-center" style={{ width: "18rem" }}>
                <img src={product.productImage} className="img-fluid h-100 object-fit-cover card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-text text-center">
                    {product.productName}
                  </h5>
                  <h6 className="text-center">${product.productPrice}</h6>
                  <a href="#" className="text-center btn btn-primary px-5 mx-3">
                    Go to Cart
                  </a>
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
