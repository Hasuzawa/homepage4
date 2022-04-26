import { sections } from "../app.setting"


const Menu = () => {

    const scrollIntoView = (id: string) => {
        document.getElementById(id)?.scrollIntoView()
    }

    const items: JSX.Element[] = sections.map((x: string, idx: number) => 
        <li
            id={idx.toString()}
            className=""
            onClick={() => scrollIntoView(x)}

        >
            {x}
        </li>
    )

    return (
        <ul>
            {items}
        </ul>
    )
}


export default Menu