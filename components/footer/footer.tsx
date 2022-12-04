import { format } from "date-fns";
import Link from "next/link";
import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-md-9">
          <p>
            <small>
              Copyright &copy; {format(new Date(), "yyyy")} - Werner
              Langenhuisen. Built with Next.JS.{" "}
              <a
                href="https://github.com/WernerLDev/werlang.nl"
                target="_blank"
                rel="noreferrer"
              >
                View source
              </a>
              .
            </small>
          </p>
          <p>
            <small>
              Source code is licensed under a{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                rel="license"
              >
                GNU AGPLv3
              </a>{" "}
              license. All content is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International
              </a>{" "}
              License.
            </small>
          </p>
        </div>

        <div className="col-12 col-md-3 text-lg-end">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li className="mb-1">
              <a href="https://github.com/WernerLDev" rel="me">
                Github
              </a>
            </li>
            <li className="mb-1">
              <a href="https://www.linkedin.com/in/wernerl/" rel="me">
                LinkedIn
              </a>
            </li>
            <li className="mb-0">
              <a href="mailto:werner@werlang.nl">E-mail</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
