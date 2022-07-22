import { NextPage } from "next";
import Head from "next/head";
import { BasePage } from "../components/base-page/base-page";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { TextblockWithImage } from "../components/textblock-with-image/textblock-with-image";
import { Textblock } from "../components/textblock/textblock";

const AboutPage: NextPage = () => (
  <BasePage title="About me" header={<h1>About me</h1>}>
    <TextblockWithImage
      head="My background"
      image="/images/hello.svg"
      imageWidth={450}
      imageHeight={300}
      imageAlt="Drawing of a person waving while sitting behind a desk"
    >
      <p>
        My name is Werner and I am a software developer from the Netherlands. I
        build stuff for the web as
        <mark>Fullstack developer</mark> or <mark>Frontend engineer</mark>. I
        have been doing this as a professional since I graduated in 2013.
      </p>
      <p>
        What I enjoy the most is the <mark>backend of the frontend</mark>,
        meaning I implement user interactions, user flows and integrations with
        backend APIs using JavaScript / TypeScript and modern frameworks such as
        React. but I can also create responsive and accessible interfaces using
        HTML/SCSS, or implement backend APIs using Rest, OData or GraphQL.
      </p>
      <p>
        My currently prefered tech-stack is React/TypeScript for the frontend
        and C#/.NET for the backend. Most of the projects I worked on run on
        Linux machines or in docker containers.
      </p>
    </TextblockWithImage>

    <Textblock head="I love small things">
      <p>
        You may have noticed there is no stupid cookiebar on this website.
        That&apos;s because I do not make use of privacy invading software like
        Google Analytics. I do not want an internet that is controlled by big
        tech and web3 bullshit like blockchains and NFTs. Instead I prefer small
        tech.
      </p>
      <p>
        Small tech is the opposite of big tech. With small technology privacy is
        default and people own and control their own data, not big corporations.
        If you are like me you should sign the{" "}
        <a href="https://web0.small-web.org/">web0 manifesto</a>.
      </p>
    </Textblock>
  </BasePage>
);

export default AboutPage;
