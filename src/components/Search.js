import React, { Component } from "react";
import { connect } from "react-redux";

import CharCard from "./CharCard";
import { getChars } from "../ducks/reducer";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleSearch = () => {
    this.props.getChars(this.state.searchTerm);
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
          type="text"
          placeholder="Search by name..."
          value={this.state.searchTerm}
          onChange={e =>
            this.setState({
              searchTerm: e.target.value
            })
          }
        />
        <button onClick={this.handleSearch}>Search</button>
        <div className="card-list">{chars}</div>
      </>
    );
  }
}

export default connect(
  state => state,
  { getChars }
)(Search);
