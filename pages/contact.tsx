import { NextPage } from "next";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Textblock } from "../components/textblock/textblock";

const ContactPage: NextPage = () => (
  <>
    <main>
      <Header>
        <div className={`container p-5`}>
          <div className="col-12 py-2 fgcolor-light text-center">
            <h1>Contact me</h1>
          </div>
        </div>
      </Header>

      <Textblock>
        <p>asdfsadf asdf</p>
      </Textblock>
    </main>
    <Footer />
  </>
);

export default ContactPage;
