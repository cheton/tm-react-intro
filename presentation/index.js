import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('bootstrap/dist/css/bootstrap.css');

const images = {
    'cheton@github': require('../assets/cheton@github.png'),
    reactLogo: require('../assets/react-logo.png'),
    stateofjs2016: {
        awareness: require('../assets/stateofjs-2016-awareness.png'),
        interest: require('../assets/stateofjs-2016-interest.png'),
        satisfaction: require('../assets/stateofjs-2016-satisfaction.png')
    },
    websitesUsing: {
        angularjs: require('../assets/websites-using-angularjs.png'),
        react: require('../assets/websites-using-react.png'),
        vuejs: require('../assets/websites-using-vuejs.png')
    },
    reactjs101: require('../assets/reactjs101.png'),
    reactjs101TOC: require('../assets/reactjs101TOC.png'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png')
};

preloader(images);

const colors = {
    primary: 'white',
    secondary: 'black'
};
const fonts = {
    primary: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
    secondary: 'Helvetica'
};
const theme = createTheme(colors, fonts);

export default Presentation = () => {
    return (
        <Spectacle theme={theme}>
            <Deck transition={['slide', 'zoom']} transitionDuration={500}>
                <Slide>
                    <Image src={images.reactLogo} height="180px" margin="0 auto" />
                    <Text textSize="1.5em" margin="40px 0 0" bold caps>
                        A JavaScript Library for Building User Interfaces
                    </Text>
                </Slide>
                <Slide
                    bgImage={images['cheton@github']}
                    bgRepeat="no-repeat"
                    bgSize="contain"
                />
                <Slide notes="">
                    <Heading size={2}>
                        Why React
                    </Heading>
                </Slide>
                <Slide notes="前陣子有個老美做了個前端框架問卷調查，包括對 React, Angular, Ember, Vue, Backbone 等的感興趣度及使用滿意度，收到超過 9000 位開發人員的回覆，所以這份數據應該具有相當代表性．">
                    <Heading size={2} fit>
                        2016 JavaScript <br />
                        Front-end Frameworks
                    </Heading>
                    <Heading size={3}>
                        前端框架大調查
                    </Heading>
                    <Text textSize={32} margin="40px 0 0 0">
                        <em>Source: <a href="http://stateofjs.com/2016/frontend/" target="_blank">http://stateofjs.com/2016/frontend/</a></em>
                    </Text>
                </Slide>
                <Slide
                    note="Awareness is pretty much a draw">
                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={images.stateofjs2016.awareness} width="100%" />
                        </div>
                        <div className="col-sm-4">
                            <Heading size={4}>Awareness</Heading>
                            <List ordered>
                                <ListItem textSize="1em">React: 100%</ListItem>
                                <ListItem textSize="1em">Angular: 100%</ListItem>
                                <ListItem textSize="1em">Angular 2: 99%</ListItem>
                                <ListItem textSize="1em">Ember: 97%</ListItem>
                                <ListItem textSize="1em">Backbone: 98%</ListItem>
                                <ListItem textSize="1em">Vue: 77%</ListItem>
                            </List>
                        </div>
                    </div>
                    <Text textSize={32} margin="40px 0 0 0">
                        <em>Source: <a href="http://stateofjs.com/2016/frontend/" target="_blank">http://stateofjs.com/2016/frontend/</a></em>
                    </Text>
                </Slide>
                <Slide
                    note={`
感興趣度，也就是聽過但還沒用過的人，是否有興趣使用該框架．下圖深色代表聽過且有興趣使用，淺色代表聽過但沒興趣使用，圖形長度代表有聽過但是沒用過的人數多寡．
`}
                >
                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={images.stateofjs2016.interest} width="100%" />
                        </div>
                        <div className="col-sm-4">
                            <Heading size={4}>Interest</Heading>
                            <List ordered>
                                <ListItem textSize="1em">React: 74%</ListItem>
                                <ListItem textSize="1em">Vue: 49%</ListItem>
                                <ListItem textSize="1em">Angular 2: 45%</ListItem>
                                <ListItem textSize="1em">Angular: 27%</ListItem>
                                <ListItem textSize="1em">Ember: 26%</ListItem>
                                <ListItem textSize="1em">Backbone: 20%</ListItem>
                            </List>
                        </div>
                    </div>
                    <Text textSize={32} margin="40px 0 0 0">
                        <em>Source: <a href="http://stateofjs.com/2016/frontend/" target="_blank">http://stateofjs.com/2016/frontend/</a></em>
                    </Text>
                </Slide>
                <Slide
                    note={`
使用滿意度，也就是使用過該框架的人，是否打算繼續使用該框架．下圖深色代表用過且打算繼續使用，淺色代表用過但不打算繼續使用，圖形長度代表用過人數多寡．
`}
                >
                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={images.stateofjs2016.satisfaction} width="100%" />
                        </div>
                        <div className="col-sm-4">
                            <Heading size={4}>Satisfaction</Heading>
                            <List ordered>
                                <ListItem textSize="1em">React: 92%</ListItem>
                                <ListItem textSize="1em">Vue: 89%</ListItem>
                                <ListItem textSize="1em">Angular 2: 65%</ListItem>
                                <ListItem textSize="1em">Ember: 48%</ListItem>
                                <ListItem textSize="1em">Angular: 47%</ListItem>
                                <ListItem textSize="1em">Backbone: 32%</ListItem>
                            </List>
                        </div>
                    </div>
                    <Text textSize={32} margin="40px 0 0 0">
                        <em>Source: <a href="http://stateofjs.com/2016/frontend/" target="_blank">http://stateofjs.com/2016/frontend/</a></em>
                    </Text>
                </Slide>
                <Slide>
                    <Image src={images.websitesUsing.angularjs} fit />
                </Slide>
                <Slide>
                    <Image src={images.websitesUsing.vuejs} fit />
                </Slide>
                <Slide>
                    <Image src={images.websitesUsing.react} fit />
                </Slide>
                <Slide
                    transition={['zoom']}
                    note={`
Too long; Didn't read;
1. 選 React 不會錯
2. Vue 是新星
3. Angular 2 優於 Angular
`}
                >
                    <Text textAlign="left" textSize="2em">
                        <strong>TL;DR</strong>
                    </Text>
                    <br />
                    <List>
                        <ListItem textSize="1.6em">You can't go wrong with React</ListItem>
                        <ListItem textSize="1.6em">Vue is the new up-and-comer</ListItem>
                        <ListItem textSize="1.6em">Angular 2 > Angular</ListItem>
                    </List>
                </Slide>
                <Slide
                    note={`
1. Focus on the UI, not a framework
                    `}
                >
                    <Image src={images.reactLogo} height="180px" margin="0 auto" />
                    <Text textSize="1em" margin="40px 0 0" cap>
                        A JavaScript Library for Building User Interfaces
                    </Text>
                    <br />
                    <Layout>
                        <Fill>
                            <Text textSize="1em" bold>Declarative</Text>
                        </Fill>
                        <Fill>
                            <Text textSize="1em" bold>Component-Based</Text>
                        </Fill>
                        <Fill>
                            <Text textSize="1em" bold>Learn Once,<br />Write Anywhere</Text>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    React 的要特點
                    <List>
                        <ListItem textSize="1em">
                            基於元件化思考 (Component-Based
                        </ListItem>
                        <ListItem textSize="1em">
                            用 JSX 進行宣告式 (Declarative) UI 設計
                        </ListItem>
                        <ListItem textSize="1em">
                            使用 Virtual DOM
                        </ListItem>
                        <ListItem textSize="1em">
                            一律重繪 (Always Rerender) 和單向資料流 (Unidirection Data Flow)
                        </ListItem>
                        <ListItem textSize="1em">
                            Learn Once, Write Anywhere
                        </ListItem>
                    </List>
                </Slide>
                <Slide note="React的設計思路認為使用Component比起Template和Display Logic更能實現關注點分離(Separation of Concerns)的概念，而搭配JSX可以實現宣告式的程式撰寫方式．">
                    <Heading size={1} textColor="secondary">
                        Declarative UI
                    </Heading>
                    <br />
                    <Text textAlign="left">The JSX code:</Text>
                    <CodePane
                        lang='jsx'
                        source={require('raw!../assets/declarative-app.jsx.txt')}
                        margin='20px auto'
                    />
                    <CodePane
                        lang='jsx'
                        source={require('raw!../assets/declarative-mailform.jsx.txt')}
                        margin='20px auto'
                    />
                </Slide>
                <Slide>
                    <Heading size={1} textColor="secondary">
                        Components
                    </Heading>
                    <br />
                </Slide>
                <Slide>
                    <Heading size={1} textColor="secondary">
                        Learn Once, Write Anywhere
                    </Heading>
                </Slide>
                <Slide bgImage={images.reactjs101} />
                <Slide>
                    <Image src={images.reactjs101TOC} />
                </Slide>
                <Slide>
                    <Heading
                        textColor="secondary"
                        caps
                        fit
                    >
                        Integrate React into already created apps
                    </Heading>
                    <br />
                    <Layout>
                        <Fill>
                            <Text margin={20}>
                                Isolated State with React
                            </Text>
                        </Fill>
                        <Fill>
                            <Text margin={20}>
                                Shared State with React
                            </Text>
                        </Fill>
                    </Layout>
                </Slide>
            </Deck>
        </Spectacle>
    );
};
