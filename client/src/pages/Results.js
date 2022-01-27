import React from 'react';
import Restroom from '../components/Restroom/restroom';

const Results = ({ restrooms }) => {
    if(restrooms.length < 1) {
        return (
            <section>
                <div className="no-match">Sorry, we couldn't find any restrooms!</div>
            </section>
        );
    }

    return (
        <section>
            {restrooms.map(restroom => <Restroom props={restroom} key={restroom.id} />)}
        </section>
    );
};

export default Results;