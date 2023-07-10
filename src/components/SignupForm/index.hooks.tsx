import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "Il nome deve avere almeno 3 caratteri")
    .max(50, "Massimo 50 chars")
    .required("Campo richiesto"),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  privacyAccepted: yup
    .bool()
    .oneOf([true], "Please accept privacy conditions")
    .required(),
  birthDate: yup.date().required(),
});

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  privacyAccepted: boolean;
  birthDate: Date;
};

export const useSignupForm = () => {
  const formData = useForm<SignupFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "Default",
      email: "",
      password: "",
      privacyAccepted: true,
      birthDate: new Date(),
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log("SUCCESS!!!", data);
      }),
    [handleSubmit],
  );

  console.log({ errors });

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
