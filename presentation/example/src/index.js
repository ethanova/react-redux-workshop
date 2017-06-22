import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Notes, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';
import CodeSlide from 'spectacle-code-slide';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');
require('../../src/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  debugging: require('../assets/debugging.png'),
  ethan: require('../assets/ethan.png'),
  mounting: require('../assets/mounting.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  hansolo: require('../assets/hansolo.jpg')
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
            { loc: [1, 2], title: 'Here\'s one' },
            { loc: [3, 4], title: 'Here\'s one' },
            { loc: [25, 26], title: 'Here\'s one' },
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
            { loc: [19, 20], title: 'Export, share your component with the world' },
            { loc: [4, 13], title: 'Your component!' },
            { loc: [5, 12], title: 'Where the magic happens' },
          ]}
        />
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            Time for you to make your own component!
          </Heading>
          <List>
            <ListItem>Use the Hands-on1 branch to get started</ListItem>
            <ListItem>Create a header component in src/components/Header/HeaderTitle.js and import it in its sibling Header.js</ListItem>
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
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={5}>
            HeaderTitle.js
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.2.example')}
            margin="20px auto"
          />
          <Heading size={5}>
            Header.js
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.1.example')}
            margin="20px auto"
          />
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={5}>
            Functional component
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/code/simple.component.2.example')}
            margin="20px auto"
          />
          <Heading size={5}>
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
          <Heading size={1} fit caps>
            Recap for hands on activity 2
          </Heading>
          <List textColor="white">
            <ListItem>Branch: Hands-on2</ListItem>
            <ListItem>Code: src/routes/home/components/homeview.js</ListItem>
            <ListItem>If input is given value prop, give it onChange prop and pass a function</ListItem>
            <ListItem>this.setState({'{}'}) can set state inside a class member function, but don't forget to this.myFunc = this.myFunc.bind(this) that function in the constructor</ListItem>
            <ListItem>this.state = {'{}'} can be done in the constructor to set default values</ListItem>
            <ListItem>this.state.myProperty is how you access your info</ListItem>
          </List>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>
            You've used member functions, now do it to "compute" something and output it at the bottom of the component
          </Heading>
          <List textColor="white">
            <ListItem>Branch: Hands-on3</ListItem>
            <ListItem>Code: src/routes/home/components/homeview.js</ListItem>
            <ListItem>Use member function to compute something based on state, like if pilot === 'Ethan' then output "Wow you have the best pilot"</ListItem>
            <ListItem>Inside JSX, you can write Javascript inside { '{ curly brackets }' } to have it execute</ListItem>
            <ListItem>Remember to access your member functions off of "this" variable (i.e. this.myFunc)</ListItem>
          </List>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading size={1} fit caps>React Lifecycle</Heading>
          <Heading size={4} fit caps>That's right! Your components have lives! They Live! And Die :(</Heading>
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
        <Slide bgImage={images.hansolo.replace('/', '')} />
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










        <Slide bgImage={images.city.replace('/', '')} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="lightBlue">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="lightBlue">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="lightBlue">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading caps fit size={1} textColor="lightBlue">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
            `}
          </Markdown>
        </Slide>
        {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
          `
        }
        <Slide bgColor="lightBlue">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <SlideSet>
          <Slide bgColor="secondary" textColor="lightBlue">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="lightBlue">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
        </SlideSet>
        <Slide bgColor="lightBlue"
          notes="Hard to find cities without any pizza"
        >
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem/>
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem/>
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem/>
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="lightBlue">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
