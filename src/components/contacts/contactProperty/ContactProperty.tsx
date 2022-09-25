import React from "react"
import { IContactProperty } from "../../../typesDescriptions"


const ContactProperty: React.FC<IContactProperty> = ({ title, prop }) => (
  <div className="contactItem__data contactData">
    <span className="contactData__title">{title}:</span>
    <span className="contactData__value">{prop}</span>
  </div>
);

export default ContactProperty