import React, { Component } from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./directory.data.js";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
