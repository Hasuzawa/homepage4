

interface Link {
    href: string,
    word: string
}

const links: Link[] = [
    {"href": "#introduction", "word": "Introduction"},
    {"href": "#skill", "word": "Skill"},
    {"href": "#work-experience", "word": "Work Experience"},
    {"href": "#project", "word": "Project"},
    {"href": "#contact", "word": "Contact"}
]


const Navigation = () => {


    return (
    <nav className="flex-1">
        <ul className="list-none">
            {links.map((link: Link, idx: number) => 
                <li
                    key={idx}
                    className="text-center text-xl"
                >
                    <a
                        className="m-2 block hover:bg-zinc-300"
                        href={link.href}
                        
                    >
                        {link.word}
                    </a>
                </li>
            )}
        </ul>
    </nav>
    )
}

export default Navigation