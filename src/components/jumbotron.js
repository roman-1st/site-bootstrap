import React from "react";
import { Jumbo, Container } from "react-bootstrap";
import styled  from "styled-components";

const Styles = styled.div`
    .jumbo {
        background: url(https://www.watchonista.com/sites/default/files/watchographer/405/news/397625/body/jokulsarlon_lake_iceland_0d367.jpg) no-repeat fixed bottom;

        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;

        display: flex;
        align-items: center;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

const Jumbotron = () => {
  return (
    <>
    <Styles>
    <div className="jumbo">
        <div className="overlay"> </div>
        <Container
          style={{
            // margin: "0 auto",
            width: "80%",
            // padding: "2rem 6rem",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "rgb(190, 190, 190)",
          }}
        >
          <h1> Blog Abou me </h1>
          <p>
            {" "}
            Id eiusmod ut in incididunt. Sit minim aliquip laboris nostrud Lorem
            in id non. Sint aliquip minim sunt exercitation do aliquip Lorem est
            eiusmod eu enim nostrud cillum. Eiusmod in esse laboris eu cupidatat
            id amet aliqua duis consectetur. Deserunt velit esse ut irure ex
            Lorem ut ut ea.
          </p>
        </Container>
      </div>
    </Styles>

    </>
  );
};

export default Jumbotron;
