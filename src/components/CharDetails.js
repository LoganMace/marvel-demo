import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleChar } from "../ducks/reducer";

class CharDetails extends Component {
  componentDidMount() {
    this.props.getSingleChar(this.props.match.params.id);
  }

  render() {
    const { char } = this.props;
    return (
      <>
        <img
          className="char-detail-img"
          src={
            char.thumbnail &&
            `${char.thumbnail.path}.${char.thumbnail.extension}`
          }
          alt={char.name}
        />
        <h2>{char.name}</h2>
        <p className="char-detail-desc">{char.description}</p>
      </>
    );
  }
}

export default connect(
  state => state,
  { getSingleChar }
)(CharDetails);
