import React from 'react';
import Card from '@material-ui/core/Card';

import DictionaryFilter from './DictionaryFilter';
import DictionaryTable from './DictionaryTable';
import { CardHeader } from '@material-ui/core';

const Dictionary = () => {
    return (
        <Card>
            <CardHeader title="Dictionary" />
            <DictionaryFilter/>
            <DictionaryTable/>
        </Card>
    );
};

export default Dictionary;