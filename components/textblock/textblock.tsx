export type TextblockProps = {
  head?: string;
  body?: string;
  children?: React.ReactNode;
};

export const Textblock = (props: TextblockProps) => (
  <div className="container-fluid bgcolor-light">
    <div className="container p-5">
      {props.head && <h1>{props.head}</h1>}
      {props.body && <p>{props.body}</p>}
      {props.children}
    </div>
  </div>
);
