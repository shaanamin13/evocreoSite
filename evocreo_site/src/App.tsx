import React from 'react';
import { Card, Typography, Divider, Button } from 'antd';
import { Image } from 'antd';
import './App.css'; // Import the CSS file
import YouTube from 'react-youtube'; // Import the YouTube component

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  const opts = {
    height: '320',
    width: '568',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="container">
      {/* Game Banner */}
      <Card className="game-banner">
        <div className="banner-content">
          <Image
            src="/images/title2.png" // Replace with the actual image URL
            alt="EvoCreo Banner"
            style={{ width: '750px', height: '500px' }}
            preview={false}
          />
          <div className='creoHolder-left'>
            <Image
              className="fyru-image"
              src="/images/Fyru.png"
              preview={false}
              alt="Fyru"
              >
            </Image>
          </div>
          <div className='creoHolder-right'>
            <Image
              className="skalorn-image"
              src="/images/Skalorn.png"
              preview={false}
              alt="Skalorn"
              >
            </Image>
          </div>
          <div className="app-store-buttons">
            {/* Use Image components instead of Buttons */}
            <a
              href="your-google-play-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="appstore-button"
                src="/images/google_play.png"
                preview={false}
                alt="App Store"
                style={{ width: '64px', height: '32px' }}
              />
            </a>
            <a
              href="your-app-store-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="googleplay-button"
                src="/images/appstore.png"
                preview={false}
                alt="Google Play"
                style={{ width: '64px', height: '32px' }}
              />
            </a>
          </div>
        </div>
      </Card>

      {/* Separator */}
      <Divider className="custom-divider" />

      {/* Playable YouTube Video Thumbnail */}
      <div className="card-container">
        <Card bordered={false}>
          <YouTube videoId="BASw7bLZURo" opts={opts} />
        </Card>
      </div>

      {/* Gameplay Section */}
      <div className="card-container">
        <Card>
          <Title level={2}>Gameplay Section</Title>
          {/* Paragraph describing the action */}
          <Paragraph>Description of the gameplay action.</Paragraph>
          {/* GIF showcasing the gameplay */}
          {/* You can use an image or GIF component here */}
        </Card>
      </div>

      {/* Footer */}
      <div className="footer-links">
        <Button type="link">Link 1</Button>
        <Button type="link">Link 2</Button>
        <Button type="link">Link 3</Button>
      </div>
    </div>
  );
};

export default App;
