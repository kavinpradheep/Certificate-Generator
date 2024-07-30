import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CertificateCss from '../styles/Certificate.module.css';

const Certificate = () => {
    const location = useLocation();
    const { name, dept, college, event, organizer } = location.state || {};  // Use destructuring with fallback

    const certificateRef = useRef(null);

    if (!name || !dept || !college || !event || !organizer) {
        return <div>Data is missing</div>; // Add a fallback for missing data
    }

    return (
        <section className={CertificateCss.certificate} ref={certificateRef} id="certificate-section">
            <div className={CertificateCss.header}>
                <h2 className={CertificateCss.heading}>Certificate</h2>
                <h3 className={CertificateCss.subtitle}>Of Participation</h3>
            </div>
            <div className={CertificateCss.certificateBody}>
                This Certificate is presented to <strong>{name}</strong> from the Department of <strong>{dept}</strong>, studying at <strong>{college}</strong>, for actively participating in <strong>{event}</strong>. We thank you for your participation and look forward to seeing you in future events.
            </div>
            <div className={CertificateCss.organizer}>{organizer}</div>
        </section>
    );
};

export default Certificate;
