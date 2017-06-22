import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Notes, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';
import CodeSlide from 'spectacle-code-slide';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

require('normalize.css');
require('../../src/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  debugging: require('../assets/debugging.png'),
  ethan: require('../assets/ethan.png'),
  mounting: require('../assets/mounting.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  hansolo: require('../assets/hansolo.jpg'),
  redux: require('../assets/redux.png'),
  noTime: require('../assets/notime.jpg'),
  lifecycle: require('../assets/lifecycle.png'),
};

preloader(images);

const theme = createTheme({
  darkBlue: '#0A28C0',
  lightBlue: '#0A83CA',
  teal: '#00B3A2',
  greenBlue: '#0ACA58',
  green: '#1AC006'
});

const notes = {
  goal: 'Joke about you\'re just here to see famous little ol me. \r\nGathered here today to ' +
    'RAISE YOU UP from the ignorance of Jquery, to SAVE YOUR SOULS and bring to you the light of REACT',
  title: 'Be cool',
};

const codeCartoonSlide = (
  <Slide bgColor="lightBlue">
    <Image src={images.redux.replace('/', '')} margin="0px auto 40px" height="400px"/>
    <Link href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">
      <Text bold caps textColor="white">Credit to www.Code-Cartoons.com</Text>
    </Link>
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transitionDuration={500}>
        <Slide id="title" transition={['zoom']} bgColor="lightBlue" notes={notes.title}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            React/Redux Workshop
          </Heading>
          <Heading size={1} fit caps>
            An EthanFilm Presentation
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Bringing you into the wonderful world of modern web apps
          </Heading>
          <Link href="https://github.com/ethanova/react-redux-workshop">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
        </Slide>
        <Slide id="goal" bgColor="black" notes={notes.goal}>
          <Image src={images.ethan.replace('/', '')} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit caps>
            We gather here today...
          </Heading>
          <Notes>
            <ol>
              <li>You're just here to see little ol me</li>
              <li>Celebrate the death of jquery</li>
              <li>We're gathered here today to RAISE YOU UP from the ignorance of jquery, to SAVE YOUR SOULS
                and bring to you the light of REACT</li>
              <li>Walk away being able to use it or at least be familiar</li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          width="90%"
          textSize="1.5rem"
          code={require('raw-loader!../assets/code/jquery-spaghetti.1.example')}
          ranges={[
            { loc: [0, 32], title: 'jQuery Spaghetti and Debugability' },
            { loc: [0, 32], title: 'Which is breaking your code?' },
            { loc: [1, 2], title: 'Is it this one?' },
            { loc: [3, 4], title: 'Come out, come out wherever you are!' },
            { loc: [25, 26], title: 'AH HA! Wait. Maybe.' },
          ]}
        />
        <Slide bgColor="lightBlue" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1} fit caps>
            React is so much easier
          </Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/code/spaghetti-fix.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            React is all about re-usable components
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/lists.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Jquery isn't about that life
          </Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/code/lists-bad.example')}
            margin="20px auto"
          />
          <Notes>
            <ol>
              <li>Compiled code, will know when react is wrong, not with jquery tho</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Image src={images.noTime.replace('/', '')} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Let's examine a react component
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          width="90%"
          textSize="1.5rem"
          code={require('raw-loader!../assets/code/react.component.example')}
          ranges={[
            { loc: [0, 3], title: 'Imports' },
            { loc: [0, 1], title: 'Gotta have it' },
            { loc: [1, 3], title: 'Whatever else your component needs' },
            { loc: [4, 5], title: 'Component declaration' },
            { loc: [14, 18], title: 'Optional, but important' },
            { loc: [14, 18], title: 'Validates during compile AND runtime! :O' },
            { loc: [19, 20], title: 'Share your baby with the world' },
            { loc: [4, 13], title: 'Your component!' },
            { loc: [5, 12], title: 'Where the magic happens' },
            { loc: [6, 11], title: 'Render has to have a root element, like <div></div>' },
          ]}
        />
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Time for you to make your own component!
          </Heading>
          <List textColor="white">
            <ListItem>Use the Hands-on1 branch to get started</ListItem>
            <ListItem>Create a simple "Pod-Racer" header component in src/components/Header/HeaderTitle.js</ListItem>
            <ListItem>Import it in its sibling, Header.js</ListItem>
            <ListItem>Don't forget to use yarn start from cmd prompt in that directory to see the app on localhost:3000</ListItem>
          </List>
        </Slide>
        <Slide bgColor="lightBlue">
          <CodePane
            lang="jsx"
            textSize="1.2rem"
            source={require('raw-loader!../assets/code/react.component.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={5} textColor="white">
            HeaderTitle.js
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.2.example')}
            margin="20px auto"
          />
          <Heading size={5} textColor="white">
            Header.js
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.1.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={5} caps textColor="white">
            Functional component
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.2.example')}
            margin="20px auto"
          />
          <Heading size={5} caps textColor="white">
            Class component
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.3.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1}>
            Let's do data input!
          </Heading>
          <Text>Checkout Hands-on2 branch - don't worry about which file yet</Text>
        </Slide>
        <Slide bgColor="lightBlue">
          <ComponentPlayground
            width="90%"
            textSize="1.5rem"
            code={require('raw-loader!../assets/code/textboxes.1.example')}
            theme="dark"
          />
          <Notes>
            Show value on its own first. Then with onChange. Then with the function. Then with binding.
            Explain state: I know in my head my favorite tv show, you don't, unless I use a callback and tell you.
            I can access it inside me and change it. setState() merges.
          </Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Text textColor="white">Code: src/routes/home/components/homeview.js</Text>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/textboxes.2.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            You've used member functions, now use one to display data at the bottom of the component
          </Heading>
          <List textColor="white">
            <ListItem>Branch: Hands-on3</ListItem>
            <ListItem>Code: src/routes/home/components/homeview.js</ListItem>
            <ListItem>Use member function to compute if pilot === 'YourName' then output "OMG they're the best!"</ListItem>
            <ListItem>Inside JSX, you can write Javascript inside { '{ curly brackets }' } to have it execute</ListItem>
            <ListItem>Remember to access your member functions off of "this" variable (i.e. this.myFunc)</ListItem>
          </List>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>React Lifecycle</Heading>
          <Heading size={4} fit caps>That's right! Your components have lives! They Live! And Die :(</Heading>
          <Image src={images.lifecycle.replace('/', '')} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide bgColor="lightBlue">
          <Text>A couple of the notable lifecycle events...</Text>
          <List>
            <ListItem>constructor</ListItem>
            <ListItem>componentWillReceiveProps</ListItem>
            <ListItem>render</ListItem>
            <ListItem>componentDidMount</ListItem>
          </List>
          <Text>Find them at https://facebook.github.io/react/docs/react-component.html</Text>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>React Ref & the DOM</Heading>
          <Notes>Ref allows you to access a certain element after render. Like when you need to access it during...</Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Image src={images.mounting.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          width="90%"
          textSize="1.5rem"
          code={require('raw-loader!../assets/code/ref.example')}
          ranges={[
            { loc: [0, 112], title: 'Using Refs' },
            { loc: [67, 68], title: 'Define the ref' },
            { loc: [63, 69], title: 'Access this element' },
            { loc: [20, 26], title: 'Use the ref' },
            { loc: [22, 25], title: 'May be necessary in IE' }
          ]}
        />
        <Slide bgImage={images.debugging.replace('/', '')} />
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>Props</Heading>
        </Slide>
        <Slide bgColor="lightBlue">
          <Image src={images.hansolo.replace('/', '')} margin="0px auto 40px" height="293px"/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          width="90%"
          textSize="1.5rem"
          code={require('raw-loader!../assets/code/ref.example')}
          ranges={[
            { loc: [0, 112], title: 'Using Props' },
            { loc: [63, 69], title: 'All default elements have props' },
            { loc: [64, 65], title: '"class" is reserved, use className for css' },
            { loc: [65, 68], title: 'Lots of others, Google it' },
          ]}
        />
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>Redux</Heading>
        </Slide>
        { codeCartoonSlide }
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Action Creators
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/actionCreator.example')}
            margin="20px auto"
          />
          <Text textColor="white">They go in src/store/game.js</Text>
        </Slide>
        { codeCartoonSlide }
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Container Component
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/container.component.example')}
            margin="20px auto"
          />
          <Text textColor="white">Build yours! src/routes/Home/components/HomeView.cont.js</Text>
          <Notes>
            I want you to build out your container component, have it dispatch a save pod action and pass the data to the store.
            Check it out in the redux dev tools! and the debugger!
          </Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            The wrapped, "dumb" component
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/containerToProps.example')}
            margin="20px auto"
          />
          <Text textColor="white">For you, branch Hands-on4 - src/routes/Home/components/ HomeView.cont.js & HomeView.js</Text>
          <Notes>
            I want you to build out your container component, have it dispatch a save pod action and pass the data to the store.
            Check it out in the redux dev tools! and the debugger!
            Next - show you what happens when the store gets it, but first, initial state.
          </Notes>
        </Slide>
        { codeCartoonSlide }
        <Slide bgColor="lightBlue">
          <Heading size={5} textColor="white" caps>
            Initial State
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/initialState.example')}
            margin="20px auto"
          />
          <Text textColor="white">(It's in src/store/game.js with your reducer)</Text>
          <Notes>Go ahead and create this in yours, we're just going to save an array of pods into state for now</Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={5} textColor="white" caps>
            Reducer-ing your action
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/reducer.example')}
            margin="20px auto"
          />
          <Text textColor="white">(Use Hands-on5 branch, src/store/game.js)</Text>
          <Notes>
            Your reducer (all of them) will get this action and decide what to do with it.
            Hand someone a book for state, a sheet of paper for action, and tell them to rewrite it and give that back.
          </Notes>
        </Slide>
        { codeCartoonSlide }
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Make a new Container Component!
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/container.component.example')}
            margin="20px auto"
          />
          <Text textColor="white">Hands-on6 Branch: src/routes/Home/components/PodList.cont.js and PodList.js, import in HomeView, show at bottom</Text>
          <Notes>
            I want you to build out your container component, have it dispatch a save pod action and pass the data to the store.
            Check it out in the redux dev tools! and the debugger!
          </Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Make a new Container Component!
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/mapAndKey.example')}
            margin="20px auto"
          />
          <Text textColor="white">Use .map() on arrays, make sure array-ed elements have key= prop</Text>
          <Notes>
            If you don't have key, React won't know what element goes where when it re-renders
          </Notes>
        </Slide>
        { codeCartoonSlide }
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Async Actions
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/asyncAction.example')}
            margin="20px auto"
          />
          <Notes>
            If you don't have key, React won't know what element goes where when it re-renders
          </Notes>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Extra Credit
          </Heading>
        </Slide>
        

        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>Extra resources</Heading>
          <List>
            <ListItem>Redux videos, by creator of redux - https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree</ListItem>
            <ListItem>The redux code cartoon - https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
