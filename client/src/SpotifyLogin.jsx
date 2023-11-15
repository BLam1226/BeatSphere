import React from 'react';
import { Container } from 'react-bootstrap';
import './SpotifyLogin.css'; // Import the CSS file

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=be06c16b9fca42da816a259817bad5b3&response_type=code&redirect_uri=https://beat-sphere-be92cb90b28f.herokuapp.com/Player&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function SpotifyLogin() {
    return (
        <Container className='spotify-login-container'>
            <a className="btn btn-success btn-lg spotify-login-btn" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}
