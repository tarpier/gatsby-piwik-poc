// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <Layout title="Using TypeScript" location={location}>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => {
  return (
    <>
      <Seo title="Using TypeScript" />
      <script type="text/javascript">
        {`
        var _paq = _paq || [];
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);
        (function() {
          var u="https://bemergroup.piwik.pro/";
          _paq.push(["setTrackerUrl", u+"ppms.php"]);
          _paq.push(["setSiteId", "1cbc6598-083c-42f5-8798-a95d58c2a53b"]);
          var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
          g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"ppms.js"; s.parentNode.insertBefore(g,s);
        })();
      `}
      </script>
      <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/e39bc10f06c4.js" data-cmp-host="c.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="1"></script>
    </>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
