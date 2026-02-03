import { useContext } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartContext from "../useContext/Cart";

const WishListPage = () => {
  const { wishList, addToCart } = useContext(CartContext);
//   console.log('Add to Cart: ', addToCart)

  return (
    <>
      <Header />
      <main className="container py-5">
        <h4 className="text-center mb-4">My Wishlist ({wishList.length})</h4>

        {wishList.length === 0 ? (
          <p className="text-center">Your Wishlist is Empty</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-between gap-1">
            {wishList.map((item) => (
              <div className="card" key={item._id} style={{ width: "18rem" }}>
                <img
                  src={item.productImage}
                  className="card-img-top"
                  alt={item.productName}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h6 className="card-title">{item.productName}</h6>
                  <h5>${item.productPrice}</h5>
                  <Link
                    to={`/cart`}
                    onClick={() => addToCart(item)}
                    className="btn btn-secondary px-5 mx-3 mb-4">
                    Move to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default WishListPage;
