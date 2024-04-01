import { ourStartProps, firstTripProps } from "../images";
import Image from "./UI/Image";
import Row from "./UI/Row";
import Source from "./UI/Source";
import Wrapper from "./UI/Wrapper";

const OurBeginning: React.FC = () => {
  return (
    <div id="our-beginning" className="page-section">
      <Wrapper>
        <h2 className="headline headline--centered headline--light headline--b-margin-small">
          The first trip we planned<strong> was our own.</strong>
        </h2>

        <h3 className="headline headline--centered headline--orange headline--small headline--narrow headline--light headline--b-margin-large">
          Ever since, we&rsquo;ve been working to make travel
          <strong> better for everyone.</strong>
        </h3>

        <Wrapper className="wrapper--medium wrapper--b-margin">
          <Image imgProps={firstTripProps} />
        </Wrapper>

        <Row className="row--gutters">
          <div className="row__medium-4 row__b-margin-until-medium">
            <picture>
              <Source sourceArray={ourStartProps.source!} />
              <Image imgProps={ourStartProps} />
            </picture>
          </div>

          <div className="row__medium-8 row__medium-8">
            <div className="generic-content-container">
              <h2 className="headline headline--no-t-margin">
                Here&rsquo;s how we got started&hellip;
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, <a href="#">quis nostrud exercitation</a>{" "}
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum velit esse cillum{" "}
                <strong>dolore eu fugiat.</strong>
              </p>
            </div>
          </div>
        </Row>
      </Wrapper>
    </div>
  );
};

export default OurBeginning;
