import './index.css';
import InputText from '../../../atoms/form/inputText';
import Panel from '../../../atoms/panel';
import Button from '../../../atoms/button';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Form = ({ onClick }) => {
    const firstName = useSelector((state) => state.user.profil.firstName);
    const lastName = useSelector((state) => state.user.profil.lastName);

    const [firstNameEdit, setFirstName] = useState();
    const [lastNameEdit, setLastName] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <form
            id="edit-form"
            className="edit-form"
            name="edit-form"
            onSubmit={handleSubmit}>
            <div className="wrapper input-wrapper">
                <InputText
                    placeholder={firstName}
                    name="firstName"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <InputText
                    placeholder={lastName}
                    name="firstName"
                    id="firstName"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="wrapper">
                <Button
                    type="submit"
                    className="fixed-width"
                    label="Save"
                    onClick={onClick}
                />
                <Button
                    className="secondary-button fixed-width"
                    label="Cancel"
                    onClick={onClick}
                />
            </div>
        </form>
    );
};

export default Form;
