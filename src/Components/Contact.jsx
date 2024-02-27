import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
export default function Contact() {
  return (
    <>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <CiLocationOn />
          </div>
          <h3 className="fs-2 text-body-emphasis">
            {" "}
            <strong>Address</strong>{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            delectus assumenda accusamus, quis dolorum cupiditate perspiciatis,
            eaque tenetur aut molestias voluptas quaerat, ut officia
            exercitationem libero! Ab id perspiciatis omnis.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <BsTelephone />
          </div>
          <h3 className="fs-2 text-body-emphasis">
            {" "}
            <strong>Phone</strong>{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            recusandae excepturi? Ab esse ex animi aut nulla consequatur amet
            sint eius quibusdam. Porro illum cum dicta corporis? Eum, reiciendis
            quasi?
          </p>
          <a href="#" className="icon-link">
            +91 3852711812
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <MdOutlineEmail />
          </div>
          <h3 className="fs-2 text-body-emphasis">
            <strong>Mail</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            nisi iste veniam, dignissimos iusto inventore perferendis. Earum
            exercitationem ut quia, optio error omnis dicta, quod beatae, nisi
            fugiat numquam mollitia.
          </p>
          <a href="#" className="icon-link">
            abc@gmail.com
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
