import React, { useEffect } from 'react';
import {
    Paper,
    Typography,
    Box,
    CircularProgress
} from '@mui/material';

function LoadPage() {
    useEffect(() => {
        const oauhtCheck = async () => {
            window.location.href = `${process.env.REACT_APP_API_URL}/oauth/application/${process.env.REACT_APP_CLIENT_ID}`;
        }

        oauhtCheck()
    })

    return (
        <Box className='main'>
            <Box className='container'>
                <div>
                    <div className='d-flex align-center justify-center'>
                        <CircularProgress size={80} sx={{
                            color: "#10A176",
                        }} />
                    </div>
                    <Box sx={{ mt: 3, fontSize: 22, fontWeight: 500 }} className='d-flex align-center justify-center'>
                        Пожалуйста, подождите
                    </Box>
                    <Box sx={{ mt: 1, fontSize: 18, fontWeight: 400 }} className='d-flex align-center justify-center'>
                        Проверяем и обновляем информацию.
                    </Box>
                </div>
            </Box>
        </Box>
    );
}

export default LoadPage;
