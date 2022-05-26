import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';

const DictionaryRow = ({ entry, onClick  }) => (
  <>
    <tr>
      <td>{entry.word}</td>
      <td>{entry.code}</td>
      <td>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onClick (entry)}>Info
        </Button>
      </td>
    </tr>
  </>
);

DictionaryRow.propTypes = {
  entry: PropTypes.shape({
    key: PropTypes.number,
    word: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    meaning: PropTypes.string
  }),
  onSelect: PropTypes.func
};

export default DictionaryRow;