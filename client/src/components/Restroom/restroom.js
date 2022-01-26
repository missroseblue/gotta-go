import React from 'react';

const Restroom = ({ props }) => {
    const { id, name } = props;
    return (
        <div>{name}</div>
    );
};

export default Restroom;