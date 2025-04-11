// src/pages/BookingPage.tsx
import { useParams } from 'react-router-dom';

export default function BookingPage() {
    const { facility_id } = useParams();

    return (
        <iframe
            src={`/booking/index.html?facility_id=${facility_id}`}
            style={{ width: '100%', height: '100vh', border: 'none' }}
            title="Flutter Booking"
        />
    );
}
