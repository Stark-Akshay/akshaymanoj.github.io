import React from "react";

const Experience = () => {
  return (
    <section>
      <div className="p-10">
        <p className="text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]">
          EXPERIENCE
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <ul className="steps steps-vertical h-[30rem]">
          <li data-content="" className="step step-primary">
            <div className="flex flex-col justify-start items-start">
              <p className="min-[320px]:text-md md:text-xl">
                Front End Developer
              </p>
              <p className="min-[320px]:text-sm md:text-md">
                Tata Consultancy Services
              </p>
              <p className="min-[320px]:text-sm md:text-md">2020-2022</p>
            </div>
          </li>
          <li data-content="" className="step step-primary ">
            <div className="flex flex-col justify-start items-start">
              <p className="min-[320px]:text-md md:text-xl">Web Developer</p>
              <p className="min-[320px]:text-sm md:text-md">Entrust Shipping</p>
              <p className="min-[320px]:text-sm md:text-md">2022-present</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
