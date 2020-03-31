import React, { Component } from "react";
import { contacts } from "../data/ContactsList";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts,
    search: "",
    male: true,
    female: true,
    unknown: true
  };

  filterByGender = () => {};

  handleSearchChange = e => {
    e.persist();
    this.setState(state => ({
      search: e.target.value
    }));
  };

  handleGender = e => {
    e.persist();
    this.setState(state => ({
      [e.target.name]: e.target.checked
    }));
  };

  render() {
    const { search, female, male, unknown } = this.state;

    return (
      <div className="container">
        <div className="device-container">
          <form className="pt-4">
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
              className="input"
            />
            {/* <button className="search">search</button> */}
            <div className="checkbox-container mt-2">
              <label>
                <input
                  type="checkbox"
                  checked={female}
                  name="female"
                  onChange={this.handleGender}
                />
                female
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={male}
                  name="male"
                  onChange={this.handleGender}
                />
                male
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={unknown}
                  name="unknown"
                  onChange={this.handleGender}
                />
                unknown
              </label>
            </div>
          </form>

          {contacts
            .filter(
              contact =>
                (!search ||
                  contact.lastName.toLowerCase().includes(search) ||
                  contact.firstName.toLowerCase().includes(search) ||
                  contact.phone.includes(search)) &&
                (contact.gender
                  ? (female && contact.gender === "female") ||
                    (male && contact.gender === "male")
                  : unknown)
            )
            .map(contact => (
              <Contact key={contact.lastName} contact={contact} />
            ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
