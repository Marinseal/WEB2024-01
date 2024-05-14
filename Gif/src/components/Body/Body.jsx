import React, { useState } from 'react';
import { Form } from '../Form/Form';
import { Cards } from '../Cards/Cards';

export function Body() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Form onSearch={handleSearch} />
      <Cards searchInput={searchTerm} />
    </>
  );
}