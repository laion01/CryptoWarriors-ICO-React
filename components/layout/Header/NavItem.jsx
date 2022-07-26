import Link from "next/link";

export default function NavItem({link, target, label}) {
    return(
        <Link href={link}>
            <a target={target}
                className="mx-[17px] my-[11px] text-[1.1rem] font-semibold font-ibm">
                { label }
            </a>
        </Link>
    );
};