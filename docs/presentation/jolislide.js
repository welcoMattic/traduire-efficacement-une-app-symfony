import React from "react";
import {Heading, Image, Link, Text, Slide, Layout, Fill} from "spectacle";

export default class JoliSlide extends React.Component {
    render() {
        return (
            <Slide bgColor="white">
                <Layout>
                    <Fill>
                        <Image src={this.props.avatar} display="inline" width={300}/>
                        <Text margin={30}>
                            <strong>@{this.props.pseudo}</strong> sur <Link href={`https://twitter.com/${this.props.pseudo}`}
                                                                            target="_blank">Twitter</Link> et <Link
                            href={`https://github.com/${this.props.pseudo}`} target="_blank">GitHub</Link>
                        </Text>
                    </Fill>
                    <Fill>
                        <Heading size={3} lineHeight={1} textColor="black">
                            {this.props.name}
                        </Heading>
                        <Text>
                            Symfony, JS, Docker, Elasticsearch ...
                        </Text>
                        <Image src={this.props.logo} display="inline" margin={50}/>
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
