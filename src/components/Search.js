import React, { Component } from "react";
import axios from "axios";

import CharCard from "./CharCard";
import { pubKey } from "../keys";

class Search extends Component {
  state = {
    searchTerm: "",
    characters: []
  };

  handleSearch = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${
          this.state.searchTerm
        }&limit=100&apikey=${pubKey}`
      )
      .then(response => {
        console.log("response: ", response.data.data.results);
        this.setState({
          characters: response.data.data.results
        });
      });
  };

  render() {
    const chars =
      this.state.characters &&
      this.state.characters.map(char => {
        return (
          <CharCard
            key={char.id}
            name={char.name}
            img={`${char.thumbnail.path}.${char.thumbnail.extension}`}
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
        {chars}
      </>
    );
  }
}

export default Search;
