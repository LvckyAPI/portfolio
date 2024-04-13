import Link from "next/link";
import "./_MobileLandingButton.scss";

interface MobileLandingButtonProps {
    name: string;
    link: string;
    selected: boolean;
    onClick: () => void;
}

export default function MobileLandingButton({name, link, selected, onClick}: MobileLandingButtonProps) {
    return (
        <Link href={link} className={"mobile-landing-button" + (selected === true ? ' selected' : '')} onClick={onClick}>
            {name}
        </Link>
    );
}