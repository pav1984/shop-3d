import React from "react";
import Title from "../Title";
const Contact = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important!!!"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Hello"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
