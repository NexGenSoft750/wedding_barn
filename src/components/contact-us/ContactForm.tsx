import styles from './ContactForm.module.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactForm__heading}>
        Get in touch to request an information pack
      </h2>

      <Form className={styles.contactForm__form}>
        <FloatingLabel controlId="firstName" label="First Name*" className="mb-3">
          <Form.Control type="text" placeholder="First Name" />
        </FloatingLabel>

        <FloatingLabel controlId="lastName" label="Last Name*" className="mb-3">
          <Form.Control type="text" placeholder="Last Name" />
        </FloatingLabel>

        <FloatingLabel controlId="email" label="Email*" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="phone" label="Phone" className="mb-3">
          <Form.Control type="text" placeholder="Phone" />
        </FloatingLabel>

        <FloatingLabel controlId="event" label="What is your event?" className="mb-3">
          <Form.Control type="text" placeholder="Event" />
        </FloatingLabel>

        <FloatingLabel controlId="date" label="Do you have a date in mind?" className="mb-3">
          <Form.Control type="text" placeholder="Date" />
        </FloatingLabel>

        <FloatingLabel controlId="guests" label="How many guests?" className="mb-3">
          <Form.Control type="number" placeholder="Guests" />
        </FloatingLabel>

        <Form.Check
          type="checkbox"
          id="mailingList"
          label="Add me to mailing list (tick this to receive pricing and venue information)"
          className="mb-3"
        />

        <Button type="submit" className={styles.contactForm__submit}>
          — SEND —
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
