import { TextInput } from "@mantine/core";
import React from "react";


interface FormTextInputProps {
  placeholder: string;
}

const FormTextInput: React.FC<FormTextInputProps> = ({ placeholder })  => {
  return (
    <TextInput
      classNames={{
        input: "input-styles",
      }}
      className="flex-1"
      placeholder={placeholder}
    />
  );
}

export default FormTextInput;
