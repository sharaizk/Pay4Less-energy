import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const ContactForm = (props) => {
  const form = useRef(null);
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("*What is your Full Name?"),
    email: Yup.string()
      .email("*Email must be a valid email address")
      .required("*What's your email?"),
    telephone: Yup.string()
      .max(11)
      .required("*Please enter your telephone number"),
    subject: Yup.string().required("*Subject is required"),
    message: Yup.string().required("*What's your message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      const loadingToast = toast.loading("Sending your message");
      try {
        await emailjs.sendForm(
          "service_5e2ni8i",
          "template_ab3qic3",
          form.current,
          "XwbDQm3Lekkjh80AQ"
        );
        toast.update(loadingToast, {
          render: "Thank You, you will hear from us soon.",
          type: "success",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
        resetForm();
      } catch (error) {
        toast.update(loadingToast, {
          render: "Couldn't send your message, Please wait till we fix it.",
          type: "error",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <div className="ras-contact-form">
      <Fade right>
        <h2>Contact Us</h2>
        <FormikProvider value={formik}>
          <Form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name"
                {...getFieldProps("name")}
              />
              {touched.name && errors.name && (
                <p className="form-error">{errors.name}</p>
              )}
            </div>

            <div className="form-group">
              <label for="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <p className="form-error">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <label for="telephone" className="sr-only">
                Telephone
              </label>
              <input
                type="number"
                name="telephone"
                className="form-control"
                id="telephone"
                placeholder="Telephone"
                {...getFieldProps("telephone")}
              />
              {touched.telephone && errors.telephone && (
                <p className="form-error">{errors.telephone}</p>
              )}
            </div>
            <div className="form-group">
              <label for="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Subject"
                {...getFieldProps("subject")}
              />
              {touched.subject && errors.subject && (
                <p className="form-error">{errors.subject}</p>
              )}
            </div>
            <div className="form-group">
              <label for="message" className="sr-only">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                col="50"
                placeholder="Message"
                {...getFieldProps("message")}
              ></textarea>
              {touched.message && errors.message && (
                <p className="form-error">{errors.message}</p>
              )}
            </div>

            <div className="form-group mb-0">
              <button className="btn btn-primary btn-large">
                Send Message
              </button>
            </div>
          </Form>
        </FormikProvider>
      </Fade>
    </div>
  );
};

export default ContactForm;
