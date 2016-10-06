// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Spectacle
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
  kitten: require("../assets/high-stakes-kitten.gif")
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
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
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
          <Slide bgColor="secondary">
            <Heading size={3} lineHeight={1} textColor="tertiary">
              The
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              code
            </Heading>
          </Slide>
          <CodeSlide
            style={{ fontSize: "0.75em" }}
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
              loc: [60, 66]
            }]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
