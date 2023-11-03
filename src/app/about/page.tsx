import { PERSONAL_INFO } from "@/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me | werlang.nl",
  description:
    "My name is Werner and I am a software developer from the Netherlands. I build headless web applications using C#/.NET and React/TypeScript.",
};

export default function About() {
  return (
    <div className="container py-5 lh-lg">
      <div className="row">
        <div className="col-0 col-lg-2"></div>
        <div className="col-12 col-lg-8 px-3">
          <h1 className="mb-4">About me</h1>
          <h3>My background</h3>

          <p>
            My name is Werner and I am a software developer from the
            Netherlands. I have a bachelor of engineering with a specialisation
            in interactive media products.
          </p>
          <p>
            My journey on the world wide web started when I was still a
            teenager. I wanted to learn how to build websites so I started
            experimenting with HTML/CSS and later also PHP. Some time after that
            Flash and Actionscript3.0 came around and I started playing around
            with that as well.
          </p>
          <p>
            Remember 2advanced.com from back in the day? That is the kind of
            stuff I admired. I wanted to create cool stuff for the web. I have
            spent a lot of my free time making senseless experiments just for
            fun.
          </p>
          <p>
            I have studied Media technology at the Hogeschool Utrecht where I
            graduated in 2013. I have done my graduation internship in Beijing,
            China. Here I created a mobile app that can be used to practice
            mandarin.
          </p>
          <p>
            Besides my bachelor I have also spent 1 year in Sweden where I
            followed a 1 year datascience program at the university of Skövde.
          </p>
          <p>
            After graduation I have worked for digital agencies, consultancy
            firms and large enterprises. At those organisations I have gained
            experience with several languages and frameworks but C#/.NET and
            React/TypeScript became my prefered tools for building modern web
            applications.
          </p>

          <h3 className="mt-4">Get in touch</h3>
          <p>
            Want to work with me? You can reach me through{" "}
            <Link rel="author" href={PERSONAL_INFO.LinkedinUrl}>
              Linkedin
            </Link>{" "}
            or by{" "}
            <Link rel="author" href={`mailto:${PERSONAL_INFO.EmailAddress}`}>
              sending me an email
            </Link>
            .
          </p>
        </div>
        <div className="col-0 col-lg-2"></div>
      </div>
    </div>
  );
}
