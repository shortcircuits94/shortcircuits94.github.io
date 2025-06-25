import { Link } from "react-router-dom";
import "../Bio/Bio.scss";
import Rebecca from "../../assets/rebecca-scott.jpg";

const Bio = () => {
  return (
    <section className="bio">
      <section className="bio__content">
        <div className="bio__header">
          <img
            className="bio__headshot"
            src={Rebecca}
            alt="Rebecca Scott Headshot"
          />
          <h3 className="bio__title">Meet Rebecca Scott</h3>
        </div>
        <div className="bio__info">
          <h4>Hi!</h4>
          <p>I'm so happy you're here!</p>
          <br></br>
          <p>
            I'm a software engineer with a background in design and digital
            marketing, bringing a unique blend of creativity and technical
            skill. I focus on building user-centered applications that are
            intuitive, functional, and visually polished. With a sharp design
            eye and a developer’s mindset, I love turning ideas into seamless
            digital experiences.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Bio;
