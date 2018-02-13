import React from "react";
import { Heading, Image, Link, Text, Slide } from "spectacle";

export default class JoliSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="white">
        <Image src={this.props.avatar} display="inline" width={300} />
        <Heading size={3} fit lineHeight={1} textColor="black">
          { this.props.name }
        </Heading>
        <Text>
          Développeur PHP - JS
        </Text>
        <Text margin={30}>
          @{ this.props.pseudo } sur <Link href={ `https://twitter.com/${this.props.pseudo}` } target="_blank">Twitter</Link> et <Link href={ `https://github.com/${this.props.pseudo}` } target="_blank">GitHub</Link>
        </Text>
        <Image src={this.props.logo} margin={50} />
      </Slide>
    );
  }
}
