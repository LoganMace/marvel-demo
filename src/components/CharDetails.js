import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleChar, getCharComics } from "../ducks/reducer";
import ComicModal from "./ComicModal";

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
          <div className="comic" key={comic.id}>
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
            {char.description ? (
              <p className="char-detail-desc">{char.description}</p>
            ) : (
              <p>No description...</p>
            )}
          </div>
        </div>
        {this.props.loading ? (
          <h1>Loading Comics...</h1>
        ) : (
          <div className="comic-list">{comicBooks}</div>
        )}
        {comics[0] && <ComicModal comic={comics[0]} />}
      </>
    );
  }
}

export default connect(
  state => state,
  { getSingleChar, getCharComics }
)(CharDetails);
