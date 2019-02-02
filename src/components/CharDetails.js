import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleChar, getCharComics } from "../ducks/reducer";

class CharDetails extends Component {
  componentDidMount() {
    this.props.getSingleChar(this.props.match.params.id);
    this.props.getCharComics(this.props.match.params.id);
  }

  render() {
    const { char, comics } = this.props;
    const comicBooks =
      comics[0] &&
      comics.map(comic => {
        return (
          <div className="comic">
            <h3>{comic.title}</h3>
            <div>
              <img
                className="comic-img"
                src={
                  comic.thumbnail &&
                  `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                }
                alt={comic.name}
              />
            </div>
          </div>
        );
      });

    return (
      <>
        <div className="char-detail">
          <img
            className="char-detail-img"
            src={
              char.thumbnail &&
              `${char.thumbnail.path}.${char.thumbnail.extension}`
            }
            alt={char.name}
          />
          <div className="char-detail-text">
            <h2>{char.name}</h2>
            <p className="char-detail-desc">{char.description}</p>
          </div>
        </div>
        <div className="comic-list">{comicBooks}</div>
      </>
    );
  }
}

export default connect(
  state => state,
  { getSingleChar, getCharComics }
)(CharDetails);
