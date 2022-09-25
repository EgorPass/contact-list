import React from "react"
import ContactOptions from ".././contactOptions/ContactOptions"
import ContactData from ".././contactData/ContactData"

import { Icontact } from "../../../typesDescriptions"

const Contact: React.FC<{ data: Icontact }> = ({ data }) => (
  <div className="contactItem">
    <ContactData data={data} />
    <ContactOptions id={data.id as number} />
  </div>
);


export default Contact


