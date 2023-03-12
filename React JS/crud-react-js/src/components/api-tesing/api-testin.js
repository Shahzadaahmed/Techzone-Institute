import React, { useEffect } from 'react';
import axios from 'axios';

const ApiTesting = () => {

    const apiCall = async () => {
        try {
            let response = await axios({
                method: "DELETE",
                url: `http://192.168.2.45:5050/api/delete-item/63a9a7eb0927fe526a93ff4e`
            });
            console.log(response);
        }

        catch (error) {
            console.log('Somrthing went wrong while integrating delete item api: ', error);
        }
    };

    useEffect(() => {
        // apiCall();
    }, []);

    return (
        <div>
            <h1> API Testing! </h1>
        </div>
    );
};

export default ApiTesting