import React from 'react';
// import styled from "@emotion/styled";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

import useStore from '../../store';
import { CardHeader } from '@material-ui/core';

const Translate = () => {    
    const dictionary = useStore(state => state.dictionary);
    const translateInput = useStore(state => state.translateInput);
    const setTranslateInput = useStore(state => state.setTranslateInput);

    const translateOutput = useStore(state => state.translateOutput);
    const setTranslateOutput = useStore(state => state.setTranslateOutput);

    const translate = (input) => {
        console.log('Translate on ',input);
        let data = input.split(' ');
        let result = [];

        for (const datum of data) {
            let needle = datum.replace(/[\W_]+/g,'').toLowerCase()

            let found = dictionary.find(entry => 
                entry.word.toLowerCase() === needle);
            if (typeof found !== 'undefined') {
                result.push(found.code);
                continue;
            }
            
            let found_code = dictionary.find(entry => 
                entry.code.toLowerCase() === needle);            
            if (typeof found_code !== 'undefined') {
                result.push(found_code.word);
                continue;
            }
            // if we got here, use what we have w/o translation
            result.push(needle);
            
        }
        let result_str = result.join(' ');
        console.log('result_str', result_str);
        return result_str;
    };

    return (
        
        <Card variant="outlined">      
            <CardHeader title="Translations"/>        
                <TextField                     
                    id="TranslateInput"
                    label="Translate"
                    // variant="outlined"
                    fullWidth 
                    value={translateInput}
                    onChange={(event) => 
                        {
                            setTranslateInput(event.target.value);
                            setTranslateOutput(translate(event.target.value));
                    }}
                />
                <br/>
                <br/>
                <TextField
                    id="TranslateOutput"            
                    label="Translated Text"
                    // variant="outlined"
                    fullWidth
                    disabled                
                    value={translateOutput}
                />
        
        </Card>
        
    );
};

export default Translate;