import React from 'react';

const FeatureList = ({ features }) => {
    return (
        <div className="prod-head">
            {features.map((item) => (
                <div className="prod-item" key={item.id}>
                    <span className="prod-icon">{item.icon}</span>
                    <span className="prod-label">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default FeatureList;