import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { Heading } from "./components/heading/Heading";
import { StyledButton } from "./components/styledButton/StyledButton";
import { StyledForm } from "./components/styledForm/StyledForm";
import { StyledTextField } from "./components/styledTextField/StyledTextField";
import FormUtils from "./utils/FormUtils";

export default function Form() {
  const [form, setForm] = useState<FormUtils.IForm>(FormUtils.initialValues);
  const [errors, setErrors] = useState<FormUtils.IError>();
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const errors = FormUtils.validateForm(form);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    setErrors(undefined);
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
          />
        ))}
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
}
