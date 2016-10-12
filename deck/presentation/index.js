// Import React
import React from "react";

import { FaGithub, FaHome, FaRefresh, FaTwitter } from "react-icons/lib/fa";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  asyncspecs: require("../assets/async-specs.png"),
  blip: require("../assets/tideline.png"),
  canaryalive: require("../assets/canary-alive.jpg"),
  canarydead: require("../assets/canary-dead.jpg"),
  crater: require("../assets/martian-crater.jpg"),
  firstspecs: require("../assets/master-specs.png"),
  gottamakewater: require("../assets/gotta-make-water.gif"),
  injection: require("../assets/insulin-injection.jpg"),
  insulin: require("../assets/insulin.jpg"),
  islets: require("../assets/pancreatic-islets.png"),
  kitten: require("../assets/high-stakes-kitten.gif"),
  martian: require("../assets/the-martian.jpg"),
  mco: require("../assets/mars-climate-orbiter.jpg"),
  me: require("../assets/me.jpg"),
  mocktimersspecs: require("../assets/mock-timers-specs.png"),
  pump: require("../assets/insulin-pump.jpg"),
  rowhouses: require("../assets/row-houses.jpg"),
  tidepool: require("../assets/tidepool_logo.png"),
  utilsspecs: require("../assets/utils-specs.png"),
  water: require("../assets/water-via-combustion.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#C64208", // bright orange-red
  secondary: "#461703", // dark blood red
  tertiary: "#CF7047" // lightish orange
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="number" transition={["fade"]} transitionDuration={500}>
          <Slide bgImage={images.kitten}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              High-stakes React
            </Heading>
            <Heading size={3} textColor="primary">
              Jana E. Beck
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} fit lineHeight={1} textColor="tertiary">
              What is testing
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              for?
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Text lineHeight={1.25} style={{ fontSize: "7rem" }}>
              🐜 🐛 🐌
            </Text>
            <Text lineHeight={1.25} style={{ fontSize: "7rem" }}>
              🐛 🐞 🦂 🐞 🐛
            </Text>
            <Text lineHeight={1.25} style={{ fontSize: "7rem" }}>
              🐌 🐛 🐜
            </Text>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              🐜 🐞 🐛 bug 🐛 🐞 🐜
            </Heading>
            <Heading size={3} fit lineHeight={1} textColor="white">
              management
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Text lineHeight={1.25} style={{ fontSize: "8rem" }}>
              📃 📄 📃
            </Text>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              documentation
            </Heading>
            <Text lineHeight={1.25} style={{ fontSize: "8rem" }}>
              📄 📃 📄
            </Text>
          </Slide>
          <Slide bgDarken={0.5} bgImage={images.rowhouses}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              architecture
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={1.25} size={2} caps textColor="white">
              clean architecture
            </Heading>
            <Text style={{ color: "white", fontSize: "8rem" }}>
              <FaRefresh />
            </Text>
            <Heading lineHeight={1.5} size={2} caps textColor="white">
              testability
            </Heading>
          </Slide>
          <Slide bgImage={images.me}>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaHome/>: <S type="bold">janabeck.com</S>
            </Text>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaGithub/>: <S type="bold">@jebeck (& elsewhere)</S>
            </Text>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaTwitter/>: <S type="bold">@iPancreas</S>
            </Text>
          </Slide>
          <Slide bgColor="secondary">
            <Image src={images.tidepool} style={{ border: "25px solid white" }} width="100%" />
          </Slide>
          <Slide bgImage={images.blip}>
            <Heading size={1} style={{ fontSize: "12rem" }} textColor="#281946">
              blip
            </Heading>
          </Slide>
          <Slide bgDarken={0.25} bgImage={images.islets}>
            <Heading lineHeight={1.5} size={3} textColor="white">
              (autoimmune disease)
            </Heading>
            <Text style={{ fontSize: "8rem" }}>
              ☠ 😵 ☠
            </Text>
            <Text lineHeight={1.25} style={{ fontSize: "8rem" }} textColor="white">
              pancreatic <S type="bold">𝛽-cells</S>
            </Text>
            <Text style={{ fontSize: "1.5rem", marginTop: "2rem" }} textColor="white">
              TODO: add photo credit
            </Text>
          </Slide>
          <Slide bgImage={images.injection}/>
          <Slide bgImage={images.pump}/>
          <Slide bgImage={images.insulin}>
            <Text textSize="8rem" style={{ float: "right" }}>☠ 😵 ⚰</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1.5} textColor="tertiary">
              Let's find
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              a (good) example
            </Heading>
          </Slide>
          <Slide bgImage={images.mco}/>
          <Slide bgImage={images.martian}/>
          <Slide bgImage={images.gottamakewater}/>
          <Slide bgImage={images.crater}>
            <Heading size={3} textColor="white">
              (actual Mars)
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} fit caps textColor="white">
              3 ingredients
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Text style={{ fontSize: "8rem" }}>
              ⚗ ⚗ ⚗
            </Text>
            <Heading size={1} fit caps textColor="white">
              2 interactions
            </Heading>
            <Text style={{ fontSize: "8rem" }}>
              🔥 🔥 🔥
            </Text>
          </Slide>
          <Slide bgColor="tertiary">
            <Text style={{ fontSize: "8rem" }}>
              💧 💧 💧 💧 💧
            </Text>
            <Heading size={1} fit caps textColor="white">
              1 product
            </Heading>
            <Text style={{ fontSize: "8rem" }}>
              💧 💧 💧 💧 💧
            </Text>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={2} size={3} textColor="white">
              ingredient #1
            </Heading>
            <Heading size={2} fit caps textColor="secondary">
              hydrazine (N₂H₄)
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={2} size={3} textColor="secondary">
              interaction #1
            </Heading>
            <Heading size={2} fit caps textColor="white">
              hydrazine tank valve
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={2} size={3} textColor="white">
              ingredient #2
            </Heading>
            <Heading size={2} fit caps textColor="secondary">
              hydrogen (H₂)
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={2} size={3} textColor="secondary">
              interaction #2
            </Heading>
            <Heading size={2} fit caps textColor="white">
              burn wood shavings
            </Heading>
            <Heading size={2} fit textColor="white">
              (ignite oxyhydrogen)
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading lineHeight={2} size={3} textColor="white">
              ingredient #3
            </Heading>
            <Heading size={2} fit caps textColor="secondary">
              oxygen (O₂)
            </Heading>
          </Slide>
          <Slide bgImage={images.water}/>
          <Slide>
            <Heading size={1} fit caps textColor="secondary">
              demo
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              The
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              code
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
              bit.ly/jebeck-mwf
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={1} style={{ fontFamily: "monospace" }} textColor="secondary">
              master
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/master-App.example")}
            ranges={[{
              loc: [5, 6],
              title: "a Martian water factory"
            }, {
              loc: [26, 39]
            }, {
              loc: [100, 105]
            }, {
              loc: [105, 118]
            }, {
              loc: [118, 131]
            }, {
              loc: [70, 90]
            }, {
              loc: [40, 45]
            }, {
              loc: [45, 60]
            }, {
              loc: [59, 66]
            }]}
          />
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              🐥 🐣 first 🐣 🐥
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              tests
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/master-tests.example")}
            ranges={[{
              loc: [6, 7],
              title: "tests, first attempt"
            }, {
              loc: [12, 27],
              note: "test interaction #1: hydrazine valve"
            }, {
              loc: [27, 36],
              note: "test interaction #2: burning wood shavings"
            }]}
          />
          <Slide bgColor="tertiary">
            <Image src={images.firstspecs} width="100%" />
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={2} style={{ fontFamily: "monospace" }} textColor="secondary">
              try-mock-timers
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              ⏱ ⌛ mock ⌛ ⏱
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              timers
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/mock-timers-tests.example")}
            ranges={[{
              loc: [6, 9],
              title: "tests, trying mock timers"
            }, {
              loc: [24, 31],
              note: "test interval value"
            }, {
              loc: [32, 33],
              note: "tell Jest to \"run\" pending timers"
            }, {
              loc: [34, 36],
              note: "test ratios"
            }, {
              loc: [39, 48],
              note: "(a) expand test suite re: H₂ in state"
            }, {
              loc: [49, 57],
              note: "(b) expand test suite re: H₂ in state"
            }, {
              loc: [58, 59],
              note: "test rates of H₂ and O₂ consumption"
            }, {
              loc: [59, 68],
              note: "(test setup)"
            }, {
              loc: [68, 73],
              note: "(actual expectations)"
            }, {
              loc: [75, 86],
              note: "test end of combustion process"
            }]}
          />
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/master-App.example")}
            ranges={[{
              loc: [5, 6],
              title: "memory refresh"
            }, {
              loc: [26, 39]
            }]}
          />
          <Slide bgColor="tertiary">
            <Image src={images.mocktimersspecs} width="100%" />
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              manipulate
            </Heading>
            <Heading size={3} fit lineHeight={1} textColor="white">
              small units
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              How?
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              refactor
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={2} style={{ fontFamily: "monospace" }} textColor="secondary">
              factor-out-utils
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/mock-timers-App.example")}
            ranges={[{
              loc: [5, 6],
              title: "common logic in instance methods"
            }, {
              loc: [40, 52]
            }]}
          />
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/utils.example")}
            ranges={[{
              loc: [8, 15],
              title: "factored out utilities"
            }, {
              loc: [15, 20],
              note: "the totalOxygen function"
            }, {
              loc: [29, 32],
              note: "the readyToCombust function"
            }]}
          />
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/utils-tests.example")}
            ranges={[{
              loc: [2, 3],
              title: "tests for factored out utils"
            }, {
              loc: [3, 9],
              note: "a 'canary' test"
            }]}
          />
          <Slide bgImage={images.canaryalive}/>
          <Slide bgImage={images.canarydead}/>
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/utils-tests.example")}
            ranges={[{
              loc: [10, 24],
              note: "functionality tests for totalOxygen"
            }, {
              loc: [26, 27],
              note: "moving on to readyToCombust..."
            }, {
              loc: [38, 59],
              note: "functionality tests for readyToCombust"
            }, {
              loc: [34, 37],
              note: "tests as documentation"
            }]}
          />
          <Slide bgColor="tertiary">
            <Image src={images.utilsspecs} width="100%" />
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={2} style={{ fontFamily: "monospace" }} textColor="secondary">
              handle-async
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              Testing
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              async code
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/async-App.example")}
            ranges={[{
              loc: [46, 47],
              title: "a more realistic \"ignition\" model?"
            }, {
              loc: [46, 57],
              note: "asynchronous ignition"
            }, {
              loc: [48, 49],
              note: "API wrapper"
            }]}
          />
          <Slide bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw!../assets/async-api.example")}
              textSize="2rem"
            />
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/async-tests.example")}
            ranges={[{
              loc: [26, 28],
              title: "tests of asynchronous functionality"
            }, {
              loc: [28, 47]
            }, {
              loc: [48, 67]
            }]}
          />
          <Slide bgColor="tertiary">
            <Image src={images.asyncspecs} width="100%" />
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={2} fit style={{ fontFamily: "monospace" }} textColor="secondary">
              try-mock-timers-jest16
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/clear-failsafe-App.example")}
            ranges={[{
              loc: [93, 94],
              title: "the failsafe, first attempt"
            }, {
              loc: [101, 118],
              note: "opening the valve"
            }, {
              loc: [105, 106],
              note: "hydrogen threshold"
            }, {
              loc: [110, 116],
              note: "failsafe to close valve"
            }]}
          />
          <Slide>
            <Heading size={1} fit caps textColor="secondary">
              untestable
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={3} fit lineHeight={1} textColor="tertiary">
              Refactor!
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} textColor="tertiary">
              [🌱 branch 🌱]
            </Heading>
            <Heading size={2} style={{ fontFamily: "monospace" }} textColor="secondary">
              reduxify
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <List style={{ margin: "0 auto", width: "60%" }} textColor="secondary">
              <ListItem textSize="4rem">utils (✅)</ListItem>
              <ListItem textSize="4rem">API wrapper (✅)</ListItem>
              <ListItem textSize="4rem">redux</ListItem>
              <ListItem textSize="4rem">redux-saga</ListItem>
            </List>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.8em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/reduxify-App.example")}
            ranges={[{
              loc: [9, 10],
              title: "pure functional App"
            }, {
              loc: [72, 84],
              note: "interactions via redux action creators"
            }]}
          />
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/reduxify-state.example")}
            ranges={[{
              loc: [306, 312],
              title: "state management with sagas"
            }, {
              loc: [310, 311]
            }, {
              loc: [298, 305],
              note: "the hydrazine valve watcher"
            }, {
              loc: [170, 171],
              note: "the hydrazine drip itself"
            }, {
              loc: [171, 174],
              note: "check if the valve is open"
            }, {
              loc: [174, 180],
              note: "race betwen possible interruptions & next drip"
            }, {
              loc: [180, 187],
              note: "(if not interrupted) check hydrazine and H₂ levels"
            }, {
              loc: [187, 198],
              note: "(if OK) consume hydrazine, produce H₂"
            }, {
              loc: [198, 202],
              note: "(else) failsafe!"
            }]}
          />
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/reduxify-state-tests.example")}
            ranges={[{
              loc: [15, 16],
              title: "testing sagas"
            }, {
              loc: [276, 284],
              note: "testing the valve \"watcher\" (canary)"
            }, {
              loc: [285, 295],
              note: "testing the valve \"watcher\" (functionality)"
            }, {
              loc: [295, 300]
            }]}
          />
          <CodeSlide
            style={{ fontSize: "0.75em" }}
            transition={[]}
            lang="js"
            code={require("raw!../assets/reduxify-state-tests.example")}
            ranges={[{
              loc: [16, 17],
              title: "testing the failsafe"
            }, {
              loc: [88, 108]
            }, {
              loc: [89, 92],
              note: "set up and state check if valve is open"
            }, {
              loc: [93, 97],
              note: "check that if valve open, next iteration is race"
            }, {
              loc: [98, 100],
              note: "force non-stop path thru race, another state check"
            }, {
              loc: [101, 105],
              note: "assuming state check = dangerous H₂, check for toggle"
            }, {
              loc: [106, 107],
              note: "check that we're done!"
            }]}
          />
          <Slide>
            <Heading size={1} fit caps textColor="secondary">
              demo
            </Heading>
          </Slide>
          <Slide bgImage={images.crater}>
            <Heading lineHeight={1.5} size={3} textColor="tertiary">
              The example app
            </Heading>
            <Heading fit size={2} style={{fontFamily: "monospace"}} textColor="white">
              bit.ly/jebeck-mwf
            </Heading>
          </Slide>
          <Slide bgImage={images.crater}>
            <Heading lineHeight={1.5} size={3} textColor="tertiary">
              Slides
            </Heading>
            <Heading fit size={2} style={{fontFamily: "monospace"}} textColor="white">
              bit.ly/high-stakes-react
            </Heading>
          </Slide>
          <Slide bgImage={images.me}>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaHome/>: <S type="bold">janabeck.com</S>
            </Text>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaGithub/>: <S type="bold">@jebeck (& elsewhere)</S>
            </Text>
            <Text lineHeight={1.5} textAlign="left" textSize="5rem" textColor="#281946">
              <FaTwitter/>: <S type="bold">@iPancreas</S>
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
