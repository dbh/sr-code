import React from 'react';
import DictionaryRow from './DictionaryRow';

import useStore from '../store';

const DictionaryTable = () => {
    const dictionary = useStore(state => state.dictionary);
    const filter = useStore(state => state.filter);
    const setSelectedEntry = useStore(state => state.setSelectedEntry);
  
    return (
        <div>
            <table width="100%">
                <thead>
                    <tr>
                    <th>Word</th>
                    <th>Code</th>          
                    </tr>
                </thead>
                <tbody>
                    {dictionary
                    .filter((dictionary) => dictionary.word.toLowerCase().includes(filter) || dictionary.code.toLowerCase().includes(filter))
                    .map(entry => (
                        <DictionaryRow 
                            entry={entry}
                            key={entry.key}                          
                            onClick={(entry) => setSelectedEntry(entry)}
                        />
                    ))}        
                </tbody>
            </table>
        </div>

    );
};

export default DictionaryTable;