import React, {useState, useRef} from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const AdvancedForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Example: Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);

      // Simulate an asynchronous form submission (API call)
      try {
        // Simulate a delay (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Send the email using emailjs
        const result = await emailjs.sendForm(
          "service_cvzkrw3",
          "template_g7xa2hl",
          form.current,
          "JCPeUh32c-SWOxhHv"
        );

        console.log(result.text);

        // Display success popup
        setIsSuccessPopupVisible(true);

        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle submission error (e.g., display an error message)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeSuccessPopup = () => {
    setIsSuccessPopupVisible(false);
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          rows={7}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        {/* Display error messages */}
        {formErrors.email && (
          <div style={{color: "red"}}>{formErrors.email}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Success Popup */}
      {isSuccessPopupVisible && (
        <div className="success-popup">
          <p>successfully Submitted!</p>
          <h4 className="popup__icon">&#128077;</h4>
          <button onClick={closeSuccessPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdvancedForm;
