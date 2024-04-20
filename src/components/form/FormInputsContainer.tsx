import { ReactNode } from "react";

interface FormInputsContainerProps {
  children: ReactNode;
}

const FormInputsContainer: React.FC<FormInputsContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-4 mb-4">
      {children}
    </div>
  );
};

export default FormInputsContainer;
