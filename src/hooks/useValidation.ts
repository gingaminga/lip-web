import { useCallback, useState } from "react";
import { IDynamicJSON, IValidationData } from "@/types/common";

/**
 * @description form의 validation hook
 */
export default function useValidation(initialValues: IDynamicJSON<IValidationData>) {
  const [validations, setValidations] = useState(initialValues);

  const handleValidation = useCallback((name: string, status: boolean, message: string) => {
    setValidations((currentValidations) => ({
      ...currentValidations,
      [name]: {
        status,
        message,
      },
    }));
  }, []);

  return {
    handleValidation,
    validations,
  };
}
