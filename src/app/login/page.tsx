"use client";
import { useAuthContext } from "@/context/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import FormSchema from "./schema/FormSchema";

interface initialValuesProps {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const { setUserInfo, userInfo } = useAuthContext();
  const router = useRouter();

  const handleFormikSubmit = (input: initialValuesProps) => {
    setUserInfo({ email: input.email });
    router.push("/");
    // setTimeout(() => {
    // }, 3000);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div>
        <h1>Sign in , {userInfo?.email}</h1>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormikSubmit}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-2 w-fit p-3 bg-[#f6f8fa] border border-solid border-black rounded my-9">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                // placeholder="Digite o E-mail"
                className="outline-[#0969da]"
              ></Field>
              <ErrorMessage component="span" name="email" className="" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                // placeholder="Password"
                className="outline-[#0969da]"
              ></Field>
              <ErrorMessage component="span" name="password" className="" />
            </div>

            <button type="submit" className="bg-[#30a147] rounded text-white">
              Sing in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
