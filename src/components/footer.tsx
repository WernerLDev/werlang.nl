import { PERSONAL_INFO } from "@/constants";
import { format } from "date-fns";

export const Footer = () => {
  return (
    <footer className="container-fluid px-5 footer z-3">
      <div className="d-lg-flex justify-content-between">
        <small>
          <span>
            Copyright &copy; {format(new Date(), "yyyy")} - Werner Langenhuisen
            <a
              href="https://github.com/WernerLDev/werlang.nl"
              target="_blank"
              rel="noreferrer"
              className="ps-3 d-none d-lg-inline"
            >
              View source
            </a>
          </span>
        </small>
        <div className="fs-5 d-flex d-lg-block justify-content-between">
          <small>
            <a
              href="https://github.com/WernerLDev/werlang.nl"
              target="_blank"
              rel="noreferrer"
              className="pe-3 d-inline d-lg-none"
            >
              View source
            </a>
          </small>
          <span>
            <a rel="author" href={PERSONAL_INFO.GithubUrl}>
              <i className="bi bi-github"></i>
            </a>{" "}
            <a rel="author" href={PERSONAL_INFO.LinkedinUrl}>
              <i className="bi bi-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
