import React, { useContext } from "react";
import { useHookSelector, useHookDispatch } from "../../redux/hookStore";
import ContextData, { ContextCreateContact } from "../../ContextData";
import ModalForm from "../modalForm/ModalForm";

import {
  IButtonsProps,
  IobjOfString,
  IcontextForCreateContact,
  IInputProps,
  IplaceholdersObj,
  Itooltip,
} from "../../typesDescriptions";

const CreateContact: React.FC<{ title: string }> = ({ title }) => {
  const {
    changeContact: obj,
    changeContact: { name, sur, tel, email },
  } = useHookSelector((state) => state);
  const { acceptButton, cancelButton, handleChangeInput } = useContext(
    ContextCreateContact
  ) as IcontextForCreateContact;

  const buttons: Array<IButtonsProps> = [
    {
      type: "submit",
      name: "accept",
      value: "сохранить",
      tooltip: "Создать контакт",
      clickFunc: (e) => {
        e.preventDefault();
        acceptButton({ name, sur, tel, email });
      },
    },
    {
      type: "button",
      name: "cancel",
      value: "отменить",
      tooltip: "Не создавать контакт",
      clickFunc: (e) => {
        e.preventDefault();
        cancelButton();
      },
    },
  ];

  const titleName: IobjOfString = {
    name: "Имя",
    sur: "Фамилия",
    tel: "Телефон",
    email: "Email",
  };

  const typeName: IobjOfString = {
    name: "text",
    sur: "text",
    tel: "text",
    email: "email",
  };

  const placeholders: IplaceholdersObj = {
    name: "Иван",
    sur: "Иванов",
    tel: "+7 987 654 32 10",
    email: "post@mail.ru",
	};
	
		const tooltip: Itooltip = {
      name: "Введите имя",
      sur: "Введите фамилию",
      tel: "Введите номер телефона без скобок и тире",
      email: "Введите адрес электронной почты",
    };

  const getValue = (key: string): string => {
    let value: string = "";
    if (key === "name") value = obj.name;
    if (key === "sur") value = obj.sur;
    if (key === "tel") value = obj.tel;
    if (key === "email") value = obj.email;

    return value;
  };

	const inputs: IInputProps[] = Object.entries(obj).map(([key, prop]) => {
    return {
      title: titleName[key],
      type: typeName[key],
      name: key,
      value: getValue(key),
      placeholder: placeholders[key],
      tooltip: tooltip[key],
    };
  });

  return (
    <div className="body__cover">
      <ModalForm
        title={title}
        inputs={inputs}
        changeFunc={handleChangeInput}
        buttons={buttons}
      />
    </div>
  );
};

export default CreateContact;
