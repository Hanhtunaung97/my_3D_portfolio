import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { AlertComponents, LoaderComponents } from "../components";
import Fox from "../models/Fox";
import UseAlert from "../hook/UseAlert";
import FooterComponents from "../components/Footer.components";
const ContactPages = () => {
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = UseAlert();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setCurrentAnimation("walk");
  };
  const handleBlur = (e) => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setCurrentAnimation("hit");
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
        showAlert({
          show: true,
          text: "Your message has been sent successfully. Thank you for contacting me!",
          type: "success",
        });
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((e) => {
        setIsSent(false);
        showAlert({
          show: true,
          text: "Oops! Something went wrong. I didn't receive your email.",
          type: "danger",
        });
        setCurrentAnimation("idle");
        console.log(e);
      });
  };
  return (
    <section className=" max-container relative h-full">
      {alert.show && <AlertComponents {...alert} />}
      {/* <AlertComponents text={"Your message has been sent successfully. Thank you for contacting me!"} /> */}
      <div className=" flex flex-col lg:flex-row ">
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
              <label
                htmlFor="message"
                className=" font-semibold text-black-500"
              >
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
        <div className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-auto">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<LoaderComponents />}>
              <directionalLight position={[0, 0, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.4, 0]}
                scale={[0.4, 0.4, 0.4]}
                rotation={[12.6, -0.5, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <FooterComponents />
    </section>
  );
};

export default ContactPages;
