import './index.css';
import InputText from '../../../atoms/form/inputText';
import Panel from '../../../atoms/panel';
import Button from '../../../atoms/button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfil } from '../../../../features/user/userSlice';

export const Form = ({ onClick }) => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.auth.profil.firstName);
    const lastName = useSelector((state) => state.auth.profil.lastName);

    const [firstNameEdit, setFirstName] = useState();
    const [lastNameEdit, setLastName] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            updateProfil({ firstName: firstNameEdit, lastName: lastNameEdit })
        );
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
                    required
                />
                <InputText
                    placeholder={lastName}
                    name="firstName"
                    id="firstName"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

            <div className="wrapper">
                <Button type="submit" className="fixed-width" label="Save" />
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
