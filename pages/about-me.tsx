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
      image="/images/aboutmepic.jpg"
      imageWidth={200}
      imageHeight={267}
      imageAlt="Drawing of a person waving while sitting behind a desk"
    >
      <p>
        My name is Werner and I am a software developer from the Netherlands. I
        have a bachelor of engineering with a specialisation in interactive
        media products.
      </p>
      <p>
        As a professional I build stuff for the web. The roles I have had over
        the years are either
        <mark>Fullstack developer</mark> or{" "}
        <mark>Web (frontend) developer</mark>. I have been doing this as a
        professional since I graduated in 2013.
      </p>
      <p>
        My currently prefered tech-stack is <mark>React/TypeScript</mark> for
        the frontend and <mark>C#/.NET</mark> for the backend. In the past I
        have also worked with other techniques such as JQuery (way back),
        Angular and Ruby on Rails. I have experience deploying code to Linux
        VMs, Microsoft Azure App services and Kubernetes clusters.
      </p>
      <h3>Good UX matters</h3>
      <p>
        Too many shitty websites and applications with really poor user
        experience on the internet. Sometimes I do not even understand how
        people come up with some of their shitty design/interaction decisions. I
        like to build applications that are a joy to use and care a lot about
        good UX. For this reason I think it is safe to say I have a preference
        doing frontend engineering with TypeScript.
      </p>
      <h4>I hate Web3.0 and big tech</h4>
      <p>
        I do not want an internet that is controlled by big tech and web3
        bullshit like blockchains and NFTs. Instead I want to own and control my
        own data, and privacy should be default. That means I run Linux on my
        computer and do not have privacy invading analytics on this website. I
        am trying really hard to de-google myself. I am kind of succeeding but
        not there yet.
      </p>
    </TextblockWithImage>
  </BasePage>
);

export default AboutPage;
