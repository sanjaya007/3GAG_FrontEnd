import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeFront from "../../../images/static/homeFront/homeFront.jpg";
import FrontItems from "./FrontItems";
import FrontItemsData from "./FrontItemsData";

const HomeFront = () => {
  return (
    <>
      <Container className="mx-auto">
        <Row>
          <Col>
            <div className="home-front mx-auto text-center">
              <div className="front-img-container">
                <img
                  src={homeFront}
                  alt="home"
                  className="front-img img-fluid img-responsive"
                />
                <div className="three-gadgets flex-css">
                  {FrontItemsData.map((value, index) => {
                    return (
                      <>
                        <FrontItems
                          key={index}
                          img={value.itemImg}
                          name={value.itemName}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="text-banner text-center flex-css-column py-5 my-5">
          <h1>
            Three popular gadgets in <br />
            Todays World
          </h1>
          <p>
            "Man today is fascinated by the possibility of buying, more, better,
            and especially, new things. He is consumption hungry... To buy the
            latest gadget, the latest model of anything that is on the market,
            is the dream of everybody, in comparison to which the real pleasure
            in use is quite secondary. Modern man, if the dared to be articulate
            about his concept of heaven, would describe a vision which would
            look like the biggest department store in the world." We have
            focused in three useful and cool gadgets in todays world. All we
            need a cool watch even we don't use as a clock either. Not only for
            music, but headphones are incredibly beneficial. It make our hands
            free to work and is useful in trip as well as gaming also.The
            GoPro's wide-angle is wonderful for anytime you want to capture a
            lot, all at once: sporting events, hiking, travel, and parties. More
            of the action and atmosphere is captured than with a traditional
            point and shoot or video camera.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default HomeFront;
