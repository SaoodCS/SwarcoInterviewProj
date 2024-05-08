export namespace FormUtils {
  export interface IForm {
    name: string;
    age: number | "";
    city: string;
    address: string;
    postcode: string;
  }

  export type IError = { [key in keyof IForm]?: string };

  export const initialValues: IForm = {
    name: "",
    age: "",
    city: "",
    address: "",
    postcode: "",
  };

  export const inputs: {
    name: keyof IForm;
    label: string;
    type: string;
  }[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
    },
    {
      name: "postcode",
      label: "Postcode",
      type: "text",
    },
  ];

  export function validateForm(form: IForm): IError {
    const errors: IError = {};
    for (let i = 0; i < inputs.length; i++) {
      const { name } = inputs[i];
      if (!form[name]) {
        errors[name] = "Required";
      }
    }
    return errors;
  }
}

export default FormUtils;
