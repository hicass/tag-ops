import { useEffect } from 'react';
import './ServiceContent.css';


export default function ServicePage({ serviceName }) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    return (
        <h1>{serviceName}</h1>
    )
}