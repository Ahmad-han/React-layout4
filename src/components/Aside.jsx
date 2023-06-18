import { Leon } from "./Leon"
import { Sidebar } from "./Sidebar"
import { Instagram } from "./Instagram"
import { Tags } from "./Tags"
import { Email } from "./Email"


export const Aside = () => {

    return (
        <aside>
            <Leon />
            <Sidebar />
            <Instagram />
            <h3>Tags</h3>
            <Tags />
            <Email />
        </aside>
    )
}