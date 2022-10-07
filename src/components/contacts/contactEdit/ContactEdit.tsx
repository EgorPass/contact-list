import React from "react"
import { IclickFunc } from "../../../typesDescriptions"

const ContactEdit: React.FC<{
  title: string,
  clickFunc: IclickFunc,
  tooltip?: string,
}> = ({ title, clickFunc, tooltip = "" }) => (
  <span
    className="contactItem__option"
    onClick={clickFunc}
    data-tooltip={tooltip}>
    {" "}
    {title}{" "}
  </span>
);

export default ContactEdit