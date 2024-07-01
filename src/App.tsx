import "./App.css";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, number, string } from "yup";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  interface Form {
    name: string;
    email: string;
    phoneNumber: number;
  }

  const handleSubmit = (values: Form) => {
    console.log(values);
  };
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const steps = ["your info", "select plane", "add-ons", "summary"];

  return (
    <div className="p-4 bg-white rounded-lg flex  max-w-60">
      <div className="relative min-w-17">
        <img src={bgSidebarDesktop} alt="" />
        <div className="p-10 flex flex-col gap-5 absolute top-0 w-full h-80">
          {steps.map((item, index) => {
            const stepIndex = index + 1;
            return (
              <div className="flex gap-5  items-center" key={index}>
                <div
                  className={`border rounded-full text-white w-10 h-10 text-center p-1.5 font-medium ${
                    stepIndex === step ? "stepActive" : ""
                  }`}
                >
                  {stepIndex}
                </div>
                <div>
                  <p className="text-coolGray text-sm">STEP {stepIndex}</p>
                  <h3 className="uppercase font-bold text-white">{item}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-10 pl-28 py-8">
        <div>
          <h2 className="font-bold text-3xl text-marineBlue">Personal Info</h2>
          <p className="font-medium text-coolGray my-1">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {(formik) => {
            return (
              <Form className="flex flex-col gap-5">
                <label className="labelInput label">
                  <span>Name</span>
                  <Field
                    className="input focus:outline-inputActive"
                    name="name"
                    type="text"
                    placeholder="e.g. Stephen King"
                  />
                </label>
                <label className="labelInput label">
                  <span>Email Address</span>
                  <Field
                    className="input focus:outline-inputActive"
                    name="email"
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                </label>
                <label className="labelInput label">
                  <span>Phone Number</span>
                  <Field
                    className="input focus:outline-inputActive"
                    name="phoneNumber"
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                  />
                </label>
                <button
                  onClick={() => setStep(step + 1)}
                  type="submit"
                  className="ms-auto border mt-12 bg-marineBlue text-white px-5 py-3 font-medium rounded-lg hover:bg-buttonHover transition-all duration-300"
                >
                  Next Step
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;
