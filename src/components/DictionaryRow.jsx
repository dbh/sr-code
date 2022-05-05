import React from 'react';
import PropTypes from "prop-types";
// import { Button } from '@material-ui/core';

const DictionaryRow = ({ entry, onClick  }) => (
  <>
    <tr>
      <td>{entry.name}</td>
      <td>{entry.code}</td>
      {/* <td>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onClick (entry)}>More Info
        </Button>
      </td> */}
    </tr>
  </>
);

DictionaryRow.propTypes = {
  entry: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func
};

export default DictionaryRow;