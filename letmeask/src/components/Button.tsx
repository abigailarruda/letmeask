import { ButtonHTMLAttributes } from "react";

import "../assets/styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return <button className="button" {...props} />;
}
