import { PERSONAL_INFO } from "@/constants";
import { format } from "date-fns";

export const Footer = () => {
  return (
    <footer className="fluid-container footer z-3">
      <div className="container d-lg-flex justify-content-between">
        <small>
          <span>
            Copyright &copy; {format(new Date(), "yyyy")} - Werner Langenhuisen
            |{" "}
            <a
              href="https://github.com/WernerLDev/werlang.nl"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a>
          </span>
        </small>
        <div className="fs-5">
          <a rel="author" href={PERSONAL_INFO.GithubUrl}>
            <i className="bi bi-github"></i>
          </a>{" "}
          <a rel="author" href={PERSONAL_INFO.LinkedinUrl}>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
