import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { alertOnEmptyQuery } from 'services';
import { Wrapper, Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => setSearchQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') return alertOnEmptyQuery();
    onSubmit(searchQuery);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleChange}
        />
        <Button type="submit">
          <BsSearch size={24} />
        </Button>
      </Form>
    </Wrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
