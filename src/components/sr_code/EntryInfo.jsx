import PropTypes from "prop-types";
import useStore from '../../store';

import Card from '@material-ui/core/Card';
import { CardHeader } from "@material-ui/core";

const EntryInfo = () => {
    const selectedEntry = useStore(state => state.selectedEntry);

    return selectedEntry ? ( 
      <Card>     
        <CardHeader title="Entry Info"/>       
        <table>
          <tbody>
            <tr>
              <td>Word:</td>
              <td>{selectedEntry.word}</td>
            </tr>
            <tr>
              <td>code:</td>
              <td>{selectedEntry.code}</td>
            </tr>
            <tr>
              <td>meaning:</td>
              <td>{selectedEntry.meaning}</td>
            </tr>            
          </tbody>
        </table>

      </Card>  
    ) : null;
};
  
  EntryInfo.propTypes = {
    entry: PropTypes.shape({
      key: PropTypes.number,
      word: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      meaning: PropTypes.string
    }),
  };

  export default EntryInfo;