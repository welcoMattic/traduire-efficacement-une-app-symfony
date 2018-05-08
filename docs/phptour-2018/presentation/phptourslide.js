import React from 'react';
import PropTypes from "prop-types";
import queryString from 'query-string';
import { Slide } from 'spectacle';
import images from './images';

export default class PhpTourSlide extends React.Component {
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

        let phptourLogo = images.phptour;

        return (
            <div>
                {isPresenterMode ?
                    <Slide {...this.props}>
                        {this.props.children}
                    </Slide> :
                    <div style={isPresenterMode ? {} : fullScreenStyle}>
                        <img src={phptourLogo} style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '30px',
                            width: '200px',
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

PhpTourSlide.defaultProps = {
    align: 'center top',
};

Slide.propTypes = {
    align: PropTypes.string,
}
