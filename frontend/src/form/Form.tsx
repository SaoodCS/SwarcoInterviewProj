import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataProvider/DataContext";
import APICaller from "../utils/ApiCaller";
import { Heading } from "./components/heading/Heading";
import { StyledButton } from "./components/styledButton/StyledButton";
import { StyledForm } from "./components/styledForm/StyledForm";
import { StyledTextField } from "./components/styledTextField/StyledTextField";
import FormUtils from "./utils/FormUtils";

export default function Form() {
  const { users, fetchAndSetUsers, itemToEdit, setItemToEdit } =
    useContext(DataContext);
  const [form, setForm] = useState<FormUtils.IForm>(
    itemToEdit ?? FormUtils.initialValues
  );
  const [errors, setErrors] = useState<FormUtils.IError>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (itemToEdit) setForm(itemToEdit);
    else setForm({ ...form, id: FormUtils.generateId(users) });
  }, [users, itemToEdit]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const errors = FormUtils.validateForm(form);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    setErrors(undefined);
    setIsLoading(true);
    if (!itemToEdit) await APICaller.setUser(form);
    else await APICaller.updateUser(form);
    await fetchAndSetUsers();
    setForm(FormUtils.initialValues);
    setItemToEdit(undefined);
    setIsLoading(false);
  }

  return (
    <>
      <Heading variant="h3">
        &nbsp;Form&nbsp;
        {isLoading && <CircularProgress />}
      </Heading>
      <StyledForm onSubmit={handleSubmit}>
        {FormUtils.inputs.map((input) => (
          <StyledTextField
            key={input.name}
            type={input.type}
            variant="outlined"
            label={input.label}
            onChange={handleChange}
            name={input.name}
            value={form[input.name]}
            error={!!errors?.[input.name]}
            helperText={errors?.[input.name]}
            disabled={input.name === "id"}
          />
        ))}
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
}
