import React from 'react';
// import styled from "@emotion/styled";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import useStore from '../../store';
// import { CardHeader } from '@material-ui/core';

// const Input = styled.input`
//   width: 100%;
//   font-size: x-large;
//   padding: 0.2rem
// `

const DictionaryFilter = () => {    
    const filter = useStore(state => state.filter);
    const setFilter = useStore(state => state.setFilter);

    return (
        <Card>
            <TextField 
                id="DictFilterField"
                label="Search"
                // variant="outlined"
                // fullWidth 
                value={filter}
                onChange={(event) => setFilter(event.target.value.toLowerCase())}
            />

    </Card>
        
    );
};

export default DictionaryFilter;