import React from "react";
import styles from './ProfileCard.module.css';

function ProfileCard() {
    return (
        <>
            <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}/>
                    <img
                        className= {styles.avatar}
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="avatar"
                    />
                    <div className={styles.cardBody}>
                        <div>
                            <p className={styles.textHeader}>Ruma Khan</p>
                            <p className={styles.textSub}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry
                            </p>
                            <button className={styles.btn}>FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default ProfileCard;