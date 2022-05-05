import PropTypes from "prop-types";
import useStore from '../store';

const EntryInfo = () => {
    const selectedEntry = useStore(state => state.selectedEntry);

    return selectedEntry ? ( 
        <div>
        <h1>{selectedEntry.word}</h1>
        <table>
          <tbody>
            <tr>
              <td>key:</td>
              <td>{selectedEntry.key}</td>
            </tr>
            <tr>
              <td>code:</td>
              <td>{selectedEntry.code}</td>
            </tr>
          </tbody>
        </table>
        {/* <table>
          <tbody>
            {
              Object.keys(selectedEntry.base).map(key => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{selectedEntry.base[key]}</td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
      </div>  
    ) : null;
};
  
  EntryInfo.propTypes = {
    entry: PropTypes.shape({
      key: PropTypes.number,
      word: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }),
  };

  export default EntryInfo;