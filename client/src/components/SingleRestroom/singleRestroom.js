import React from 'react';
import { useParams } from 'react-router-dom';

const SingleRestroom = () => {
    const { id: restroomId } = useParams();

    return (
        <div>
            {restroomId}
        </div>
    );
};

export default SingleRestroom;