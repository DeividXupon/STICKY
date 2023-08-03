import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiSolidNotepad } from "react-icons/bi";
import { AiOutlineHome }  from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";

const size = 28

const navLinks = [
    {
        "nome": "Random Card",
        "id": 1,
        "ative": false,
        "routerName": "/random",
        "icone": <GiPerspectiveDiceSixFacesRandom size={size} />
    },
    {
        "nome": "Notes",
        "id": 2,
        "ative": false,
        "routerName": "/notes",
        "icone": <BiSolidNotepad size={size} />
    },
    {
        "nome": "STICKY",
        "id": 3,
        "ative": true,
        "routerName": "/",
        "icone": <AiOutlineHome size={size} />
    },
    {
        "nome": "Active Recall",
        "id": 4,
        "ative": false,
        "routerName": "/activeRecall",
        "icone": <BiBrain size={size} />
    },
    {
        "nome": "Create",
        "id": 5,
        "ative": false,
        "routerName": "/create",
        "icone": <AiOutlinePlus size={size} />
    }
 ]

export default navLinks;