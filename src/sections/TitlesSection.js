import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import Snowfall from 'react-snowfall'


class TitlesSection extends Component {
  constructor() {
    super();
    this.state = {
      color: "cyan"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: this.state.color === "cyan" ? "yellow" : "cyan"
    });
  }

  render() {
    return (

        <Fullpage className="content">
          
          <h1
            className="title"
    //        style={{
      //        color: this.state.color
        //    }}
          //  onMouseOver={this.changeColor}
           // onMouseLeave={() => {
            //  this.changeColor();
           // }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>

    );
  }
}

export default TitlesSection;
