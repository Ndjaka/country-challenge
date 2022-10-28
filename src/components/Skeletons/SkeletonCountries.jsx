import React from "react";
import SkeletonElement from "./SkeletonElement.jsx";
import './SkeletonElement.scss';

function SkeletonCountries(){
    return (
        <div className={"skeleton-wrapper light"}>
            <SkeletonElement type={"thumbnail"} height={"200px"}/>
            <div className={"skeleton-wrapper-content"}>
                <SkeletonElement type={"title"} height={"17px"} witdh={'72px'}/>
                <div style={{marginTop:'30px'}}/>
                <SkeletonElement type={"title"} height={"17px"} witdh={'150px'}/>
                <SkeletonElement type={"title"} height={"17px"} witdh={'75px'}/>
                <SkeletonElement type={"title"} height={"17px"} witdh={'75px'}/>
            </div>
        </div>
    );
}

export default SkeletonCountries;