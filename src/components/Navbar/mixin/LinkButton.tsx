import CustomTooltip from "../../CustomTooltip";

export default function LinkButton({title, icon, href}: any) {
    return (
        <CustomTooltip title={title} position={"top"} duration={250}>
            <a target="_blank" rel="noreferrer" href={href}>
                {icon}
            </a>
        </CustomTooltip>
    );
};