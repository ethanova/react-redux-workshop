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
  ethan: require('../assets/ethan.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
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
          <Link href="https://github.com/FormidableLabs/spectacle">
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
              <li>We're gathered here today to RAISE YOU UP from the ignorance of jquery, to SAVE YOUR SOULS
                and bring to you the light of REACT</li>
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
          <Heading size={1} caps>
            Jquery is not
          </Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/code/lists-bad.example')}
            margin="20px auto"
          />
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
        </Slide>


        <Slide>
          <ComponentPlayground
            theme="dark"
          />
        </Slide>
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
