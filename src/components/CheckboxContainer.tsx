import ButtonFilters from "./ButtonFilters";
import { firstSection } from "./CheckboxStyle";
import { useState } from "react";

const container = {
    width: '200px',
    border: '2px solid black'
}

interface ICheckboxContainer {
    data: data
    setValue: React.Dispatch<React.SetStateAction<data>>
}

const CheckboxContainer = ({data, setValue}: ICheckboxContainer) => 
    <CheckBox title={data.title} options={data.options} setValue={setValue} />

export default CheckboxContainer

type option = {
    name: string,
    isSelected: boolean
}
type data = {
    title: string,
    options: option[]
}

interface ICheckBox extends data {
    setValue: React.Dispatch<React.SetStateAction<data>>
}

const CheckBox = ({ title, options, setValue }: ICheckBox) => {

    const [isHidden, setIsHidden] = useState(false);

    const ToggleHide = () => setIsHidden((currentVal) => !currentVal)

    const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <div style={container}>

            <div style={firstSection}>
                <div>{title}</div>
                <ButtonFilters onClick={ToggleHide} buttonName={isHidden ? "Show" : 'Hide'} iconPresent={true}/>
            </div>

            {options.map( ({ name, isSelected }) => (
                <div>
                    <input type="checkbox" 
                    name={name} 
                    id={name} 
                    onChange={(e) => OnChangeHandler(e)}
                    defaultChecked={isSelected} />
                    <span>{name}</span>
                </div>
            ))}

        </div>
    )
    
}