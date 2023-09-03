import Link from "next/link";
const HeadingBox = ({heading}) => {
  return (
    <div className="px-1 text-white text-center leading-8 font-bold text-2xl">
        <div className="flex gap-1 ">
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#0057AD" }}
          >
            <Link
              href={heading.R1E1L}
              className="  px-1 py-1 block w-full "
            >
              {heading.R1E1N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#460286" }}
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R1E2L}
            >
              {heading.R1E2N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md bg-pink"
            
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R1E3L}
            >
             {heading.R1E3N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#0B610B" }}
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R1E4L}
            >
              {heading.R1E4N}
            </Link>
          </div>
        </div>
        <div className="flex gap-1 my-1">
          <div
            className="w-1/4 border rounded-md bg-red"
            
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R2E1L}
            >
              {heading.R2E1N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#804600" }}
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R2E2L}
            >
              {heading.R2E2N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md bg-lightBlue"
            
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R2E3L}
            >
            {heading.R2E3N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#993600" }}
          >
            <Link
              className=" px-1 py-1 block w-full"
              href={heading.R2E4L}
            >
             {heading.R2E4N}
            </Link>
          </div>
        </div>
      </div>
  );
};
export default HeadingBox;
