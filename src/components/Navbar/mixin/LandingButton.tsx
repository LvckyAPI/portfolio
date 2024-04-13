import Link from "next/link";
import "./_LandingButton.scss";

export default function LandingButton({name, link, selected}: { name: string; link: string; selected: boolean }) {
    return (
        <Link href={link} className={"landing-button" + (selected === true ? ' selected' : '')}>
            {name}
        </Link>
    );
}


