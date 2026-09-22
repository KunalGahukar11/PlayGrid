import React from 'react'

const SlotBookingScreen = () => {
    const getDays = () => {
        const day = new Date();

        for (let i = 0; i <= 7; i++) {
            console.log(day.toLocaleDateString("en-IN", {
                day: '2-digit',
                month: 'short',
                weekday: 'short'
            }));
            day.setDate(day.getDate() + 1)
        }

    };

    getDays();
    return (
        <div>SlotBookingScreen</div>
    )
}

export default SlotBookingScreen