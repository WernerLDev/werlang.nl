import { ParticleBg } from "@/components/particle-bg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "werlang.nl",
  description: "Landing page of Werner's personal website.",
  icons: {},
};

export default function Home() {
  return (
    <>
      <div className="fluid-container home-header d-flex flex-column justify-content-center">
        <div className={`container pt-5 z-3`}>
          <div className="row">
            <div className="col-1 col-lg-2"></div>
            <div className="col-10 col-lg-8 d-flex flex-column flex-lg-row align-items-center">
              <Image
                className="rounded-circle border border-5 border-white"
                src={"/werner.jpg"}
                width={200}
                height={200}
                alt="Black and white picture of me smiling at the camera"
              />
              <div className="ms-0 ms-lg-5 mt-4 mt-lg-0">
                <h1 className="display-4">Hi, I&apos;m Werner,</h1>
                <h3>Fullstack .NET developer</h3>

                <span className="">
                  I am a software developer from the Netherlands. I build
                  headless web applications using C#/.NET and React/Typescript.
                </span>

                <p className="mt-4">
                  <Link href="/about" className="btn btn-blue">
                    Read more
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="col-1 col-lg-2"></div>
          </div>
        </div>
      </div>
      <ParticleBg />
    </>
  );
}
