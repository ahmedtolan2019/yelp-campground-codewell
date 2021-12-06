import React from "react";
import { useForm } from "react-hook-form";

export { FormInput } from "./FormInput";
export { FormTextArea } from "./FormTextArea";
export { FormFileInput } from "./FormFileInput";

let FormField = ["FormInput", "FormTextArea", "FormFileInput"];
export const Form = ({ children, onSubmitFormData }) => {
  const { register, handleSubmit } = useForm();

  const RegisterFields = (child) => {
    //return the name of function of child
    if (FormField.includes(child.type.name)) {
      return React.cloneElement(child, {
        key: child.props.name,
        register: () => ({ ...register(child.props.name, child.props.rules) }),
      });
    } else {
      return React.cloneElement(child, {});
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitFormData(data);
        console.log("data", data);
      })}
      className=" grid grid-col-1 place-items-center space-y-4  w-full"
    >
      {React.Children.map(children, (child) => RegisterFields(child))}
    </form>
  );
};
