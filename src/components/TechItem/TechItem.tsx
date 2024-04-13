import {IconType} from "react-icons";
import React from "react";
import CustomTooltip from "../CustomTooltip";

interface TechProps {
    name: string;
    icon: IconType;
}


export default function TechItem({name, icon}: TechProps) {

    return (
        <li className="flex p-2">
            <CustomTooltip title={name} position={"top"} duration={250}>
                {icon({className: "h-6 w-6"})}
            </CustomTooltip>
        </li>
    );
}