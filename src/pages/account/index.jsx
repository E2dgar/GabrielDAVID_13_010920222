import LogoLink from '../../components/atoms/link/logoLink';
import SignOutNav from '../../components/mollecules/signOutNav';
import Footer from '../../components/mollecules/footer';
import H1 from '../../components/atoms/title/h1';
import Button from '../../components/atoms/button';
import Card from '../../components/mollecules/card';
import './index.css';
import { getProfil } from '../../features/auth/loginSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfil());
    }, [dispatch]);
    return (
        <>
            <nav className="main-nav">
                <LogoLink />
                <SignOutNav />
            </nav>
            <main className="bg-dark">
                <header className="user-header">
                    <H1 className="white-heading">
                        Welcome back Tony Jarvis !
                    </H1>
                    <Button className="edit-button" label="Edit Name" />
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

export default Account;
