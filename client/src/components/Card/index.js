import React, { Component } from "react";
import PropTypes from "prop-types";
import LabelImg from "../LabelImg";

import "./card.css";

class Card extends Component {
  render() {
    const { cardTitle, info } = this.props;
    return (
      <div>
        <div className="title-style">{cardTitle}</div>
        {info.map((item, index) => {
          const { labelText, imgSrc, imgClassName } = item;
          return (
            <LabelImg
              labelText={labelText}
              imgSrc={imgSrc}
              ImgClassName={imgClassName}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

Card.propTypes = {
  info: PropTypes.array,
  cardTitle: PropTypes.string
};

export default Card;