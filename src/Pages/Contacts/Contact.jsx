import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const templateParams = {
      from_name: name,
      message: message,
      to_name: "Rahat",
      from_email: email,
    };

    emailjs
      .send(
        "service_otthwry", // Replace with your EmailJS Service ID
        "template_1a1lfe2", // Replace with your EmailJS Template ID
        templateParams,
        "p4icU04YS5gViALLv" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="card w-full max-w-3xl bg-gray-800 bg-opacity-30 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-orange-500">
            Contact Me
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Feel free to reach out to me by filling out the form below or using
            the contact information provided.
          </p>

          {/* Form */}
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Name</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="input input-bordered bg-transparent border focus:border-orange-500 border-white text-white"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="input input-bordered bg-transparent border focus:border-orange-500 border-white text-white"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Message</span>
              </label>
              <textarea
                ref={messageRef}
                name="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered border focus:border-orange-500 border-white bg-transparent text-white"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn btn-primary bg-orange-500 hover:bg-orange-400"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Additional Contact Information */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              More Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/01575231473"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 01575231473
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-300">Phone: 01575231473</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <a
                  href="mailto:alaminislamrahat@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  Email: alaminislamrahat@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
