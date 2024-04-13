import {IconType} from "react-icons";
import {Tooltip as PimpedToolTip, TooltipProps as CustomTooltipProps} from "react-tippy";
import React from "react";

interface TechProps {
    name: string;
    icon: IconType;
}

interface TooltipProps extends CustomTooltipProps {
    children: React.ReactNode;
}


export default function CustomTooltip(props: TooltipProps) {
    return <PimpedToolTip {...props} />;
}