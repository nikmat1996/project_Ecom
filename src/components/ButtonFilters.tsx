import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';

interface IButtonFilters {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    buttonName: string,
    iconPresent: boolean
}

const ButtonFilters = (props: IButtonFilters) => {

    const { onClick, buttonName, iconPresent } = props;

    return (
        <button onClick={onClick}>{buttonName}
            {iconPresent && (buttonName === 'Show' ? <BiDownArrowAlt /> : <BiUpArrowAlt />)}
        </button>
    )
}

export default ButtonFilters