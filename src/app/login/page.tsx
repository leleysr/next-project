"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";
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
  const { setUserInfo } = useAuthContext();
  const router = useRouter();

  const handleFormikSubmit = (input: initialValuesProps) => {
    if (input.email && input.password) {
      setUserInfo({ email: input.email, password: input.password });
      router.push("/");
    }
  };

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-start p-4">
      <div>
        <h1 className="text-xl font-semibold">Sign in form</h1>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormikSubmit}
        validationSchema={FormSchema}
      >
        {({ isValid, dirty }) => (
          <Form
            className="flex flex-col gap-2 w-full max-w-lg p-3 bg-[#f6f8fa] border border-solid border-black rounded my-3"
            name="login-form"
            data-testid="login-form"
          >
            <div className="flex flex-col relative mb-5">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                className="outline-[#0969da]"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className="absolute top-full left-0 text-sm text-[#c70039]"
                data-testid="email-message-error"
              />
            </div>

            <div className="flex flex-col relative mb-5">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="outline-[#0969da]"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className="absolute top-full left-0 text-sm text-[#c70039]"
                data-testid="password-message-error"
              />
            </div>

            <button
              type="submit"
              disabled={!(isValid && dirty)}
              className="h-8 bg-[#2f2f6b] rounded text-white disabled:bg-[#cccccc] disabled:text-[#666666]"
            >
              Sing in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
