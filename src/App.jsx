import { useState } from "react";
import "./App.css";
import Contacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));

  const createRandomContact = () => {
    const remainingContacts = Contacts.slice(6);
    const randomIndex = Math.floor(
      Math.random() * remainingContacts.length - 1
    );
    const randomContact = remainingContacts[randomIndex];

    setContacts([...contacts, randomContact]);
  };

  const sortByName = () => {
    const sortName = contacts.toSorted((a, b) => {
      //or [...contacts].sort
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortName);
  };

  const sortByPopularity = () => {
    const sortPopularity = contacts.toSorted((a, b) => {
      //or [...contacts].sort
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortPopularity);
  };
  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((currentContact) => {
      return currentContact.id !== id;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => createRandomContact()}>Add Random Contact </button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>

      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    style={{ height: "100px" }}
                    className="images"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
