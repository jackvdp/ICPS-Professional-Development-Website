import { NextPage } from 'next';
import { Fragment, useEffect, FormEvent, useState } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { useRouter } from 'next/router';
import { useAuth } from 'auth/AuthProvider';
import NextLink from 'components/reuseable/links/NextLink';
import { sign } from 'crypto';

const Account: NextPage = () => {

    const router = useRouter();
    const { isLoggedIn, isLoadingLogInInfo, signout } = useAuth()
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        console.log("Getting user")
        if (!isLoggedIn && !isLoadingLogInInfo) {
            router.push('/join-to-access');
        } else if (isLoggedIn) {
            console.log("Getting user data")
            const token = localStorage.getItem('token');
            fetch(`https://icpsknowledgenetwork.com/api/users/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => response.json())
                .then((data) => setUser(data))
                .catch((error) => console.error("Error fetching user data:", error));
        }
    }, [isLoggedIn, isLoadingLogInInfo]);

    return (
        <Fragment>
            <PageProgress />

            {/* ========== header section ========== */}
            <Navbar />

            {/* ========== body section ========== */}
            <main className="content-wrapper">

                <section className="wrapper bg-soft-primary">
                    <div className="container pt-8 pb-8 pt-md-14 pb-md-14 text-center">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div className="post-header">
                                    <h1 className="display-1">Account</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mt-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: 'auto', display: 'inline-block' }}>
                        <div className="card-body px-16">
                            {user ? (
                                <>
                                    <h2 className="card-title mb-4">{`${user.firstname} ${user.lastname}`}</h2>
                                    <p>Email: {user.email}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Position: {user.position}</p>
                                    <p>Organisation: {user.organisation}</p>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                            <button
                                className="btn btn-sm btn-outline-red my-custom-btn"
                                onClick={signout}>Sign Out
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            {/* ========== footer section ========== */}
            <Footer />
        </Fragment >
    );
};

export default Account;

interface User {
    "@context": string;
    "@id": string;
    "@type": string;
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    country: string;
    birthdate: string;
    profileName: string;
    profileTitle: string;
    isNewsletterSubscribe: boolean;
    isVerified: boolean;
    isBlocked: boolean;
    isProfileRestricted: boolean;
    isOnline: boolean;
    isMVP: boolean;
    interests: string[];
    skills: string[];
    biography: string;
    position: string;
    organisation: string;
    profileImage: string;
    lastOnlineAt: string;
    isRegistrationComplete: boolean;
}