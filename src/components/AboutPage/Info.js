import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
              alt="about"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam aut, sunt quasi quia officia consequuntur a error
              architecto rerum dignissimos cumque reprehenderit delectus
              possimus molestiae laborum. Exercitationem aspernatur minus quos.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam aut, sunt quasi quia officia consequuntur a error
              architecto rerum dignissimos cumque reprehenderit delectus
              possimus molestiae laborum. Exercitationem aspernatur minus quos.
            </p>
            <button
              style={{ marginTop: "2rem" }}
              className="main-link"
              type="button"
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
