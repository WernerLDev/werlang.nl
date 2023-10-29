import { CONSTANTS } from "@/constants";
import { format } from "date-fns";

export const Footer = () => {
  return (
    <footer className="fluid-container footer z-3">
      <div className="container d-flex justify-content-between">
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
          <a href={CONSTANTS.GithubUrl}>
            <i className="bi bi-github"></i>
          </a>{" "}
          <a href={CONSTANTS.LinkedinUrl}>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
