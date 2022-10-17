import PropTypes from 'prop-types';
import './index.css';
import InputText from '../../../atoms/form/inputText';
import Button from '../../../atoms/button';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfil } from '../../../../features/user/userSlice';

/**
 * Component for showind edit profil form
 * @component
 * @returns {JSX.Element}
 */
export const Form = ({ onClick }) => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.profile.firstName);
    const lastName = useSelector((state) => state.profile.lastName);

    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            updateProfil({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value
            })
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
                    inputRef={firstNameRef}
                    placeholder={firstName}
                    name="firstName"
                    id="firstName"
                    required
                />
                <InputText
                    inputRef={lastNameRef}
                    placeholder={lastName}
                    name="firstName"
                    id="firstName"
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

Form.propTypes = {
    /**
     * Form's onClick
     */
    onClick: PropTypes.func.isRequired
};

export default Form;
