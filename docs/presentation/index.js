import React from 'react';
import {
    Appear, CodePane, Code, Deck, Fill, Fit, Heading, Image,
    Layout, Link, ListItem, List, S, Slide, Text,
} from 'spectacle';
import SfLiveSlide from './sfliveslide';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import images from './images';
import style from './style';

require('normalize.css');
require('prismjs/components/prism-twig');
require('prismjs/components/prism-ini');
preloader(images);
const colors = {
    black: "#2b2b2a",
    white: "white",
    yellow: "#f7d325",
};
const fonts = {
    primary: "Montserrat",
    secondary: "Helvetica",
};
const theme = createTheme(colors, fonts);
theme.screen.progress.number.container.color = colors.black;
theme.screen.global.body.background = colors.white;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme} transition={[]} textColor={colors.black} controls={null}
                  bgColor={colors.white} progress="number" contentWidth={1440}>
                <Slide align={'center top'}>
                    <Heading size={3} caps textColor="black">Traduire efficacement</Heading>
                    <Heading size={3} caps textColor="black" style={{marginTop: 50}}>une application Symfony</Heading>
                    <Image src={images.sfliveTransparent} height={350} style={{marginTop: 150}}></Image>
                </Slide>
                <Slide bgColor="white" align={'center top'}>
                    <Layout>
                        <Fill>
                            <Image src={images.avatar} display="inline" width={300}/>
                            <Text margin={30}>
                                <strong>@welcomattic</strong><br/>
                                &nbsp;sur&nbsp;
                                <Link href={'https://twitter.com/welcomattic'} target="_blank">Twitter</Link>
                                &nbsp;et&nbsp;
                                <Link href={'https://github.com/welcomattic'} target="_blank">GitHub</Link>
                            </Text>
                        </Fill>
                        <Fill>
                            <Heading size={3} lineHeight={1} textColor="black">
                                Mathieu Santostefano
                            </Heading>
                            <Text>
                                Symfony, JS, Docker, Elasticsearch ...
                            </Text>
                            <Image src={images.jolicode} display="inline" margin={50}/>
                        </Fill>
                    </Layout>
                </Slide>
                <SfLiveSlide notes="
                    Les 2 sont nécessaires pour traduire complètement une application. Mais gérées différemment
                ">
                    <Heading size={3} textColor={colors.black}>Traduction de l'UI</Heading>
                    <Image src={images.versus} width={150} style={{marginTop: 50}}/>
                    <Heading size={3} textColor={colors.black} style={{marginTop: 50}}>Traduction du contenu</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Focus sur la gestion de la traduction de l'UI. Le contenu est une autre problématique, qui peut faire l'objet d'une autre conférence, qui sait ?
                ">
                    <Heading size={1}>🔎</Heading>
                    <Heading size={1} textColor={colors.black} style={{marginTop: 50}}>Traduction de l'UI</Heading>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Retour d'experience sur la mise en place de traduction au sein d'un projet d'envergure <br><br>
                    Comment en est-on arrivé à un workflow fluide et efficace pour tous ?
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🎁</Heading>
                    <Text textSize={'64px'} style={{ lineHeight: '90px' }}>
                        <strong>Fluidifier</strong> le processus de traduction d'une application grâce à des <strong>outils</strong> dédiés pour <strong>chaque intervenant</strong> au projet
                    </Text>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    Que dit le W3C à ce sujet ?
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🎓</Heading>
                    <Heading size={2} style={{marginBottom: 100}}>i18n & l10n</Heading>
                    <Appear>
                        <Link href={'https://www.w3.org/International/questions/qa-i18n'} target={"_blank"}
                              textSize={'48px'}>
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
                    <Appear>
                        <CodePane lang="twig" style={{fontSize: 28, marginTop: '50px'}}
                                  theme={'external'}
                                  source={require(
                                      "raw-loader!../assets/code/index.html.twig"
                                  )}
                        />
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    La <strong>localisation</strong> fait référence à l’adaptation d’une application et de son contenu afin de répondre aux exigences linguistiques, culturelles ou autres d’un marché défini. <br>
                    [APPEAR]
                    Et de personnes connaissant un pays, une culture cible
                ">
                    <Heading size={3}>l10n – Localization</Heading>
                    <Appear>
                        <Text style={{marginTop: 50}}>
                            Nécessite (très souvent) l'intervention de traducteurs
                        </Text>
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide bgColor={'#322931'}>
                    <CodePane lang="html" style={{fontSize: 26}}
                              theme={'external'}
                              source={require(
                                  "raw-loader!../assets/code/messages.fr.xlf"
                              )}
                    />
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] Quand ?<br>
                    [APPEAR] Qui, quoi ?<br>
                    [APPEAR] Pourquoi ?<br>
                ">
                    <Heading size={1} style={{marginBottom: 50}}>🌐</Heading>
                    <Heading size={2} caps>Traduire son application ?</Heading>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>À mettre en place le plus tôt possible</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Ressources (techniques, humaines)</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Déploiement dans plusieurs pays</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    [APPEAR] <br>
                    - po, mo -> gettext: bibliothèque écrite en C utilisée pour l'i18n de programmes. .mo (binaire) Pas pour le web <br>
                    - xliff -> standard dans le monde la traduction. Format par défaut dans Symfony. Recommandé pour le web, dérivé de xml
                ">
                    <Heading size={2} caps>Les standards</Heading>
                    <Layout>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Formats de fichiers</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>.po, .mo (gettext)</ListItem>
                                    <ListItem padding={"20px 0"}>.xlf (xliff)</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Text style={{marginTop: 50}}><S type={'bold'}>Outils</S></Text>
                                <List style={style.listHalf}>
                                    <ListItem padding={"20px 0"}>poedit (Windows, macOS, Linux)</ListItem>
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
                    <Heading size={2} caps>Comment font ces CMS/CMF ?</Heading>
                    <Layout>
                        <Fill>
                            <Text style={{marginTop: 50}}><S type={'bold'}>Wordpress</S></Text>
                            <List style={{ width: '560px', margin: '50px auto' }}>
                                <ListItem padding={"20px 0"}>.po</ListItem>
                                <ListItem padding={"20px 0"}><Link href={'https://translate.wordpress.org/'}>translate.wordpress.org</Link></ListItem>
                                <ListItem padding={"20px 0"}>i18n des plugins & l10n dans une langue minimum</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <Text style={{marginTop: 50}}><S type={'bold'}>Drupal</S></Text>
                            <List style={{ width: '540px', margin: '50px auto' }}>
                                <ListItem padding={"20px 0"}>.po</ListItem>
                                <ListItem padding={"20px 0"}><Link href={'https://localize.drupal.org/'}>localize.drupal.org</Link></ListItem>
                                <ListItem padding={"20px 0"}>i18n des modules contrib & l10n dans une langue minimum</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide align={'center center'}>
                    <Heading size={2} caps lineHeight={2}>Quels problèmes, quelles difficultés ?</Heading>
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
                                <List style={{ width: '560px', margin: '50px auto' }}>
                                    <ListItem padding={"20px 0"}>Développeurs backend</ListItem>
                                    <ListItem padding={"20px 0"}>Développeurs frontend</ListItem>
                                    <ListItem padding={"20px 0"}>Intégrateurs</ListItem>
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
                        <Appear><ListItem padding={"20px 0"}>Responsabilité de l'ajout de nouvelles clés</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Nomenclature des clés</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Synchronisation entre code et traduction</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Déploiement de correction de messages</ListItem></Appear>
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
                                    <ListItem padding={"20px 0"}>😊 .xlf dans Git</ListItem>
                                </List>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <List style={style.listNoBulletsSmall}>
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
                    <List style={style.listNoBullets}>
                        <Appear><ListItem padding={"20px 0"}>🤔 Tout dans <Code>window.TRANSLATIONS</Code></ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>🔓 Leak possible d'infos sensibles</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>🎡 Gestion des paramètres, du pluriel ...</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Vous l'aurez compris, la traduction d'une app ce n'est pas trivial. <br>
                    Ça s'anticipe, ça demande une définition du besoin de la traduction <br>
                    Et du temps pour la mise en place d'un workflow <br><br>

                    Voyons maintenant comment régler la plupart de ces problèmes !
                ">
                    <Image src={images.baby} height={'700px'}></Image>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Dans mon expérience, j'ai souvent vu des solutions maison qui demandaient un déploiement de la part des développeurs.
                ">
                    <Heading size={2} caps>Solutions "maison"</Heading>
                    <Text style={{marginTop: 50}}>Spécifiques à un projet, une équipe ou un client</Text>
                    <Text style={{marginTop: 50}}>Nécessite souvent un déploiement</Text>
                    <Text style={{marginTop: 50}}>Non battle-tested</Text>
                    <Text style={{marginTop: 50}}>Rarement industrialisable</Text>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    👍 pour la gestion externe des clés/messages <br>
                    Transifex, PhraseApp, PoEditor <br><br>

                    Délégation de l'interface de gestion des langues. Du versionning des traductions, de leur état ...<br><br>

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
                    <Image src={images.comparatif} style={{marginTop: 50, width: '100%'}} />
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>L'Organisation</Heading>
                    <Heading size={2} caps>PHP–Translation</Heading>
                    <Layout style={{marginTop: 50}}>
                        <Fill>
                            <Image src={images.avatar} width={100}/>
                            <Text>Tobias Noyholm</Text>
                        </Fill>
                        <Fill>
                            <Image src={images.avatar} width={100}/>
                            <Text>Victor Bocharsky</Text>
                        </Fill>
                    </Layout>
                    <Layout style={{marginTop: 50}}>
                        <Fill>
                            <Image src={images.avatar} width={100}/>
                            <Text>Damien Alexandre</Text>
                        </Fill>
                        <Fill>
                            <Image src={images.avatar} width={100}/>
                            <Text>Mathieu Santostefano</Text>
                        </Fill>
                        <Fill>
                            <Image src={images.avatar} width={100}/>
                            <Text>and all contributors</Text>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Interface et classes communes à tous les outils <br><br>

                    Message (représente une traduction) <br>
                    Extractor (celui du composant Translation) <br><br>

                    Storage Adapter (stockage des clés/messages) <br>
                    Client d'API des SaaS ou de Flysystem, voire des .xlf <br>
                    Même tout à la fois !! <br><br>

                    Translator (traduction automatique) <br>
                ">
                    <Heading size={3} caps>Outils PHP pour l'i18n</Heading>
                    <Layout>
                        <Fill>
                            <List style={style.listHalf}>
                                <ListItem padding={"20px 0"}>Message</ListItem>
                                <ListItem padding={"20px 0"}>Extractor</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List style={style.listHalf}>
                                <ListItem padding={"20px 0"}>Storage Adapter</ListItem>
                                <ListItem padding={"20px 0"}>Translator</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                    <Appear>
                        <div>
                            <Heading size={3} caps></Heading>
                            <List style={style.list}>
                                <ListItem padding={"20px 0"}>Framework-agnostic : package PHP, bundle Symfony, package Laravel</ListItem>
                                <ListItem padding={"20px 0"}>Support de plusieurs SaaS comme Transifex, Loco, PhraseApp</ListItem>
                            </List>
                        </div>
                    </Appear>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={3} caps>Bundle Symfony</Heading>
                    <Layout>
                        <Fill>
                            <List style={style.list}>
                                <ListItem padding={"20px 0"}>Configuration de Storage Adapters (SaaS, fichiers locaux ...)</ListItem>
                                <ListItem padding={"20px 0"}>Commandes (<Code textSize={26}>extract</Code>, <Code textSize={26}>download</Code>, <Code textSize={26}>sync</Code>, <Code textSize={26}>status</Code>)</ListItem>
                                <ListItem padding={"20px 0"}>Outils d'édition des messages (Panel Profiler, WebUI, EditInPlace)</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xlf et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>Profiler</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.profiler} width={1000}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Permet l'ajout rapide des clés manquantes <br>
                    Ajout simultané dans les .xlf et sur le SaaS si configuré
                ">
                    <Heading size={3} caps>Profiler</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.edit} width={1000}/>
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
                            <Image src={images.webuiDashboard} style={{height: 600}} />
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
                            <Image src={images.webuiPage}  style={{height: 650}} />
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    ⚠️ à sécuriser avec un ROLE_ADMIN <br>
                    Permet aux recetteurs, testeurs, rédacteurs, de corriger une traduction à la volée. <br>
                    Synchro avec le SaaS instantanée
                ">
                    <Heading size={3}>EditInPlace</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.editinplace} width={1000} style={{marginTop: '100px'}}/>
                        </Fill>
                    </Layout>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={3}>Nomenclature de clés</Heading>
                    <Image src={images.table} style={{marginTop: '50px'}}/>
                </SfLiveSlide>
                <SfLiveSlide bgColor={'#322931'}>
                    <Heading size={3} textColor="papayawhip">php-translation.yaml</Heading>
                    <CodePane lang="yaml" style={{fontSize: 28, marginTop: '50px'}}
                              theme={'external'}
                              source={require(
                                  "raw-loader!../assets/code/php-translation.yaml"
                              )}
                    />
                </SfLiveSlide>
                <SfLiveSlide bgColor={'#322931'}>
                    <Heading size={3} textColor="papayawhip">services.yaml</Heading>
                    <CodePane lang="yaml" style={{fontSize: 36, marginTop: '50px'}}
                              theme={'external'}
                              source={require(
                                  "raw-loader!../assets/code/services.yaml"
                              )}
                    />
                </SfLiveSlide>
                <SfLiveSlide bgColor={'#322931'}>
                    <Heading size={3} textColor="papayawhip">NoTranslator.php</Heading>
                    <CodePane lang="php" style={{fontSize: 28, marginTop: '50px'}}
                              theme={'external'}
                              source={require(
                                  "raw-loader!../assets/code/NoTranslator.php"
                              )}
                    />
                </SfLiveSlide>
                <SfLiveSlide bgColor={'#322931'}>
                    <Heading size={3} textColor="papayawhip">crontab</Heading>
                    <CodePane lang="ini" style={{fontSize: 30, marginTop: '50px'}}
                              theme={'external'}
                              source={'*/15 * * * * php bin/console translation:download -n --cache --no-debug'}
                    />
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Synchronisation des traductions indépendantes de l'environnement (dev/prod) <br><br>
                    Ne pas versionner les .xlf si SaaS, au deploy on download les translations, et on les stock comme un dossier de medias, partagé entre les versions déployées <br><br>
                    Chaque intervenant a son outil pour gérer les traductions <br><br>
                    Plus besoin de déployer l'application pour corriger une faute
                ">
                    <Heading size={3} caps>SaaS + php–translation = 😍</Heading>
                    <Heading size={4} caps style={{marginTop: 150}}>On règle les problèmes</Heading>
                    <List style={style.list}>
                        <ListItem padding={"20px 0"}>Convention : nomenclature</ListItem>
                        <ListItem padding={"20px 0"}>Stockage : SaaS (+ .xlf)</ListItem>
                        <ListItem padding={"20px 0"}>Édition des messages : chacun son outil</ListItem>
                        <ListItem padding={"20px 0"}>Indépendance : crontab</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Image src={images.schema} width={700}/>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    BazingaJsTranslationBundle <br>
                    Sur le bundle php-transaltion <br>
                    Sur Symfony
                ">
                    <Heading size={3} caps>Il en reste</Heading>
                    <List style={style.listNoBullets}>
                        <ListItem padding={"20px 0"}>🖥 Solution frontend BazingaJsTranslationBundle ?</ListItem>
                        <ListItem padding={"20px 0"}>💥 Gestion du cache <br/>
                            <Link href={"https://github.com/php-translation/symfony-bundle/issues/198"}
                                  target={"_blank"}>php-translation/symfony-bundle #198</Link>
                        </ListItem>
                        <ListItem padding={"20px 0"}>
                            <S type={'strikethrough'}>
                                🛣 i18n des routes
                                <Link href={"https://github.com/symfony/symfony/pull/26143"}
                                      target={"_blank"}> PR #26143</Link>
                            </S>
                            <Text>🎉 Merged!</Text>
                        </ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide notes="
                    Évolution du Profiler et WebUi
                ">
                    <Heading size={2} caps style={{marginBottom: 150}}>Encore plus loin ?</Heading>
                    <List style={style.list}>
                        <ListItem padding={"20px 0"}>Ajoutez vos Storage Adapters (lingohub, poeditor, redis, doctrine ...)</ListItem>
                        <ListItem padding={"20px 0"}>Évolution des outils d'édition</ListItem>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps>À vous de jouer !</Heading>
                    <Text style={{marginTop: 50}}>Vous devez traduire votre application</Text>
                    <List style={style.list}>
                        <Appear><ListItem padding={"20px 0"}>Choisissez un SaaS</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}><Code textSize={'30px'}>composer req php–translation/symfony–bundle</Code></ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Utilisez ou créez un Storage Adapter</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Expliquez à votre équipe le workflow</ListItem></Appear>
                        <Appear><ListItem padding={"20px 0"}>Formez votre équipe aux outils</ListItem></Appear>
                    </List>
                </SfLiveSlide>
                <SfLiveSlide>
                    <Heading size={2} caps style={{marginBottom: 50}}>Merci !</Heading>
                    <Image src={images.mic} width={800} style={{marginBottom: 50}}/>
                    <Text style={{marginTop: 150}} style={{fontSize: 24}}>📝 <Link href={"https://jolicode.com/blog/how-to-properly-manage-translations-in-symfony"} target={"_blank"}>Blog post (EN) sur le sujet</Link></Text>
                    <Text style={{marginTop: 200}} style={{fontSize: 24}}>🖥 <Link href={"http://welcomattic.github.io/traduire-efficacement-une-app-symfony/"} target={"_blank"}>JoindIn TODO</Link></Text>
                </SfLiveSlide>
            </Deck>
        );
    }
}
