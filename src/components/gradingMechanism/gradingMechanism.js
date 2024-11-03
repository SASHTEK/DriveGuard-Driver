import React, { useState, useEffect } from 'react'

const gradingMechanism = () => {

    const [offenceCountNormal, setOffenceCountNormal] = useState(0);
    const [offenceCountCritical, setOffenceCountCritical] = useState(0);
    const [offenceLevel, setOffenceLevel] = useState(0);

    useEffect(() => {
        // Simulate fetching data from a connection
        const fetchCounts = async () => {
            // Replace these with actual fetch calls
            const normalCount = await getNormalCountFromConnection();
            const criticalCount = await getCriticalCountFromConnection();

            setOffenceCountNormal(normalCount);
            setOffenceCountCritical(criticalCount);

            let level = 0;

            if (normalCount === 0 && criticalCount === 0) {
                level = 0; // Green
            } else if (normalCount === 1 && criticalCount === 0) {
                level = 1; // Blue
            } else if (normalCount === 0 && criticalCount === 1) {
                level = 2; // Yellow
            } else if (normalCount < 2 && criticalCount === 1) {
                level = 3; // Red
            } else if (normalCount > 2 && criticalCount < 2) {
                level = 3; // Red
            } else if (normalCount > 2 && criticalCount > 1) {
                level = 4; // Black
            }

            setOffenceLevel(level);
        };

        fetchCounts();
    }, []);

    // Placeholder functions for fetching data
    const getNormalCountFromConnection = async () => {
        // Simulate fetch call
        return 1; // Example normal count
    };

    const getCriticalCountFromConnection = async () => {
        // Simulate fetch call
        return 0; // Example critical count
    };


    return ( 
        <p>Offense Level: {offenceLevel}</p>
     );
}
 
export default gradingMechanism;