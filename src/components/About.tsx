import firstTripImg from "../assets/images/first-trip.jpg";
import ourStartImg from "../assets/images/our-start.jpg";

const About: React.FC = () => {
  return (
    <div id="our-beginning" className="page-section">
      <div className="wrapper">
        <h2 className="headline headline--centered headline--light headline--b-margin-small">
          The first trip we planned<strong> was our own.</strong>
        </h2>
        <h3 className="headline headline--centered headline--orange headline--small headline--narrow headline--light headline--b-margin-large">
          Ever since, we&rsquo;ve been working to make travel
          <strong> better for everyone.</strong>
        </h3>
        <div className="wrapper wrapper--medium">
          <img src={firstTripImg} alt="Couple walking down a street." />
        </div>
        <div className="row">
          <div className="row__4">
            <img src={ourStartImg} alt="Our founder, Jane Doe" />
          </div>
          <div className="row__8">
            <h2 className="headline">
              Here&rsquo;s how we got started&hellip;
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, <a href="#">quis nostrud exercitation</a>{" "}
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum velit esse cillum{" "}
              <strong>dolore eu fugiat.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
