import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('/login', {
            code,
    }).then(res => {
        console.log('Authentication Response: ', res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, '/');
    }).catch(error => {
        console.error('Authentication Error: ', error);
        window.location = '/Player';
    })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
        axios.post('/refresh', {
            refreshToken,
    }).then(res => {
        console.log('Refresh Token Response: ', res.data);
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
    }).catch(error => {
        console.error('Refresh Token Error: ', error);
        window.location = '/Player';
    })
}, (expiresIn - 60) * 1000)
    return () => clearInterval(interval)
}, [refreshToken, expiresIn]);

    return accessToken;
} 