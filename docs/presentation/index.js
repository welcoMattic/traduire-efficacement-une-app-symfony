import React from 'react';
import { Code, CodePane, Deck, Heading, Image, Link, List, ListItem, Slide, Text } from 'spectacle';
import JoliSlide from './jolislide';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require("normalize.css");

const images = {
    jolicode: require("../assets/jolicode-logo.png"),
    avatar: require("../assets/avatar.jpg"),
    symfony: require("../assets/symfony.svg"),
    sflive: require("../assets/sflive-logo.png"),
    micDrop: require("../assets/mic-drop.gif"),
};

preloader(images);

const colors = {
    white: "white",
    yellow: "#f7d325",
    black: "#2b2b2a",
};

const fonts = {
    primary: "Montserrat",
    secondary: "Helvetica"
};

const theme = createTheme(colors, fonts);

// override progress bar color
theme.screen.progress.bar.bar.background = colors.yellow;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} theme={theme} textColor="black" progress="bar">
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">Traduire efficacement une application Symfony</Heading>
                    <Image src={images.sflive}></Image>
                </Slide>
                <JoliSlide name="Mathieu Santostefano" pseudo="welcomattic" logo={images.jolicode} avatar={images.avatar} />
            </Deck>
        );
    }
}
