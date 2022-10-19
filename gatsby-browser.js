// custom typefaces
require("typeface-montserrat")
require("typeface-merriweather")
// normalize CSS across browsers
require("./src/normalize.css")
// custom CSS styles
require("./src/style.css")

// Highlighting for code blocks
require("prismjs/themes/prism.css")


const PiwikPro = require("@piwikpro/react-piwik-pro").default;
const { PageViews } = require("@piwikpro/react-piwik-pro");

exports.onClientEntry = () => {
    console.log('initialize')
    PiwikPro.initialize('1cbc6598-083c-42f5-8798-a95d58c2a53b', 'https://bemergroup.piwik.pro');
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
    console.log('pageview', {location}, {prevLocation})
    // PageViews.trackPageView('onRouteUpdate');
};