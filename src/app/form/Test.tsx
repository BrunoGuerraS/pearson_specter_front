"use client";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type FormValue = {
  email: string;
  password: string;
};
const defaultValuesFomr: FormValue = {
  email: "",
  password: "",
};

export default function TestForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValue>({ defaultValues: defaultValuesFomr });

  const onSubmit = (data: FormValue) => {
    reset();
    console.log(data);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="email"
            type="email"
            {...register("email",{required:"email is required"})}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="password"
            type="password"
            {...register("password",{required:"password is required"})}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}
