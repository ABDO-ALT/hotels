import React from "react";
import SearchButton from "./SearchButton";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }
  handleSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              className="form-group search-box"
              onSubmit={event => {
                event.preventDefault();
                this.props.search(this.state.searchInput);
              }}
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  onChange={event => this.handleSearchInput(event)}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                />
                <input
                  type="submit"
                  value="Search IDs"
                  className="btn btn-primary"
                />

                {/* <SearchButton /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
