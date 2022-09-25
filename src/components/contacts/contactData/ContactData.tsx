import React from "react"
import  ContactProperty  from "../contactProperty/ContactProperty"

import { Icontact } from "../../../typesDescriptions"

const ContactData: React.FC<{ data: Icontact }> = ({
  data: { name, sur, tel, email },
}) => (
  <div className="contactItem__properties">
    <div className="contactItem__name">
      {name}&nbsp;{sur}
    </div>

    <ContactProperty prop={tel} title="Телефон" />
    <ContactProperty prop={email} title="Email" />
    
  </div>
);

export default ContactData