import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./css/ContactForm.module.css";

const numberValidateRegExp = /^[\d+\-()]{1,10}$/g;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .required("Please enter a name"),
  number: Yup.string()
    .min(3, "Phone number must be at least 3 characters long")
    .matches(numberValidateRegExp, "Please enter a valid phone number")
    .required("Please enter a phone number"),
});

const ContactForm = ({ createContact }) => {
  const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };
    createContact(contact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div className={styles.wrapper}>
        <Form className={styles.form}>
          <label className={styles.field}>
            <span className={styles.tag}>Name</span>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </label>
          <label className={styles.field}>
            <span className={styles.tag}>Number</span>
            <Field className={styles.input} type="tel" name="number" maxLength="10" />
            <ErrorMessage className={styles.error} name="number" component="span" />
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;