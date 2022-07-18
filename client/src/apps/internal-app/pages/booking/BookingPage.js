import React from 'react';
import ReserveMainSection from 'apps/internal-app/components/ReserveMainSection';
import ReserveUserSection from 'apps/internal-app/components/ReserveUserSection';
import { useAppSelector } from 'hooks/hooks';
import styles from './css/BookingPage.module.css'
import { Outlet } from 'react-router-dom';

const BookingPage = () => {

    const currentUser = useAppSelector((state) => state.user.username);

    return (
        <div className={styles.BookingPage}>
            <div className={styles.User}>
                <ReserveUserSection 
                    currentUser = {currentUser} 
                />
            </div>
            <div className={styles.Main}>
                <ReserveMainSection 
                    currentUser = {currentUser} 
                />
            </div>
            <Outlet />
        </div>
    )
}

export default BookingPage;

