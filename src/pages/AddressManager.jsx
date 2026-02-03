import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AddressManager = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState({
    id: null,
    name: "",
    address: "",
    city: "",
    pincode: "",
  });

  return (
    <>
      <Header />
      <main className="container py-4">
        <div
          className="d-flex justify-content-center align-items-center bg-danger "
          style={{ width: "400px", height: "400px" }}
        ></div>
      </main>
      <Footer />
    </>
  );
};

export default AddressManager;
