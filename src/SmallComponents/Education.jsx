import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="title">
      <div className="Info">
        <span>
          <p style={{ fontWeight: "bolder" }}>
            Game Development
            <br />
            2024-present
          </p>
        </span>
        <span>
          <p style={{ textAlign: "justify" }}>
            I earned three badges from Unity: Unity Essential, Junior Programmer
            and creative Core . Additionally, I completed the Complete C# Unity
            Game Developer 3D course (updated to Unity 6). This comprehensive
            training equipped me with advanced skills in C# programming and 3D
            game development, allowing me to create interactive and immersive
            gaming experiences.
          </p>
        </span>
      </div>
      <hr
        style={{
          border: "2px Solid rgb(241, 240, 246)",
          width: "90%",
          borderRadius: "50%",
        }}
      />
      <div className="Info">
        <span>
          <p style={{ fontWeight: "bolder" }}>
            MAKAUT University
            <br />
            2020 - 24
          </p>
        </span>
        <span>
          <p
            style={{
              textAlign: "justify",
            }}>
            I completed my B.Tech in Computer Science from MAKAUT. During my
            studies, I gained a strong foundation in programming, algorithms,
            data structures, and software development.
          </p>
        </span>
      </div>
      <hr
        style={{
          border: "2px Solid rgb(241, 240, 246)",
          width: "90%",
          borderRadius: "50%",
        }}
      />
      <div className="Info">
        <span>
          <p style={{ fontWeight: "bolder" }}>
            Web Development
            <br />
            2023-24
          </p>
        </span>
        <span>
          <p style={{ textAlign: "justify" }}>
            I completed The Web Developer Bootcamp 2024 by Colt Steele on Udemy,
            which spanned 74 hours of in-depth learning. The course covered all
            key aspects of web development, including HTML, CSS, JavaScript,
            Node.js, Express, and more. By April 2024, I gained hands-on
            experience in building dynamic web applications, equipping me with
            essential skills to pursue a career in web development.
          </p>
        </span>
      </div>
      <hr
        style={{
          border: "2px Solid rgb(241, 240, 246)",
          width: "90%",
          borderRadius: "50%",
        }}
      />
      <div className="Info">
        <span>
          <p style={{ fontWeight: "bolder" }}>
            High School
            <br />
            2017-19
          </p>
        </span>
        <span>
          <p style={{ textAlign: "justify" }}>
            I completed my High School from Siliguri Model High School,
            specializing in Physics, Mathematics, Chemistry, and Computer
            Science. This academic foundation equipped me with a deep
            understanding of scientific principles, analytical thinking, and
            computational skills, which helped me pursue and excel in a B.Tech
            in Computer Science.
          </p>
        </span>
      </div>
    </div>
  );
}
