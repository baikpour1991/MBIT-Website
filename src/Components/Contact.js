/* eslint-disable no-useless-escape */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css";
import { useForm, Controller } from "react-hook-form";

export const Contact = () => {
  const form = useRef();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_h5ltpba",
        "template_9unv4kc",
        form.current,
        "4Cn6yvkT_2U7VTBpl"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.user_phone.value = "";
          form.current.user_website.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={classes.form} id="contact">
      <article className={classes.contactInfo}>
        <h4>LET'S BEGIN</h4>
        <h2>Talk to Experts</h2>
        <ul className={classes.contactsContainer}>
          <li className={classes.contacts}>
            <h4>Email:</h4>
            <h4 className={classes.thinner}>baikpour1991@gmail.com</h4>
          </li>
          <li className={classes.contacts}>
            <h4>Phone:</h4>
            <h4 className={classes.thinner}>+36704061421</h4>
          </li>
          <li className={classes.contacts}>
            <h4>Address:</h4>
            <h4 className={classes.thinner}>
              Umm Hurair 2 - Dubai - United Arab Emirates
            </h4>
          </li>
        </ul>
      </article>
      <article className={classes.contactForm}>
        <h5>GET IN TOUCH</h5>
        <h2>Fill The Form Below</h2>

        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className={classes.sendingForm}>
          <Controller
            name="user_name"
            control={control}
            defaultValue=""
            rules={{ required: "Please input your name" }}
            render={({ field }) => (
              <div className={classes.formInputWrapper}>
                <input
                  className={classes.formInput}
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  {...field}
                />
                {errors.user_name && (
                  <span className={classes.errors}>{errors.user_name.message}</span>
                )}
              </div>
            )}
          />

          <Controller
            name="user_email"
            control={control}
            defaultValue=""
            rules={{
              required: "Please type your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please input a valid email address",
              },
            }}
            render={({ field }) => (
              <div className={classes.formInputWrapper}>
                <input
                  className={classes.formInput}
                  type="text"
                  name="user_email"
                  placeholder="E-Mail"
                  {...field}
                />
                {errors.user_email && (
                  <span className={classes.errors}>{errors.user_email.message}</span>
                )}
              </div>
            )}
          />

          <Controller
            name="user_phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Please input your phone number",
              pattern: {
                value: /^\+[1-9]\d{1,14}$/,
                message: "Please input a valid phone number starts with +",
              },
            }}
            render={({ field }) => (
              <div className={classes.formInputWrapper}>
                <input
                  className={classes.formInput}
                  type="text"
                  name="user_phone"
                  placeholder="Phone Number"
                  {...field}
                />

                {errors.user_phone && (
                  <span className={classes.errors}>{errors.user_phone.message}</span>
                )}
              </div>
            )}
          />

          <Controller
            name="user_website"
            control={control}
            defaultValue=""
            rules={{
              pattern: {
                value:
                  /^(|http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
                message: "Please input a valid website URL",
              },
            }}
            render={({ field }) => (
              <div className={classes.formInputWrapper}>
                <input
                  className={classes.formInput}
                  type="text"
                  name="user_website"
                  placeholder="Your Website"
                  {...field}
                />
                {errors.user_website && (
                  <span className={classes.errors}>
                    {errors.user_website.message}
                  </span>
                )}
              </div>
            )}
          />

          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: "Please input your message",
              minLength: {
                value: 15,
                message: "Message must be at least 15 characters long",
              },
            }}
            render={({ field }) => (
              <div className={classes.textAreaWrapper}>
                <textarea
                  className={`${classes.formInput} ${classes.textArea}`}
                  name="message"
                  placeholder="Your Message Here"
                  {...field}
                />
                {errors.message && (
                  <span className={classes.errors}>{errors.message.message}</span>
                )}
              </div>
            )}
          />

          <input
            className={`${classes.formInput} ${classes.submitBut}`}
            type="submit"
            value="Submit Now"
          />
        </form>
      </article>
    </section>
  );
};

export default Contact;
