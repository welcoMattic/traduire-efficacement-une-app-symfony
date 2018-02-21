import React, { PropTypes } from "react";
import { render } from "react-dom";
import {
    CodePane,
    Code,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    Link,
    Markdown,
    ListItem,
    List,
    Slide,
    Text,
    Quote,
    Appear,
    S
} from 'spectacle';
import JoliSlide from './jolislide';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import images from './images';

require('normalize.css');

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
theme.screen.progress.bar.bar.background = colors.yellow;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme} transition={[]} textColor="black" progress="bar" contentWidth={1440}>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Traduire efficacement</Heading>
                    <Heading size={3} caps textColor="black">une application Symfony</Heading>
                    <Image src={images.afsy} height="200px" style={{marginTop: 50}}></Image>
                    <Text>SfPot Février 2018</Text>
                </Slide>
                <JoliSlide name="Mathieu Santostefano" pseudo="welcomattic" logo={images.jolicode} avatar={images.avatar} />
                <Slide>
                    <Heading size={1} style={{marginBottom: 50}}>😏</Heading>
                    <Text textSize={'48px'}>
                        Mettre en place un <strong>workflow</strong> de traductions
                        <br/> qui soit <strong>agréable</strong> et <strong>facile à utiliser</strong>
                        <br/> pour chaque intervenant au projet
                    </Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>🎓</Heading>
                    <Heading size={2} textColor="black">i18n vs l10n</Heading>
                </Slide>
                <Slide bgColor="white" notes="Clés de traduction">
                    <Heading size={3} textColor="black">i18n – Internationali(z|s)ation</Heading>
                    <Text style={{marginTop: 50}}>
                        Préparation technique d'une application en vue d'un déploiement dans plusieurs langues et cultures
                    </Text>
                </Slide>
                <Slide bgColor="white" notes="Traduction des clés">
                    <Heading size={3} textColor="black">l10n – Localization (régionalisation)</Heading>
                    <Text style={{marginTop: 50}}>
                        Traduction de l'interface utilisateur dans une ou plusieurs langues/cultures
                    </Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>🌐</Heading>
                    <Heading size={2} caps textColor="black">Traduire son application ?</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>Déploiement dans plusieurs pays</ListItem>
                        <ListItem padding={"20px 0"}>À mettre en place le plus tôt possible</ListItem>
                        <ListItem padding={"20px 0"}>Traduction de l'interface / Traduction du contenu</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps textColor="black">Traduction de l'interface</Heading>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps textColor="black">Comment font les CMS ?</Heading>
                    <Text style={{marginTop: 100}}>Wordpress, Drupal ...</Text>
                </Slide>
                <Slide bgColor="white">
                    <Text><S type="bold">Recommandations aux développeurs de modules/plugins :</S></Text>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem padding={"20px 0"}>i18n leur code</ListItem>
                                <ListItem padding={"20px 0"}>l10n dans au moins une langue (anglais)</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="white">
                    <Text style={{marginTop: 50}}><S type="bold">Chacun a une plateforme de contribution pour la l10n</S></Text>
                    <List>
                        <ListItem padding={"20px 0"}>
                            <Link href={"https://translate.wordpress.org/"} target={"_blank"}>https://translate.wordpress.org/</Link>
                        </ListItem>
                        <ListItem padding={"20px 0"}>
                            <Link href={"https://localize.drupal.org/"} target={"_blank"}>https://localize.drupal.org/</Link>
                        </ListItem>
                    </List>
                    <Text style={{marginTop: 75}}><S type="bold">Fichiers .po et gettext</S></Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>🚀</Heading>
                    <Heading size={1} caps textColor="black">Mettre en place la traduction</Heading>
                </Slide>
                <Slide bgColor="white" notes="pas tous techniques">
                    <Heading size={1} style={{marginBottom: 50}}>👥 🗣 👤</Heading>
                    <Heading size={3} caps textColor="black">Beaucoup d'intervenants</Heading>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem padding={"20px 0"}>Développeurs</ListItem>
                                <ListItem padding={"20px 0"}>Traducteurs</ListItem>
                                <ListItem padding={"20px 0"}>Chefs de projet</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List>
                                <ListItem padding={"20px 0"}>Testeurs</ListItem>
                                <ListItem padding={"20px 0"}>Rédacteurs</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>📝</Heading>
                    <Heading size={2} caps textColor="black">Gestion des messages</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>Convention de nommage des clés</ListItem>
                        <ListItem padding={"20px 0"}>Responsabilité de l'ajout de nouvelles clés</ListItem>
                        <ListItem padding={"20px 0"}>Synchronisation entre le code et la traduction d'une feature</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>🔄</Heading>
                    <Heading size={3} caps textColor="black">Versioning des messages</Heading>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem padding={"20px 0"}>😎 SaaS</ListItem>
                                <ListItem padding={"20px 0"}>😊 Fichiers .xliff dans Symfony</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List>
                                <ListItem padding={"20px 0"}>😰 CSV sur un FTP</ListItem>
                                <ListItem padding={"20px 0"}>😱 Excel en PJ d'un email</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} style={{marginBottom: 50}}>🖥</Heading>
                    <Heading size={2} caps textColor="black">Accès aux messages depuis le frontend ?</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>On met tout dans un gros objet JS 🤔</ListItem>
                        <ListItem padding={"20px 0"}>Leak d'infos sensibles 🔓</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Image src={images.putain} width={'800px'} style={{marginTop: 50}}></Image>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">Solutions existantes</Heading>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">Solutions "maison"</Heading>
                    <Text style={{marginTop: 50}}>Souvent peu partagées car trop spécifiques à un projet, une équipe ou un client</Text>
                    <Text style={{marginTop: 50}}>Nécessite souvent un déploiement, sauf si anticipé</Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">Solutions SaaS</Heading>
                    <Text style={{marginTop: 50}}>Transifex, PhraseApp, PoEditor ... (+ TextMaster pour la l10n)</Text>
                    <Text style={{marginTop: 50}}>👍 pour la gestion externe des clés/messages</Text>
                    <Text style={{marginTop: 50}}>🤔 Mais comment lier ça avec notre application ?</Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">Packages PHP et Bundles Symfony</Heading>
                    <Image src={images.comparatif} style={{marginTop: 50, width: '100%'}} />
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps textColor="black">L'Organisation</Heading>
                    <Heading size={2} caps textColor="black">PHP–Translation</Heading>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Outils PHP pour la gestion de l'i18n</Heading>
                    <Text style={{marginTop: 50}}>Interfaces et classes communes pour tous les outils</Text>
                    <List style={{width: '900px', margin: '50px auto'}}>
                        <ListItem padding={"20px 0"}>Message</ListItem>
                        <ListItem padding={"20px 0"}>Extractor</ListItem>
                        <ListItem padding={"20px 0"}>Storage Adapter</ListItem>
                        <ListItem padding={"20px 0"}>Translator</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">php–translation</Heading>
                    <List style={{marginTop: 50}}>
                        <ListItem padding={"20px 0"}>Support de plusieurs SaaS comme Transifex, Loco, PhraseApp</ListItem>
                        <ListItem padding={"20px 0"}>Framework agnostic: Package PHP, bundle Symfony, package Laravel ...</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Bundle Symfony</Heading>
                    <List style={{marginTop: 50}}>
                        <ListItem padding={"20px 0"}>Basé sur le composant Translator</ListItem>
                        <ListItem padding={"20px 0"}>Configuration de Storages (SaaS, fichiers locaux ...)</ListItem>
                        <ListItem padding={"20px 0"}>Commandes (extract, download, sync, status)</ListItem>
                        <ListItem padding={"20px 0"}>Outils d'édition des messages (Intégré au Profiler, WebUI dédiée, EditInPlace)</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Profiler</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.profiler}/>
                        </Fill>
                        <Fill>
                            <Image src={images.edit}/>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Edit In Place</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.editinplace}/>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Exemple de config</Heading>
                    <CodePane lang="yaml" style={{fontSize: 18, marginTop: '50px'}}
                        source={require(
                            "raw-loader!../assets/code/php-translation.yaml"
                        )}
                    />
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">SaaS + php–translation = 😍</Heading>
                    <Heading size={4} caps textColor="black" style={{marginTop: 50}}>On règle les problèmes</Heading>
                    <List style={{width: '1000px', margin: '50px auto'}}>
                        <ListItem padding={"20px 0"}>Stockage:  SaaS <strong>et</strong> fichiers locaux (*.xliff)</ListItem>
                        <ListItem padding={"20px 0"}>Édition des messages: chacun son outil</ListItem>
                        <ListItem padding={"20px 0"}>Indépendance vis-à-vis des développeurs</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Il en reste</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>🖥 Solution frontend (BazingaJsTranslationBundle ?)</ListItem>
                        <ListItem padding={"20px 0"}>💥 Gestion du cache: <Link href={"https://github.com/php-translation/symfony-bundle/issues/198"} target={"_blank"}>Issue #198 sur le bundle Symfony.</Link></ListItem>
                        <ListItem padding={"20px 0"}>🛣 i18n des routes: <Link href={"https://github.com/symfony/symfony/pull/26143"} target={"_blank"}>PR #26143 ouverte dans Symfony</Link> \o/</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">Si on va encore plus loin</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>Ajoutez vos Storage Adapters (lingohub, poeditor, redis, propel, doctrine ...)</ListItem>
                        <ListItem padding={"20px 0"}>Évolution des outils d'édition (Profiler notamment)</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps textColor="black">Résumé</Heading>
                    <List>
                        <ListItem padding={"20px 0"}>Développeurs: création de clés, envoi sur le SaaS</ListItem>
                        <ListItem padding={"20px 0"}>Traducteurs: traduction des clés en messages</ListItem>
                        <ListItem padding={"20px 0"}>Cron en dev|preprod|prod pour télécharger depuis le SaaS</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps textColor="black">Conclusion</Heading>
                    <Text style={{marginTop: 50}}>Vous avez besoin de traduire votre application ?</Text>
                    <List>
                        <ListItem padding={"20px 0"}>Choisir un SaaS</ListItem>
                        <ListItem padding={"20px 0"}>Installer php–translation/symfony–bundle</ListItem>
                        <ListItem padding={"20px 0"}>Utiliser ou créer un Storage Adapter</ListItem>
                        <ListItem padding={"20px 0"}>Expliquer à l'équipe le workflow et les outils</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={3} caps textColor="black">ProTip ©</Heading>
                    <Text style={{marginTop: 50, marginBottom: 100}}>Installer un cron sur votre prod</Text>
                    <CodePane lang="php" style={{fontSize: 24}} source={"php bin/console translation:download --cache --env=prod --no-debug > /var/log/cron.log 2>&1"}></CodePane>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps textColor="black" style={{marginBottom: 50}}>Merci !</Heading>
                    <Image src={images.mic} width={600} style={{marginBottom: 50}}/>
                    <Heading size={3} caps textColor="black" style={{marginBottom: 50}}>❓  ➡️  🍻</Heading>
                    <Text style={{marginTop: 150}} style={{fontSize: 24}}>📝 <Link href={"https://jolicode.com/blog/how-to-properly-manage-translations-in-symfony"} target={"_blank"}>Blog post sur le sujet</Link></Text>
                    <Text style={{marginTop: 200}} style={{fontSize: 24}}>🌐 <Link href={"http://php-translation.readthedocs.io/en/latest/best-practice/index.html#translation-keys"} target={"_blank"}>Convention de nommage des clés</Link></Text>
                    <Text style={{marginTop: 200}} style={{fontSize: 24}}>📑 <Link href={"http://welcomattic.github.io/traduire-efficacement-une-app-symfony/"} target={"_blank"}>Slides</Link></Text>
                </Slide>
            </Deck>
        );
    }
}
