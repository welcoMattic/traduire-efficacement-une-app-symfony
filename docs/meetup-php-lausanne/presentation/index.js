import React from 'react';
import {
    Appear,
    CodePane,
    Code,
    Deck,
    Fill,
    Heading,
    Image,
    Notes,
    Layout,
    Link,
    ListItem,
    List,
    S,
    Slide,
    Text,
    Typeface,
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import images from './images';
import style from './style';

require('normalize.css');
require('prismjs/components/prism-twig');
require('prismjs/components/prism-ini');
preloader(images);
const colors = {
    black: '#2b2b2a',
    white: 'white',
    quaternary: '#f7d325',
};
const fonts = {
    primary: {
        name: 'Jaldi',
        googleFont: true,
    },
    secondary: 'Helvetica',
};
const theme = createTheme(colors, fonts);
theme.screen.global.body.background = colors.white;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                theme={theme}
                transition={[]}
                textColor={colors.black}
                controls={null}
                bgColor={colors.white}
                progress="bar"
                contentWidth={1440}>
                <Slide align={'center center'} bgImage={images.gothambg} bgDarken={0.7}>
                    <Typeface googleFont="Jaldi">
                        <Heading
                            size={1}
                            caps
                            textColor={'papayawhip'}
                            style={{ textShadow: '0px 0px 10px #000' }}>
                            Traduire efficacement
                        </Heading>
                        <Heading
                            size={1}
                            caps
                            textColor={'papayawhip'}
                            style={{ textShadow: '0px 0px 10px #000', marginTop: 25 }}>
                            une application PHP
                        </Heading>
                    </Typeface>
                    <div style={style.mt150}>
                        <Image
                            src={images.antistatique}
                            display={'inline'}
                            style={{ marginRight: '20px' }}
                        />
                        <Image
                            src={images.phpmeetup}
                            display={'inline'}
                            style={{ marginRight: '20px' }}
                        />
                        <Image
                            src={images.gotham}
                            display={'inline'}
                            style={{ marginRight: '20px' }}
                        />
                    </div>
                </Slide>
                <Slide align={'center center'}>
                    <Layout>
                        <Fill>
                            <Image
                                src={images.avatar}
                                display="inline"
                                width={300}
                                style={{ borderRadius: '50%' }}
                            />
                            <Text margin={30}>
                                <strong>@welcomattic</strong>
                                <br />
                                &nbsp;sur&nbsp;
                                <Link href={'https://twitter.com/welcomattic'} target="_blank">
                                    Twitter
                                </Link>
                                &nbsp;et&nbsp;
                                <Link href={'https://github.com/welcomattic'} target="_blank">
                                    GitHub
                                </Link>
                            </Text>
                        </Fill>
                        <Fill>
                            <Heading size={3} lineHeight={1} textColor="black">
                                Mathieu Santostefano
                            </Heading>
                            <Text>Symfony, React, Docker, Elasticsearch ...</Text>
                            <Image src={images.jolicode} display="inline" margin={50} />
                            <Text>Paris & Lausanne</Text>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide align={'center center'}>
                    <Image src={images.languageicon} width={300} />
                </Slide>
                <Slide>
                    <Heading size={3} textColor={colors.black}>
                        Retour d'expérience
                    </Heading>
                    <Layout style={{ marginTop: 150 }}>
                        <Fill
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <Image src={images.jolicode} width={400} />
                        </Fill>
                        <Fill
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <Text textSize={'128px'}>&</Text>
                        </Fill>
                        <Fill>
                            <Image src={images.ouibus} width={300} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    Les 2 sont nécessaires pour traduire complètement une application. Mais gérées différemment
                ">
                    <Heading size={3} textColor={colors.black}>
                        Traduction de l'UI
                    </Heading>
                    <Text textSize={'128px'}>+</Text>
                    <Heading size={3} textColor={colors.black}>
                        Traduction du contenu
                    </Heading>
                    <Text textSize={'128px'}>+</Text>
                    <Heading size={3} textColor={colors.black}>
                        Traduction des URL
                    </Heading>
                </Slide>
                <Slide
                    notes="
                    Focus sur la gestion de la traduction de l'UI. Le contenu est une autre problématique, qui peut faire l'objet d'une autre conférence, qui sait ?
                ">
                    <Heading size={1}>🔎</Heading>
                    <Heading size={1} textColor={colors.black} style={style.mt50}>
                        Traduction de l'UI
                    </Heading>
                </Slide>
                <Slide
                    notes="
                    Retour d'experience sur la mise en place de traduction au sein d'un projet d'envergure <br><br>
                    Comment en est-on arrivé à un workflow fluide et efficace pour tous ?
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        🎁
                    </Heading>
                    <Text textSize={'64px'} style={{ lineHeight: '90px' }}>
                        <strong>Fluidifier</strong> le processus de traduction d'une application
                        grâce à des <strong>outils</strong> dédiés pour{' '}
                        <strong>chaque intervenant</strong> au projet
                    </Text>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] <br>
                    Que dit le W3C à ce sujet ?
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        🎓
                    </Heading>
                    <Heading size={2} style={{ marginBottom: 100 }}>
                        i18n & l10n
                    </Heading>
                    <Appear>
                        <Link
                            href={'https://www.w3.org/International/questions/qa-i18n'}
                            target={'_blank'}
                            textSize={'48px'}>
                            https://www.w3.org/International/questions/qa-i18n
                        </Link>
                    </Appear>
                </Slide>
                <Slide
                    notes="
                    L’<strong>internationalisation</strong> est une étape dans la conception et le développement d’une application qui permet l'adaptation plus facile à un public défini. <br>
                    [APPEAR]
                    [APPEAR]
                ">
                    <Heading size={3}>i18n – Internationalization</Heading>
                    <Appear>
                        <div>
                            <Text style={{ marginTop: 100 }}>
                                Clés de traduction, formats numériques, de date, devise, ...
                            </Text>
                            <CodePane
                                lang="twig"
                                style={{ fontSize: 28, marginTop: '50px' }}
                                theme={'external'}
                                source={require('raw-loader!../assets/code/index.html.twig')}
                            />
                        </div>
                    </Appear>
                </Slide>
                <Slide
                    notes="
                    La <strong>localisation</strong> est l’adaptation d’une application et de son contenu dans le but de répondre aux exigences linguistiques, et culturelles d'un public défini. <br>
                    [APPEAR]
                ">
                    <Heading size={3}>l10n – Localization</Heading>
                    <Appear>
                        <Text style={{ marginTop: 150, lineHeight: 1.6 }}>
                            Adaptation à la culture d'un pays (couleurs, symboles ...) <br />
                            Nécessite (très souvent) l'intervention de traducteurs, <br />
                            et/ou de personnes natives du/des pays cibles
                        </Text>
                    </Appear>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] Quand ?<br>
                    [APPEAR] Qui, quoi ?<br>
                    [APPEAR] Pourquoi ?<br>
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        🌐
                    </Heading>
                    <Heading size={2} caps>
                        Traduire son application ?
                    </Heading>
                    <List style={style.list}>
                        <Appear>
                            <ListItem padding={'20px 0'}>Déploiement dans plusieurs pays</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                À mettre en place le plus tôt possible
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Ressources (techniques, humaines)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] <br>
                    - po, mo -> gettext: bibliothèque écrite en C utilisée pour l'i18n de programmes. .mo (binaire) Pas pour le web <br>
                    - xliff -> standard dans le monde la traduction. Format par défaut dans Symfony. Recommandé pour le web, dérivé de xml
                ">
                    <Heading size={2}>Les standards</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Text style={style.mt50}>
                                    <S type={'bold'}>Formats de fichiers</S>
                                </Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={'20px 0'}>.po, .mo (gettext)</ListItem>
                                    <ListItem padding={'20px 0'}>
                                        .xlf (XLIFF){' '}
                                        <Link
                                            href={
                                                'http://www.yoyodesign.org/doc/oasis/xliff12/index.html'
                                            }>
                                            Spec. en FR
                                        </Link>{' '}
                                    </ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Text style={style.mt50}>
                                    <S type={'bold'}>Outils</S>
                                </Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={'20px 0'}>
                                        poedit (Windows, macOS, Linux)
                                    </ListItem>
                                    <ListItem padding={'20px 0'}>Services en ligne (SaaS)</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide>
                    <Image src={images.symfony} width={250} />
                    <List style={style.list}>
                        <ListItem padding={'20px 0'}>XLIFF recommandé</ListItem>
                        <ListItem padding={'20px 0'}>
                            Standard défini par le consortium{' '}
                            <Link href={'https://www.oasis-open.org'}>OASIS</Link>
                        </ListItem>
                        <ListItem padding={'20px 0'}>Adapté pour le développement web</ListItem>
                        <ListItem padding={'20px 0'}>Utilisable avec les outils de l10n</ListItem>
                    </List>
                </Slide>
                <Slide align={'center top'}>
                    <Heading size={1} style={style.mt150}>
                        🤕
                    </Heading>
                    <Heading size={2} caps lineHeight={2}>
                        Quels problèmes ?
                    </Heading>
                    <Heading size={2} caps lineHeight={2}>
                        Quelles difficultés ?
                    </Heading>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] <br>
                    [APPEAR] <br>
                    Pas tous techniques <br>
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        👥 🗣 👤
                    </Heading>
                    <Heading size={2} caps>
                        Beaucoup d'intervenants
                    </Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <List style={{ width: '560px', margin: '50px auto' }}>
                                    <ListItem padding={'20px 0'}>Développeurs backend</ListItem>
                                    <ListItem padding={'20px 0'}>Développeurs frontend</ListItem>
                                    <ListItem padding={'20px 0'}>Intégrateurs</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <List style={style.listHalf}>
                                    <ListItem padding={'20px 0'}>Traducteurs</ListItem>
                                    <ListItem padding={'20px 0'}>Chefs de projet</ListItem>
                                    <ListItem padding={'20px 0'}>Testeurs</ListItem>
                                    <ListItem padding={'20px 0'}>Rédacteurs</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] Nomenclature des clés <br>
                    [APPEAR] Ajout de nouvelles clés <br>
                    [APPEAR] Synchronisation entre code et traduction <br>
                    [APPEAR] Déploiement des corrections de messages -> dépendance aux développeurs pour corriger une faute <br>
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        📝
                    </Heading>
                    <Heading size={2} caps>
                        Gestion des messages
                    </Heading>
                    <List style={style.list}>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Responsabilité de l'ajout de nouvelles clés
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>Nomenclature des clés</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Synchronisation entre code et traduction
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Déploiement de correction de messages
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    notes="
                    [APPEAR] Versionning 'propre' <br>
                    [APPEAR] Versionning 'douteux' <br>
                ">
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        📦
                    </Heading>
                    <Heading size={3} caps>
                        Stockage des messages
                    </Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <List style={style.listNoBulletsHalf}>
                                    <ListItem padding={'20px 0'}>😎 SaaS</ListItem>
                                    <ListItem padding={'20px 0'}>😊 .xlf dans Git</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <List style={style.listNoBulletsSmall}>
                                    <ListItem padding={'20px 0'}>😰 .csv sur un FTP</ListItem>
                                    <ListItem padding={'20px 0'}>
                                        😱 Excel en PJ d'un email
                                    </ListItem>
                                </List>
                            </Fill>
                        </Appear>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading size={1} style={{ marginBottom: 50 }}>
                        🖥
                    </Heading>
                    <Heading size={2} caps>
                        Côté Frontend ?
                    </Heading>
                    <List style={style.listNoBullets}>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                🤔 Tout dans <Code>window.TRANSLATIONS</Code>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                🔓 Leak possible d'infos sensibles
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                🎡 Gestion des paramètres, du pluriel ...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    notes="
                    Vous l'aurez compris, la traduction d'une app ce n'est pas trivial. <br>
                    Ça s'anticipe, ça demande une définition du besoin de la traduction <br>
                    Et du temps pour la mise en place d'un workflow <br><br>

                    Voyons maintenant comment régler la plupart de ces problèmes !
                ">
                    <Image src={images.nope} height={'600px'} />
                </Slide>
                <Slide
                    notes="
                    👍 pour la gestion externe des clés/messages <br>
                    Transifex, PhraseApp, PoEditor <br><br>

                    Délégation de l'interface de gestion des langues. Du versionning des traductions, de leur état ...<br><br>

                    Comment lier ça avec notre application ?
                ">
                    <Layout>
                        <Fill>
                            <Heading size={3} caps>
                                Solutions SaaS
                            </Heading>
                            <Image src={images.loco} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Notes>Merci aux maintainers ❤️</Notes>
                    <Heading size={2} caps>
                        L'Organisation
                    </Heading>
                    <Heading size={2} caps>
                        PHP–Translation
                    </Heading>
                    <Layout style={{ marginTop: 50 }}>
                        <Fill>
                            <Image
                                src={images.tobias}
                                style={{ borderRadius: '50%' }}
                                width={120}
                            />
                            <Text>Tobias Nyholm</Text>
                        </Fill>
                        <Fill>
                            <Image
                                src={images.victor}
                                style={{ borderRadius: '50%' }}
                                width={120}
                            />
                            <Text>Victor Bocharsky</Text>
                        </Fill>
                    </Layout>
                    <Layout style={style.mt50}>
                        <Fill>
                            <Image
                                src={images.damienalexandre}
                                style={{ borderRadius: '50%' }}
                                width={120}
                            />
                            <Text>Damien Alexandre</Text>
                        </Fill>
                        <Fill>
                            <Image
                                src={images.welcomattic}
                                style={{ borderRadius: '50%' }}
                                width={120}
                            />
                            <Text>Mathieu Santostefano</Text>
                        </Fill>
                        <Fill>
                            <Image
                                src={images.contributors}
                                style={{ borderRadius: '50%' }}
                                width={120}
                            />
                            <Text>and all contributors</Text>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    Interface et classes communes à tous les outils <br><br>

                    Message (représente une traduction) <br>
                    Extractor (celui du composant Translation) <br><br>

                    Storage Adapter (stockage des clés/messages) <br>
                    Client d'API des SaaS ou de Flysystem, voire des .xlf <br>
                    Même tout à la fois !! <br><br>

                    Translator (traduction automatique) <br>
                ">
                    <Heading size={3}>Outils PHP pour l'i18n</Heading>
                    <Layout style={{ margin: '100px auto' }}>
                        <Fill>
                            <List style={{ width: '480px', margin: '50px auto 50px 250px' }}>
                                <ListItem padding={'20px 0'}>Message</ListItem>
                                <ListItem padding={'20px 0'}>Extractor</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List style={style.listHalf}>
                                <ListItem padding={'20px 0'}>Storage Adapter</ListItem>
                                <ListItem padding={'20px 0'}>Translator</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading size={3}>Outils PHP pour l'i18n</Heading>
                    <List style={style.list}>
                        <ListItem padding={'50px 0'}>
                            Framework-agnostic : package PHP, bundle Symfony, package Laravel
                        </ListItem>
                        <ListItem padding={'50px 0'}>
                            Support de plusieurs SaaS comme Transifex, Loco, PhraseApp, ...
                        </ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={3}>Bundle Symfony</Heading>
                    <Layout>
                        <Fill>
                            <List style={{ width: '1100px', margin: '100px auto' }}>
                                <ListItem padding={'30px 0'}>
                                    Configuration de Storage Adapters (SaaS, fichiers locaux ...)
                                </ListItem>
                                <ListItem padding={'30px 0'}>
                                    Commandes (<Code textSize={30}>extract</Code>,{' '}
                                    <Code textSize={30}>download</Code>,{' '}
                                    <Code textSize={30}>sync</Code>,{' '}
                                    <Code textSize={30}>status</Code>)
                                </ListItem>
                                <ListItem padding={'50px 0'}>
                                    Outils d'édition des messages (Panel Profiler, WebUI,
                                    EditInPlace)
                                </ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor={'#2b2b2b'} align={'center top'}>
                    <Heading size={3} textColor="papayawhip">
                        php-translation.yaml
                    </Heading>
                    <CodePane
                        lang="yaml"
                        style={{ fontSize: 28, marginTop: '50px' }}
                        theme={'external'}
                        source={require('raw-loader!../assets/code/php-translation.yaml')}
                    />
                </Slide>
                <Slide bgColor={'#2b2b2b'}>
                    <Heading size={3} textColor="papayawhip">
                        services.yaml
                    </Heading>
                    <CodePane
                        lang="yaml"
                        style={{ fontSize: 36, marginTop: '50px' }}
                        theme={'external'}
                        source={require('raw-loader!../assets/code/services.yaml')}
                    />
                </Slide>
                <Slide bgColor={'#2b2b2b'}>
                    <Heading size={3} textColor="papayawhip">
                        NoTranslator.php
                    </Heading>
                    <CodePane
                        lang="php"
                        style={{ fontSize: 28, marginTop: '50px' }}
                        theme={'external'}
                        source={require('raw-loader!../assets/code/NoTranslator.php')}
                    />
                </Slide>
                <Slide bgColor={'#2b2b2b'}>
                    <Notes>
                        Permet de déployer les traductions, sans déployer le code \o/ <br />
                        Voir les traductions comme une resource (ex: dossier upload de média) Sync
                        régulièrement via cron + à chaque déploiement si besoin
                    </Notes>
                    <Heading size={3} textColor="papayawhip">
                        crontab
                    </Heading>
                    <CodePane
                        lang="ini"
                        style={{ fontSize: 30, marginTop: '50px' }}
                        theme={'external'}
                        source={
                            '*/15 * * * * php bin/console translation:download -n --cache --no-debug'
                        }
                    />
                </Slide>
                <Slide
                    notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xlf et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>
                        Profiler
                    </Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.profiler} style={style.mt50} width={900} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xlf et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>
                        Profiler
                    </Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.edit} style={style.mt50} width={900} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    État des traduction de chaque domain, dans chaque langue <br>
                    Requête Ajax dès qu'on perd le focus d'un champ (améliorable) <br><br>

                    Utile si vous n'avez pas de SaaS à disposition. <br>
                    Interface recommandée pour les traducteurs dans ce cas.
                ">
                    <Heading size={3} caps>
                        WebUI
                    </Heading>
                    <Layout>
                        <Fill>
                            <Image
                                src={images.webuiDashboard}
                                style={{ height: 750, marginTop: 50 }}
                            />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    État des traduction de chaque domain, dans chaque langue <br>
                    Requête Ajax dès qu'on perd le focus d'un champ (améliorable) <br><br>

                    Utile si vous n'avez pas de SaaS à disposition. <br>
                    Interface recommandée pour les traducteurs dans ce cas.
                ">
                    <Heading size={3} caps>
                        WebUI
                    </Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.webuiPage} style={{ height: 800, marginTop: 50 }} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    notes="
                    ⚠️ à sécuriser avec un ROLE_ADMIN <br>
                    Permet aux recetteurs, testeurs, rédacteurs, de corriger une traduction à la volée. <br>
                    Synchro avec le SaaS instantanée
                ">
                    <Heading size={3}>EditInPlace</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.editinplace} width={900} style={style.mt50} />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide align={'center top'}>
                    <Heading size={3}>Nomenclature de clés</Heading>
                    <Image src={images.table} style={style.mt50} width={1200} />
                </Slide>
                <Slide
                    align={'center top'}
                    notes="
                    Synchronisation des traductions indépendantes de l'environnement (dev/prod) <br><br>
                    Ne pas versionner les .xlf si SaaS, au deploy on download les translations, et on les stock comme un dossier de medias, partagé entre les versions déployées <br><br>
                    Chaque intervenant a son outil pour gérer les traductions <br><br>
                    Plus besoin de déployer l'application pour corriger une faute
                ">
                    <Heading size={3} caps>
                        SaaS + php–translation = 😍
                    </Heading>
                    <Heading size={4} caps style={style.mt150}>
                        On règle les problèmes
                    </Heading>
                    <List style={style.list}>
                        <ListItem padding={'20px 0'}>Convention : nomenclature</ListItem>
                        <ListItem padding={'20px 0'}>Stockage : SaaS (+ .xlf)</ListItem>
                        <ListItem padding={'20px 0'}>
                            Édition des messages : chacun son outil
                        </ListItem>
                        <ListItem padding={'20px 0'}>Indépendance : crontab</ListItem>
                    </List>
                </Slide>
                <Slide align={'center top'}>
                    <Image src={images.schema} width={700} style={style.mt50} />
                </Slide>
                <Slide
                    notes="
                    BazingaJsTranslationBundle <br>
                    Sur le bundle php-transaltion <br>
                    Sur Symfony
                ">
                    <Heading size={3} caps>
                        Il en reste
                    </Heading>
                    <List style={style.listNoBullets}>
                        <ListItem padding={'20px 0'}>
                            🖥 Solution frontend BazingaJsTranslationBundle ?
                        </ListItem>
                        <ListItem padding={'20px 0'}>
                            💥 Gestion du cache <br />
                            <Link
                                href={'https://github.com/symfony/symfony/issues/27600'}
                                target={'_blank'}>
                                symfony/symfony #27600
                            </Link>
                        </ListItem>
                        <ListItem padding={'20px 0'}>🛣 i18n des routes depuis Symfony 4.1</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} style={{ marginBottom: 100 }}>
                        ✨ Nouveautés dans Symfony 4.2 ✨
                    </Heading>
                    <List style={style.list}>
                        <ListItem padding={'20px 0'}>
                            Nouveau formattage de clé pour la pluralisation{' '}
                            <Code>IntlMessageFormatter</Code>
                        </ListItem>
                        <ListItem padding={'20px 0'}>
                            Amélioration de la traduction des URLs
                        </ListItem>
                        <ListItem padding={'20px 0'}>
                            Commande <Code>translation:update</Code> améliorée
                        </ListItem>
                        <ListItem padding={'20px 0'}>
                            Commande <Code>lint:xliff</Code> améliorée
                        </ListItem>
                    </List>
                </Slide>
                <Slide align={'center top'}>
                    <Notes>
                        Initialisez la gestion de traduction, même si le projet commence petit.{' '}
                        <br />
                        Commencez sans SaaS si vous n'en n'avez pas besoin. Juste XLIFF pour
                        démarrer. <br />
                        Pendant la vie du projet, agrandissement d'équipe, env de test, prod ...
                        Ajoutez un SaaS ! <br />
                        <br />
                        <strong>
                            Introduisez les outils au fur et à mesure qu'ils se montrent nécessaires
                        </strong>
                    </Notes>
                    <Heading size={2} caps>
                        À vous de jouer !
                    </Heading>
                    <Text style={style.mt50}>
                        Vous <strong>devez</strong> traduire votre application
                    </Text>
                    <List style={style.list}>
                        <Appear>
                            <ListItem padding={'20px 0'}>Choisissez un SaaS</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                <Code textSize={'30px'}>
                                    composer req php–translation/symfony–bundle
                                </Code>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Utilisez ou créez un Storage Adapter
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>
                                Expliquez à votre équipe le workflow
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem padding={'20px 0'}>Formez votre équipe aux outils</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide align={'center center'}>
                    <Heading size={3} caps style={{ marginBottom: 20 }}>
                        Merci !
                    </Heading>
                    <Image src={images.mic} width={800} />
                    <Text style={{ fontSize: 48 }}>
                        <Link
                            href={'http://bit.ly/meetup-php-lausanne-traduction'}
                            style={{ fontSize: 48 }}>
                            Slides
                        </Link>
                        &nbsp;/&nbsp;
                        <Link
                            href={'https://github.com/welcoMattic/beersfactory/'}
                            style={{ fontSize: 48 }}>
                            Code
                        </Link>
                    </Text>
                </Slide>
            </Deck>
        );
    }
}
