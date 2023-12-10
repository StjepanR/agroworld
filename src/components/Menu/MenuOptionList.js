import classes from "./MenuOptionList.module.css";
import MenuOption from "./MenuOption";
import {useRef} from 'react';

const MenuOptionList = (props) => {
    const options = [
        "La Veguilla",
        "Garlic with Guarantees",
        "Garlic from La Veguilla",
        "Garlic’s Best Friend",
        "Las Pedroñeras",
        "Garlic And You"
    ];

    return (
        <ul>
            {options.map((option) => <MenuOption title={option} />)}
        </ul>
    );
}

export default MenuOptionList;