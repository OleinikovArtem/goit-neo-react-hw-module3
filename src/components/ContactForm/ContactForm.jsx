import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import styles from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import clsx from 'clsx'

const phoneRegExp = /^\d{3,50}$/


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  number: Yup.string()
    .required('Number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot exceed 50 characters'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ handleCreateContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    handleCreateContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={clsx(styles.form, 'border')}>
          <label className="controller">
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label className="controller">
            Number
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;