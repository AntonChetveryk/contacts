import React, { useState } from "react";
import Female from "../img/female.png";
import Male from "../img/male.png";

export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="mt-4 contact-container" onClick={() => setIsHide(!isHide)}>
      {contact.gender ? (
        <img
          src={contact.gender === "female" ? Female : Male}
          width="40px"
          alt="img"
          className="mb-2"
        />
      ) : null}

      <p className="contact-item">First name: {contact.firstName} </p>
      {isHide ? null : (
        <>
          <p className="contact-item">Last name: {contact.lastName}</p>
          <p className="contact-item">Number: {contact.phone}</p>
          {contact.gender ? (
            <p className="contact-item">Gender: {contact.gender}</p>
          ) : null}
        </>
      )}
    </div>
  );
}
