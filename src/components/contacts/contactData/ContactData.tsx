import React from "react";
import ContactProperty from "../contactProperty/ContactProperty";
import ContactName from "../contactName/ContactName";
import { Icontact } from "../../../typesDescriptions";

const ContactData: React.FC<{ data: Icontact }> = ({
  data: { name, sur, tel, email },
}) => (
  <div className="contactItem__properties">
    <ContactName name={name} sur={sur} />
    <ContactProperty prop={tel} title="Телефон" />
    <ContactProperty prop={email} title="Email" />
  </div>
);

export default ContactData;
