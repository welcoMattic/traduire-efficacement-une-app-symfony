import React from 'react';
import queryString from 'query-string';
import { Slide } from 'spectacle';
import images from './images';

export default class SfLiveSlide extends React.Component {
    render() {
        const parsedUrl = queryString.parseUrl(window.location.href);
        const isPresenterMode = hasOwnProperty.call(parsedUrl.query, 'presenter');

        const fullScreenStyle = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            top: 'calc(-50vh + 50%)',
            left: 'calc(-50vw + 50%)',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            padding: '10vh 10vw',
        };

        let sfLiveLogo = images.sfliveTransparent;
        const bgColor = this.props.bgColor ? this.props.bgColor.toLowerCase() : 'white';

        if (bgColor === 'black' || bgColor === '#000' || bgColor === '#000000') {
            sfLiveLogo = images.sfliveBlack;
        }

        if (bgColor === 'white' || bgColor === '#FFF' || bgColor === '#FFFFFF') {
            sfLiveLogo = images.sfliveWhite;
        }

        return (
            <div>
                {isPresenterMode ?
                    <Slide {...this.props}>
                        {this.props.children}
                    </Slide> :
                    <div style={isPresenterMode ? {} : fullScreenStyle}>
                        <img src={sfLiveLogo} style={{
                            position: 'absolute',
                            top: '50px',
                            right: '50px',
                            width: '300px',
                            zIndex: 2,
                        }}/>
                        <Slide {...this.props}>
                            {this.props.children}
                        </Slide>
                    </div>
                }
            </div>
        );
    }
}
