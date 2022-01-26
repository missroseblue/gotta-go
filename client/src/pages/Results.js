import React from 'react';
import Restroom from '../components/Restroom/restroom';

const Results = ({ restrooms }) => {
    return (
        <section>
            {restrooms.map(restroom => <Restroom props={restroom} key={restroom.id} />)}
        </section>
    );
};

export default Results;