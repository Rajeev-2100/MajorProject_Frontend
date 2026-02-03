import { useContext } from "react";
import CartContext from "../useContext/Cart.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Cart = () => {
  const { cart, removeFromCart, wishList } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => {
    let sum = acc + curr.productPrice
    return sum 
  }, 0)

  // console.log('wishlist: ',wishList)

  return (
    <>
      <Header />
      <main className="container  py-5">
        <h4 className="d-flex justify-content-center  align-items-center">
          My Cart ({cart.length})
        </h4>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="border p-5 mb-3 ">
              <div className="p-5 d-flex flex-row justify-content-center bg-danger gap-5">
                <div className="card d-flex flex-column " style={{width: '30rem'}}>
                  <img
                  src={item.productImage}
                  className="img-fluid h-50 object-fit-cover card-img-top"
                  alt="..."
                />
                  <div className="card-body text-center">
                    <p className="card-text">
                      {item.productName}
                    </p>
                    <h3>${item.productPrice}</h3>
                    <h5>{item.discountPrice}</h5>
                    <p>Quantity: {item.productQuantity}</p>
                    <Link onClick={() => removeFromCart(item._id)} className="btn btn-secondary">Remove From Cart</Link>
                    <Link to={`/wishList`} className="btn btn-light">Move to Wishlist</Link>
                  </div>
                </div>
                <div className="card p-4">
                    <h5>PRICE DETAILS</h5>
                    <hr />
                    <p>Price: ({totalPrice.toFixed(2)})</p>
                    <p>Discount Price: -{item.discountPrice}</p>
                    <hr />
                    <h3><b>TOTAL AMOUNT</b>  ${totalPrice.toFixed(2)}</h3>
                    <hr />
                    <p>You will save $1000 on this order</p>
                    <Link className="btn btn-primary">PLACE ORDER</Link>
                </div>
              </div>
            </div>
          )) ||  wishList.map((item) => (
            <div key={item._id} className="border p-5 mb-3 ">
              <div className="p-5 d-flex flex-row justify-content-center bg-danger gap-5">
                <div className="card d-flex flex-column " style={{width: '30rem'}}>
                  <img
                  src={item.productImage}
                  className="img-fluid h-50 object-fit-cover card-img-top"
                  alt="..."
                />
                  <div className="card-body text-center">
                    <p className="card-text">
                      {item.productName}
                    </p>
                    <h3>${item.productPrice}</h3>
                    <h5>{item.discountPrice}</h5>
                    <p>Quantity: {item.productQuantity}</p>
                    <Link onClick={() => removeFromCart(item._id)} className="btn btn-secondary">Remove From Cart</Link>
                  </div>
                </div>
                <div className="card p-4">
                    <h5>PRICE DETAILS</h5>
                    <hr />
                    <p>Price: ({totalPrice.toFixed(2)})</p>
                    <p>Discount Price: -{item.discountPrice}</p>
                    <hr />
                    <h3><b>TOTAL AMOUNT</b>  ${totalPrice.toFixed(2)}</h3>
                    <hr />
                    <p>You will save $1000 on this order</p>
                    <Link className="btn btn-primary">PLACE ORDER</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart