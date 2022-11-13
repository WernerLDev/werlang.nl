import Image from "next/image";

export type TextblockWithImageProps = {
  head: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  children?: React.ReactNode;
};

export const TextblockWithImage = (props: TextblockWithImageProps) => (
  <div className="container-fluid bgcolor-white">
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h1>{props.head}</h1>
          {props.children}
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <span className="image-with-shadow">
            <Image
              src={props.image}
              width={props.imageWidth}
              height={props.imageHeight}
              alt={props.imageAlt}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcPg8AAhIBVwQSah8AAAAASUVORK5CYII="
              placeholder="blur"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
);
