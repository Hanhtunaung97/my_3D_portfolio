import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactPages = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {};
  const handleBlur = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Han Htunaung",
          from_email: form.email,
          to_email: "littlehanhtunaung97@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSent(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => {
        setIsSent(false);
        console.log(e);
      });
  };
  return (
    <section className="flex flex-col lg:flex-row max-container relative">
      <div className="flex flex-col flex-1  min-w-[50%]">
        <h1 className=" head-text">Get In Touch</h1>
        <form
          className="flex flex-col gap-7 mt-14 w-full "
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className=" font-semibold text-black-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="input disabled:opacity-60 disabled:pointer-events-none"
              placeholder="Han"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isSent}
            />
          </div>
          <div>
            <label htmlFor="email" className=" font-semibold text-black-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="input disabled:opacity-60 disabled:pointer-events-none"
              placeholder="Han123@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isSent}
            />
          </div>
          <div>
            <label htmlFor="message" className=" font-semibold text-black-500">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              id="message"
              required
              className="textarea disabled:opacity-60 disabled:pointer-events-none"
              placeholder="Please let me know if you have any questions or how I can help."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isSent}
            />
          </div>
          <button
            disabled={isSent}
            className="btn disabled:opacity-60 disabled:pointer-events-none"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isSent ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPages;
