import useFetch from "../useFetch.jsx";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UserProfile = () => {
  const [formSubmitted, setFormSubmitted] = useState('');
  const [deletedMessage, setDeletedMessage] = useState('')
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  
  const { data, loading, error } = useFetch("http://localhost:3001/api/user");
  console.log(data)
  const { data: getApiAddress } = useFetch('http://localhost:3001/api/address');
  
  const userAddress = getApiAddress?.data || [];

  const updateUserAddress = async (userAddressId) => {
    try {
      const res = await fetch(`http://localhost:3001/api/address/${userAddressId}`, {
        method: "UPDATE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          location,
        }),
      });
      const data = await res.json();
      console.log('Update Address: ', data)
      setFormSubmitted('');
      window.location.reload()
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  const deletedUserAddress = async (userAddressId) => {
    try {
      const res = await fetch(`http://localhost:3001/api/address/${userAddressId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log("Deleted:", data);
      setDeletedMessage('You are deleted this address')
      window.location.reload()
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };
  

  if (loading) return (
    <>
      <Header />
      <main className="container p-5">
        <p>Loading...</p>
      </main>
      <Footer />
    </>
  );

  if (error) return (
    <>
      <Header />
      <main className="container p-5">
        <p>{error.message}</p>
      </main>
      <Footer />
    </>
  );

  const user = data?.data?.[0];
  
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          location,
        }),
      });


      const responseData = await res.json();
      console.log("Address saved: ", responseData);
      setFormSubmitted(true);
      window.location.reload()
      
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="container p-5">
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="address">Change Address: </label>
            <br />
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Change Location: </label>
            <br />
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <br />
          <button type="submit">Save Address</button>
        </form>
        
        {formSubmitted && (
          <div className="success-message">
            <p>Address updated successfully!</p>
          </div>
        )}

        {deletedMessage && (
          <div className="success-message">
            <p>You Address is Deleted</p>
          </div>
        )}
        
        <hr />
        
        {user && (
          <>
            <h3>User Profile</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.number}</p>
          </>
        )}

        {userAddress.map((userAddr) => (
          <div key={userAddr._id}>
            <p>{userAddr.address}</p>
            <p>{userAddr.location}</p>
            <div className="d-flex gap-3">
              <button onClick={() => deletedUserAddress(userAddr._id)}>Delete</button>
              <button onClick={() => updateUserAddress(userAddr._id)}>Update</button> 
            </div> 
          </div> 
        ))}
      </main>
      <Footer />
    </>
  );
};

export default UserProfile;