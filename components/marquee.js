import Link from "next/link";
const Marquee = ({marquee}) => {

  return (
    <div>
     <marquee behavior="alternate">
        <Link prefetch={false} className="leading-3" href={marquee.R1E1L}>
          <b className="text-green">
            {marquee.R1E1N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R1E2L}>
          <b className="text-rose-700">
            {marquee.R1E2N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R1E3L}>
          <b className="text-blue">
            {marquee.R1E3N}
          </b>
        </Link>
      </marquee>
      <marquee behavior="alternate">
        <Link prefetch={false} className="leading-3" href={marquee.R2E1L}>
          <b className="text-green">
            {marquee.R2E1N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R2E2L}>
          <b className="text-rose-700">
            {marquee.R2E2N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R2E3L}>
          <b className="text-blue">
            {marquee.R2E3N}
          </b>
        </Link>
      </marquee>
      <marquee behavior="alternate">
        <Link prefetch={false} className="leading-3" href={marquee.R3E1L}>
          <b className="text-green">
            {marquee.R3E1N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R3E2L}>
          <b className="text-rose-700">
            {marquee.R3E2N}
          </b>
        </Link>
        ||
        <Link prefetch={false} className="leading-3" href={marquee.R3E3L}>
          <b className="text-blue">
            {marquee.R3E3N}
          </b>
        </Link>
      </marquee>
    </div>
  );
};
export default Marquee;
