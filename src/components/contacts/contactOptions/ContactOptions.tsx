import React, {useContext} from "react"
import { ContextContactOptions} from "../../../ContextData"
import ContactEdit from "../contactEdit/ContactEdit"

import { IcontextForContactOptions } from "../../../typesDescriptions"

const ContactOptions: React.FC< {id: number}> = ({id} ) => {

	const { editButton, copyButton, removeButton } = useContext(
    ContextContactOptions
  ) as IcontextForContactOptions;

	return (
    <div className="contactItem__optionsContainer">
      <ContactEdit
        clickFunc={(e) => editButton(id)}
        title="Редактировать"
       	tooltip="Внесити изменения"
      />
      <ContactEdit
        clickFunc={(e) => copyButton(id)}
        title="Копировать"
       	tooltip="Скопировать данные контакта"
      />
      <ContactEdit
        clickFunc={(e) => removeButton(id)}
        title="Удалить"
       	tooltip="Удалить контакт из списка"
      />
    </div>
  );
}

export default ContactOptions

