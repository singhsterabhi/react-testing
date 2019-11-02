import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  state = {};
  render() {
    const { title, desc } = this.props;
    if (!title) return null;
    return (
      <div data-test="listItemComponent">
        <h2 data-test="componentTitle">{title}</h2>
        <div data-test="componentDescription">{desc}</div>
      </div>
    );
  }
}

ListItem.propType = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
