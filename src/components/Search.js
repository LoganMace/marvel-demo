import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";

import CharCard from "./CharCard";
import { getChars } from "../ducks/reducer";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  debounceSearch = debounce(() => {
    this.props.getChars(this.state.searchTerm);
  }, 500);

  handleSearch = e => {
    this.setState(
      {
        searchTerm: e.target.value
      },
      () => {
        this.debounceSearch();
      }
    );
  };

  render() {
    const chars =
      this.props.characters &&
      this.props.characters.map(char => {
        return (
          <CharCard
            key={char.id}
            name={char.name}
            img={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            id={char.id}
          />
        );
      });

    return (
      <>
        <input
          className="searchField"
          type="text"
          placeholder="Search by name..."
          value={this.state.searchTerm}
          onChange={this.handleSearch}
          ref={input => {
            this.nameInput = input;
          }}
        />
        <div className="card-list">{chars}</div>
      </>
    );
  }
}

export default connect(
  state => state,
  { getChars }
)(Search);
