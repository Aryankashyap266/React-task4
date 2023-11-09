import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.users); // Update to set the entire data array
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="fixed-heading">DUMMY DATA</div>
      <table>
        <thead>
       
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair Color</th>
            <th>Hair Type</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Address</th>
            <th>City</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Postal Code</th>
            <th>State</th>
            <th>Mac Address</th>
            <th>University</th>
            <th>Card Expire</th>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Currency</th>
            <th>IBAN</th>
            <th>Company Address</th>
            <th>Company City</th>
            <th>Company Latitude</th>
            <th>Company Longitude</th>
            <th>Company Postal Code</th>
            <th>Company State</th>
            <th>Department</th>
            <th>Company Name</th>
            <th>Title</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="User" height={100} />
              </td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.maidenName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.birthDate}</td>
              
              <td>{item.bloodGroup}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
              <td>{item.eyeColor}</td>
              <td>{item.hair.color}</td>
              <td>{item.hair.type}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.address.address}</td>
              <td>{item.address.city}</td>
              <td>{item.address.coordinates.lat}</td>
              <td>{item.address.coordinates.lng}</td>
              <td>{item.address.postalCode}</td>
              <td>{item.address.state}</td>
              <td>{item.macAddress}</td>
              <td>{item.university}</td>
              <td>{item.bank.cardExpire}</td>
              <td>{item.bank.cardNumber}</td>
              <td>{item.bank.cardType}</td>
              <td>{item.bank.currency}</td>
              <td>{item.bank.iban}</td>
              <td>{item.company.address.address}</td>
              <td>{item.company.address.city}</td>
              <td>{item.company.address.coordinates.lat}</td>
              <td>{item.company.address.coordinates.lng}</td>
              <td>{item.company.address.postalCode}</td>
              <td>{item.company.address.state}</td>
              <td>{item.company.department}</td>
              <td>{item.company.name}</td>
              <td>{item.company.title}</td>
              <td>{item.ein}</td>
              <td>{item.ssn}</td>
              <td>{item.userAgent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
