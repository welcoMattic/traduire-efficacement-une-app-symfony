import React from 'react';
import {
    Appear,
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
    S,
    Slide,
    Text,
    Quote,
} from 'spectacle';
import JoliSlide from './jolislide';
import SfLiveSlide from './sfliveslide';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import images from './images';
import style from './style';

require('normalize.css');

preloader(images);

const colors = {
    black: "#2b2b2a",
    white: "white",
    yellow: "#f7d325",
};
const fonts = {
    primary: "Montserrat",
    secondary: "Helvetica"
};
const theme = createTheme(colors, fonts);
// theme.screen.progress.bar.bar.background = colors.yellow;
theme.screen.progress.number.container.color = colors.black;
theme.screen.global.body.background = colors.white;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme} transition={[]} textColor={colors.black} bgColor={colors.white} progress="number" contentWidth={1440}>
                <Slide>
                    <Heading size={3} caps textColor="black">Traduire efficacement</Heading>
                    <Heading size={3} caps textColor="black" style={{marginTop: 50}}>une application Symfony</Heading>
                    <Image src={images.sfliveTransparent} height={350} style={{marginTop: 150}}></Image>
                </Slide>
                <JoliSlide name="Mathieu Santostefano" pseudo="welcomattic" logo={images.jolicode} avatar={images.avatar} />
                <SfLiveSlide notes="
                    Retour d'experience sur la mise en place de traduction au sein d'un projet d'envergure
                    Comment en est-on arrivé à un workflow fluide et efficace pour tous ?
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🎁</Heading>
                    <Text textSize={'64px'} style={{ lineHeight: '90px' }}>
                        <strong>Fluidifier</strong> le processus de traduction d'une application grâce des <strong>outils</strong> dédiés pour <strong>chaque intervenant</strong> au projet
                    </Text>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    [APPEAR] <br>
                    [APPEAR] <br>
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🌐</Heading>
                    <Heading size={2} caps>Traduire son application ?</Heading>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>Déploiement dans plusieurs pays</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>À mettre en place le plus tôt possible</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Resources (outils technique, traducteurs, relecteurs ...)</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    Que dit le W3C à ce sujet ?
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🎓</Heading>
                    <Heading size={2} style={{marginBottom: 100}}>i18n & l10n</Heading>
                    <Appear>
                        <Link href={'https://www.w3.org/International/questions/qa-i18n'} target={"_blank"}>
                            https://www.w3.org/International/questions/qa-i18n
                        </Link>
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    L’<strong>internationalisation</strong> est une étape dans la conception et le développement d’une application qui permet une <strong>localisation</strong> facile pour les publics ciblés de culture, région et langue différentes. <br>
                    [APPEAR]
                ">
                    <Heading size={3}>i18n – Internationalization</Heading>
                    <Appear>
                        <Text style={{marginTop: 50}}>
                            Clés de traduction, formats numériques, de date, devise, mais aussi couleurs, symboles ...
                        </Text>
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    La <strong>localisation</strong> fait référence à l’adaptation d’une application et de son contenu afin de répondre aux exigences linguistiques, culturelles ou autres d’un marché défini. <br>
                    [APPEAR]
                ">
                    <Heading size={3}>l10n – Localization</Heading>
                    <Appear>
                        <Text style={{marginTop: 50}}>
                            Nécessite (très souvent) l'intervention de traducteurs
                        </Text>
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Les 2 sont nécessaires pour traduire complètement une application. Mais gérées différemment
                ">
                    <Heading size={3} textColor={colors.black}>Traduction de l'UI</Heading>
                    <Image src={images.versus} width={150} style={{marginTop: 50}}/>
                    <Heading size={3} textColor={colors.black} style={{marginTop: 50}}>Traduction du contenu</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Focus sur la traduction de l'UI. Le contenu est une autre problématique, qui peut faire l'objet d'une autre conférence, qui sait ?
                ">
                    <Heading size={1}>🔎</Heading>
                    <Heading size={1} caps textColor={colors.black} style={{marginTop: 50}}>Traduction de l'interface utilisateur</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    - po, mo -> gettext: bibliothèque écrite en C utilisée pour l'i18n de programmes. Pas pour le web<br>

                    - xliff -> standard dans le monde la traduction. Format par défaut dans Symfony. Génial pour le web, dérivé de xml
                ">
                    <Heading size={2} caps>Les standards</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Formats de fichiers</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>.po, .mo</ListItem>
                                    <ListItem padding={"20px 0"}>.xliff</ListItem>
                                    <ListItem padding={"20px 0"}>.yml, .json, .csv, .properties, .ini, .lang ...</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Outils</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>poedit</ListItem>
                                    <ListItem padding={"20px 0"}>Services en ligne (SaaS)</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    [APPEAR] <br>
                    Ok mais comme on l'a vu, .po .mo pas adaptés pour le web. Utilisés ici pour des raisons historiques.
                ">
                    <Heading size={2} caps>Comment font les CMS/CMF reconnus</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Wordpress</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>.po, .mo</ListItem>
                                    <ListItem padding={"20px 0"}>Plateforme (https://translate.wordpress.org/)</ListItem>
                                    <ListItem padding={"20px 0"}>Recommandation: i18n des plugins & l10n dans une langue minimum</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Drupal</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>.po, .mo</ListItem>
                                    <ListItem padding={"20px 0"}>Plateforme (https://localize.drupal.org/)</ListItem>
                                    <ListItem padding={"20px 0"}>Recommandation: i18n des modules contrib & l10n dans une langue minimum</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>Quels problèmes / difficultés pour la mise en place de la traduction ?</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    [APPEAR] <br>
                    Pas tous techniques <br>
                ">
                    <Heading size={1} style={{marginBottom: 50}}>👥 🗣 👤</Heading>
                    <Heading size={2} caps>Beaucoup d'intervenants</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>Développeurs</ListItem>
                                    <ListItem padding={"20px 0"}>Intégrateurs</ListItem>
                                    <ListItem padding={"20px 0"}>...</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>Traducteurs</ListItem>
                                    <ListItem padding={"20px 0"}>Chefs de projet</ListItem>
                                    <ListItem padding={"20px 0"}>Testeurs</ListItem>
                                    <ListItem padding={"20px 0"}>Rédacteurs</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] Nomenclature des clés <br>
                    [APPEAR] Ajout de nouvelles clés <br>
                    [APPEAR] Synchronisation entre code et traduction <br>
                    [APPEAR] Déploiement des corrections de messages -> dépendance aux développeurs pour corriger une faute <br>
                ">
                    <Heading size={1} style={{marginBottom: 50}}>📝</Heading>
                    <Heading size={2} caps>Gestion des messages</Heading>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>Nomenclature des clés</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Responsabilité de l'ajout de nouvelles clés</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Synchronisation entre code et traduction</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Déploiement des corrections de messages</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] Versionning 'propre' <br>
                    [APPEAR] Versionning 'douteux' <br>
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🔄</Heading>
                    <Heading size={3} caps>Stockage des messages</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <List style={style.listNoBulletsHalf}>
                                    <ListItem padding={"20px 0"}>😎 SaaS</ListItem>
                                    <ListItem padding={"20px 0"}>😊 .xliff dans Git</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <List style={style.listNoBulletsHalf}>
                                    <ListItem padding={"20px 0"}>😰 CSV sur un FTP</ListItem>
                                    <ListItem padding={"20px 0"}>😱 Excel en PJ d'un email</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={1} style={{marginBottom: 50}}>🖥</Heading>
                    <Heading size={2} caps>Côté Frontend ?</Heading>
                    <List style={style.listNoBulletsHalf}>
                        <Appear><ListItem padding={"20px 0"}>🤔 Tout dans un objet JS (window.TRANSLATIONS)</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>🔓 Leak d'infos sensibles</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>⚙ Gestion des paramètres, du pluriel ...</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Vous l'aurez compris, la traduction d'une app ce n'est pas trivial. <br>
                    Ça s'anticipe, ça demande une définition du besoin de la traduction <br>
                    Et du temps pour la mise en place d'un workflow <br><br>

                    Voyons maintenant comment régler la plupart de ces problèmes !
                ">
                    <Image src={images.omg} width={'800px'} style={{marginTop: 50}}></Image>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Dans mon expérience, j'ai souvent vu des solutions maison qui demandaient un déploiement de la part des développeurs.
                ">
                    <Heading size={2} caps>Solutions "maison"</Heading>
                    <Text style={{marginTop: 50}}>Souvent peu partagées car trop spécifiques à un projet, une équipe ou un client</Text>
                    <Text style={{marginTop: 50}}>Nécessite souvent un déploiement</Text>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    👍 pour la gestion externe des clés/messages <br>
                    Transifex, PhraseApp, PoEditor <br><br>

                    Comment lier ça avec notre application ?
                ">
                    <Layout>
                        <Fill>
                            <Heading size={3} caps>Solutions SaaS</Heading>
                            <Image src={images.loco}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    VITE ! résumer 1ère et dernière colonne <br>

                    Chaque bundle tester ne répondait pas à tout ce dont on avait besoin. <br>
                    Sauf php-translation
                ">
                    <Heading size={2} caps>Packages PHP et Bundles Symfony</Heading>
                    <Image src={images.comparatif} style={{marginTop: 50, width: '100%'}} />
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>L'Organisation</Heading>
                    <Heading size={2} caps>PHP–Translation</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Message (représente une traduction) <br>
                    Extractor (celui du composant Translation) <br><br>

                    Storage Adapter (stockage des clés/messages) <br>
                    Client d'API des SaaS ou de Flysystem, voire des .xliff <br>
                    Même tout à la fois !! <br><br>

                    Translator (traduction automatique) <br>
                ">
                    <Heading size={3} caps>Outils PHP pour la gestion de l'i18n</Heading>
                    <Text style={{marginTop: 50}}>Interfaces et classes communes pour tous les outils</Text>
                    <List style={style.listHalf}>
                        <ListItem padding={"20px 0"}>Message</ListItem>
                        <ListItem padding={"20px 0"}>Extractor</ListItem>
                        <ListItem padding={"20px 0"}>Storage Adapter</ListItem>
                        <ListItem padding={"20px 0"}>Translator</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={3} caps>php–translation</Heading>
                    <List style={{marginTop: 50}}>
                        <ListItem padding={"20px 0"}>Support de plusieurs SaaS comme Transifex, Loco, PhraseApp</ListItem>
                        <ListItem padding={"20px 0"}>Framework agnostic: package PHP, bundle Symfony, package Laravel</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={3} caps>Bundle Symfony</Heading>
                    <List style={{marginTop: 50}}>
                        <ListItem padding={"20px 0"}>Basé sur le composant Translation</ListItem>
                        <ListItem padding={"20px 0"}>Configuration de Storage Adapters (SaaS, fichiers locaux ...)</ListItem>
                        <ListItem padding={"20px 0"}>Commandes (extract, download, sync, status)</ListItem>
                        <ListItem padding={"20px 0"}>Outils d'édition des messages (Intégré au Profiler, WebUI dédiée, EditInPlace)</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xliff et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>Profiler</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.profiler}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xliff et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>Profiler</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.edit}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    État des traduction de chaque domain, dans chaque langue <br>
                    Requête Ajax dès qu'on perd le focus d'un champ (améliorable) <br><br>

                    Utile si vous n'avez pas de SaaS à disposition. <br>
                    Interface recommandée pour les traducteurs dans ce cas.
                ">
                    <Heading size={3} caps>WebUI</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.webuiDashboard}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    État des traduction de chaque domain, dans chaque langue <br>
                    Requête Ajax dès qu'on perd le focus d'un champ (améliorable) <br><br>

                    Utile si vous n'avez pas de SaaS à disposition. <br>
                    Interface recommandée pour les traducteurs dans ce cas.
                ">
                    <Heading size={3} caps>WebUI</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.webuiPage}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    ⚠️ à sécuriser avec un ROLE_ADMIN <br>
                    Permet aux recetteurs, testeurs, rédacteurs, de corriger une traduction à la volée. <br>
                    Synchro avec le SaaS instantanée
                ">
                    <Heading size={3} caps>EditInPlace</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.editinplace}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={3} caps>Exemple de config</Heading>
                    <CodePane lang="yaml" style={{fontSize: 18, marginTop: '50px'}}
                        source={require(
                            "raw-loader!../assets/code/php-translation.yaml"
                        )}
                    />
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Synchronisation des traductions indépendantes de l'environnement (dev/prod) <br>
                    Chaque intervenant a son outil pour gérer les traductions <br>
                    Plus besoin de déployer l'application pour corriger une faute
                ">
                    <Heading size={3} caps>SaaS + php–translation = 😍</Heading>
                    <Heading size={4} caps style={{marginTop: 50}}>On règle les problèmes</Heading>
                    <List style={style.list}>
                        <ListItem padding={"20px 0"}>Stockage:  SaaS <strong>et</strong> .xliff</ListItem>
                        <ListItem padding={"20px 0"}>Édition des messages : chacun son outil</ListItem>
                        <ListItem padding={"20px 0"}>Indépendance vis-à-vis des développeurs</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    BazingaJsTranslationBundle <br>
                    Sur le bundle php-transaltion <br>
                    Sur Symfony
                ">
                    <Heading size={3} caps>Il en reste</Heading>
                    <List style={style.listNoBulletsSmall}>
                        <ListItem padding={"20px 0"}>🖥 Solution frontend</ListItem>
                        <ListItem padding={"20px 0"}>💥 Gestion du cache: <Link href={"https://github.com/php-translation/symfony-bundle/issues/198"} target={"_blank"}>Issue #198</Link></ListItem>
                        <ListItem padding={"20px 0"}>🛣 i18n des routes: <Link href={"https://github.com/symfony/symfony/pull/26143"} target={"_blank"}>PR #26143</Link></ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Évolution du Profiler et WebUi
                ">
                    <Heading size={2} caps>Si on va encore plus loin</Heading>
                    <List style={style.list}>
                        <ListItem padding={"20px 0"}>Ajoutez vos Storage Adapters (lingohub, poeditor, redis, propel, doctrine ...)</ListItem>
                        <ListItem padding={"20px 0"}>Évolution des outils d'édition</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>Résumé</Heading>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>Développeurs: création de clés, envoi sur le SaaS</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Traducteurs: traduction des clés en messages</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Cron en dev|preprod|prod pour synchroniser les traductions avec le SaaS</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>À vous de jouer !</Heading>
                    <Text style={{marginTop: 50}}>Vous avez besoin de traduire votre application ?</Text>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>Choisir un SaaS</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}><Code>composer req php–translation/symfony–bundle</Code></ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Utiliser ou créer un Storage Adapter</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Expliquer à l'équipe le workflow et les outils</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps style={{marginBottom: 50}}>Merci !</Heading>
                    <Image src={images.mic} width={600} style={{marginBottom: 50}}/>
                    <Text style={{marginTop: 150}} style={{fontSize: 24}}>📝 <Link href={"https://jolicode.com/blog/how-to-properly-manage-translations-in-symfony"} target={"_blank"}>Blog post (EN) sur le sujet</Link></Text>
                    <Text style={{marginTop: 200}} style={{fontSize: 24}}>🖥 <Link href={"http://welcomattic.github.io/traduire-efficacement-une-app-symfony/"} target={"_blank"}>JoindIn TODO</Link></Text>
                </SfLiveSlide>
            </Deck>
        );
    }
}
