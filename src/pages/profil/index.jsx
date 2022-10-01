import LogoLink from '../../components/atoms/link/logoLink';
import SignOutNav from '../../components/mollecules/signOutNav';
import Footer from '../../components/mollecules/footer';
import H1 from '../../components/atoms/title/h1';
import Button from '../../components/atoms/button';
import Card from '../../components/mollecules/card';
import './index.css';
import { getProfil } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import EditForm from '../../components/mollecules/forms/editProfil';

const Profil = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.profil.firstName);
    const lastName = useSelector((state) => state.user.profil.lastName);
    const updateProfilStatus = useSelector(
        (state) => state.user.profil.updateStatus
    );

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getProfil());
    }, [dispatch]);

    useEffect(() => {
        if (!!updateProfilStatus && isEditing === true) {
            setIsEditing(false);
        }
    }, [updateProfilStatus, isEditing]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <>
            <nav className="main-nav">
                <LogoLink />
                <SignOutNav />
            </nav>
            <main className="bg-dark">
                <header className="user-header">
                    <H1 className="white-heading">
                        Welcome back
                        {!isEditing && (
                            <p className="welcome">
                                {firstName} {lastName} !
                            </p>
                        )}
                    </H1>
                    {isEditing ? (
                        <EditForm onClick={handleEdit} />
                    ) : (
                        <>
                            <Button
                                className="edit-button"
                                label="Edit Name"
                                onClick={handleEdit}
                            />
                        </>
                    )}
                </header>

                <h2 className="sr-only">Accounts</h2>

                <Card
                    heading="Argent Bank Checking (x8349)"
                    balance="$2,082.79"
                    balanceLabel="Available Balance"
                />

                <Card
                    heading="Argent Bank Savings (x6712)"
                    balance="$10,928.42"
                    balanceLabel="Available Balance"
                />

                <Card
                    heading="Argent Bank Credit Card (x8349)"
                    balance="$184.30"
                    balanceLabel="Current Balance"
                />
            </main>
            <Footer />
        </>
    );
};

export default Profil;
