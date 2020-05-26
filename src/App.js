import React, {useState, useEffect} from "react"
import "./styles.css"
// usesState is a  hook that can be used for settting state in a functional component
// useEffect is similar to componentDidMount and componentDidUpdate:
//App.js, declared as a functional component
const App = () => {
  const [contacts, setContacts] = useState([]);
  //creating a state to hold and set an array of contacts


  useEffect(() => {
    // code will run once regardless of state change when in the useEffect function
    fetch("https://randomuser.me/api/?results=3")//fetch api
    .then(response => response.json())//set resonse to json
    .then(data => {
      console.log(data);// logging api data to console
      setContacts(data.results)//using state to pass data.results to contact prop
    });
  },[]); //<-- notice the empty array

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last} 
          email={contact.email}
          age={contact.dob.age}
          key={contact.email}
        />//calling contactCard and using the state of contact to set values
      ))}
    </>
  )
}
// ContactCard component
const ContactCard = (props) => {//creating state for age
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  )
}

export default App
