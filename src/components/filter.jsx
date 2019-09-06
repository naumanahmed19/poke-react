import React from 'react';

const Filter = ({ favourites, onChange }) => {
    return (
        <div className="custom-control custom-switch mt-2">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={favourites} />
            <label className="custom-control-label" for="customSwitch1">My Favourites</label>
        </div>
    );
}

export default Filter;