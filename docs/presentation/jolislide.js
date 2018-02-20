import React from "react";
import {Heading, Image, Link, Text, Slide} from "spectacle";

export default class JoliSlide extends React.Component {
    render() {
        return (
            <Slide bgColor="white">
                <Image src={this.props.avatar} display="inline" width={300}/>
                <Heading size={3} lineHeight={1} textColor="black">
                    {this.props.name}
                </Heading>
                <Text>
                    Symfony, JS, Docker, Elasticsearch ...
                </Text>
                <Image src={this.props.logo} display="inline" margin={50}/>
                <Text margin={30}>
                    <strong>@{this.props.pseudo}</strong> sur <Link href={`https://twitter.com/${this.props.pseudo}`}
                                                                    target="_blank">Twitter</Link> et <Link
                    href={`https://github.com/${this.props.pseudo}`} target="_blank">GitHub</Link>
                </Text>
            </Slide>
        );
    }
}
