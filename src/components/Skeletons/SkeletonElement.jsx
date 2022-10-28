import React from "react";
import PropTypes from 'prop-types';
import './SkeletonElement.scss';
import Shimmer from "./Shimmer.jsx";

function SkeletonElement({type, height, witdh}) {
    const classes = `skeleton ${type}`
    return <div className={classes}
                style={{
                    width: `${witdh}`,
                    height: `${height}`
                }}>
        <Shimmer/>
    </div>
}

SkeletonElement.propTypes = {
    type: PropTypes.string.isRequired,
    height: PropTypes.string,
    witdh: PropTypes.string
}

SkeletonElement.defaultProps = {
    type: 'thumbnail',
    witdh: '100%'
}


export default SkeletonElement;