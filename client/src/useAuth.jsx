import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('mongodb+srv://beatsphere:4Zk4wavqwvc6SqKS@cluster0.e6ykh2q.mongodb.net/?retryWrites=true&w=majority/login', {
            code,
    }).then(res => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, '/');
    }).catch(() => {
        window.location = '/';
    })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
        axios.post('mongodb+srv://beatsphere:4Zk4wavqwvc6SqKS@cluster0.e6ykh2q.mongodb.net/?retryWrites=true&w=majority/refresh', {
            refreshToken,
    }).then(res => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
    }).catch(() => {
        window.location = '/';
    })
}, (expiresIn - 60) * 1000)
    return () => clearInterval(interval)
}, [refreshToken, expiresIn]);

    return accessToken;
} 