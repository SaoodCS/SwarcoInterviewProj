export namespace FormUtils {
  export interface IForm {
    id: number;
    name: string;
    age: number | "";
    city: string;
    address: string;
    postcode: string;
  }

  export type IError = { [key in keyof IForm]?: string };

  export const initialValues: IForm = {
    id: 0,
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
      name: "id",
      label: "ID",
      type: "number",
    },
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

  export function generateId(users: IForm[]): number {
    const ids = users.map((user) => user.id);
    if (!ids.length) return 1;
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}

export default FormUtils;
