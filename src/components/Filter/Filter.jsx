import { Component } from 'react';
import PropTypes from 'prop-types';
import FilterLabel from './Filter.styled';

class Filter extends Component {
  state = { filter: '' };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    this.props.onChange({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = { onChange: PropTypes.func };

export default Filter;
