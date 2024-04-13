import {IconType} from "react-icons";
import React from "react";
import CustomTooltip from "../CustomTooltip";
import './_TechItem.scss';

interface TechProps {
    name: string;
    icon: IconType;
}


export default function TechItem({name, icon}: TechProps) {
    return (
        <li className="tech-item">
            <CustomTooltip title={name} position={"top"} duration={250}>
                {icon({className: "icon"})}
            </CustomTooltip>
        </li>
    );
}