"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
const MarqueeHeadingUpdate = ({ token, setPostState }) => {
  const [marquee, setMarquee] = useState({
    R1E1L: "",
    R1E1N: "",
    R1E2L: "",
    R1E2N: "",
    R1E3L: "",
    R1E3N: "",
    R2E1L: "",
    R2E1N: "",
    R2E2L: "",
    R2E2N: "",
    R2E3L: "",
    R2E3N: "",
    R3E1N: "",
    R3E1L: "",
    R3E2N: "",
    R3E2L: "",
    R3E3N: "",
    R3E3L: "",
  });
  const [heading, setHeading] = useState({
    R1E1L: "",
    R1E1N: "",
    R1E2L: "",
    R1E2N: "",
    R1E3L: "",
    R1E3N: "",
    R1E4L: "",
    R1E4N: "",
    R2E1L: "",
    R2E1N: "",
    R2E2L: "",
    R2E2N: "",
    R2E3L: "",
    R2E3N: "",
    R2E4L: "",
    R2E4N: "",
  });
  useEffect(() => {
    async function fetchdata() {
      const fetchData = await fetch("/api/admin/getheading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((list) => list.json())
        .then((dat) => {
          return dat;
        })
        .catch((error) => console.log(error));
      setHeading(fetchData.headingBox);
      setMarquee(fetchData.marqueeRow);
    }
    fetchdata();
  }, [token]);
  const inputHandlerMarquee = (event) => {
    const { name, value } = event.target;
    setMarquee((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };
  const inputHandlerHeading = (event) => {
    const { name, value } = event.target;
    setHeading((prevHeading) => {
      return { ...prevHeading, [name]: value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(marquee, heading);
    const updateData = await fetch("/api/admin/marquee-heading-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        marquee: marquee,
        heading: heading,
      }),
    });
    if (updateData.ok) {
      setPostState("");
    }
  };

  return (
    <>
      <marquee behavior="alternate">
        <Link className="leading-3" href={marquee.R1E1L}>
          <b className="text-green">{marquee.R1E1N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R1E2L}>
          <b className="text-rose-700">{marquee.R1E2N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R1E3L}>
          <b className="text-blue">{marquee.R1E3N}</b>
        </Link>
      </marquee>
      <marquee behavior="alternate">
        <Link className="leading-3" href={marquee.R2E1L}>
          <b className="text-green">{marquee.R2E1N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R2E2L}>
          <b className="text-rose-700">{marquee.R2E2N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R2E3L}>
          <b className="text-blue">{marquee.R2E3N}</b>
        </Link>
      </marquee>
      <marquee behavior="alternate">
        <Link className="leading-3" href={marquee.R3E1L}>
          <b className="text-green">{marquee.R3E1N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R3E2L}>
          <b className="text-rose-700">{marquee.R3E2N}</b>
        </Link>
        ||
        <Link className="leading-3" href={marquee.R3E3L}>
          <b className="text-blue">{marquee.R3E3N}</b>
        </Link>
      </marquee>
      <div className="px-1">
        <div className="flex gap-1">
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#0080FF" }}
          >
            <Link
              href={heading.R1E1L}
              className=" font-bold text-2xl px-1 py-1 block w-full text-center text-white leading-8"
            >
              {heading.R1E1N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#460286" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R1E2L}
            >
              {heading.R1E2N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#FF00BF" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
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
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R1E4L}
            >
              {heading.R1E4N}
            </Link>
          </div>
        </div>
        <div className="flex gap-1 my-1">
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#FB0303" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R2E1L}
            >
              {heading.R2E1N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#FF8C00" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R2E2L}
            >
              {heading.R2E2N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#1893A5" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R2E3L}
            >
              {heading.R2E4N}
            </Link>
          </div>
          <div
            className="w-1/4 border rounded-md"
            style={{ background: "#EC5300" }}
          >
            <Link
              className="font-bold text-2xl px-1 py-1 block w-full text-white leading-8 text-center"
              href={heading.R2E4L}
            >
              {heading.R2E4N}
            </Link>
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-3 w-full mx-5 mt-2 mb-3">
          <label htmlFor="">Marquee Row 1 first element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E1N"
            value={marquee.R1E1N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E1L"
            value={marquee.R1E1L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 1 Second element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E2N"
            value={marquee.R1E2N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E2L"
            value={marquee.R1E2L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 1 Third element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E3N"
            value={marquee.R1E3N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R1E3L"
            value={marquee.R1E3L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mt-2 mb-3">
          <label htmlFor="">Marquee Row 2 first element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E1N"
            value={marquee.R2E1N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E1L"
            value={marquee.R2E1L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 2 Second element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E2N"
            value={marquee.R2E2N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E2L"
            value={marquee.R2E2L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 2 Third element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E3N"
            value={marquee.R2E3N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R2E3L"
            value={marquee.R2E3L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mt-2 mb-3">
          <label htmlFor="">Marquee Row 3 first element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E1N"
            value={marquee.R3E1N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E1L"
            value={marquee.R3E1L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 3 Second element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E2N"
            value={marquee.R3E2N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E2L"
            value={marquee.R3E2L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">Marquee Row 3 Third element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E3N"
            value={marquee.R3E3N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerMarquee}
            type="text"
            name="R3E3L"
            value={marquee.R3E3L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        {/* //heading */}
        <div className="flex gap-3 w-full mx-5 mt-2 mb-3">
          <label htmlFor="">HeadingBox Row 1 first element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E1N"
            value={heading.R1E1N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E1L"
            value={heading.R1E1L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 1 Second element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E2N"
            value={heading.R1E2N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E2L"
            value={heading.R1E2L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 1 Third element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E3N"
            value={heading.R1E3N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E3L"
            value={heading.R1E3L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 1 fourth element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E4N"
            value={heading.R1E4N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R1E4L"
            value={heading.R1E4L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mt-2 mb-3">
          <label htmlFor="">HeadingBox Row 2 first element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E1N"
            value={heading.R2E1N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E1L"
            value={heading.R2E1L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 2 Second element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E2N"
            value={heading.R2E2N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E2L"
            value={heading.R2E2L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 2 Third element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E3N"
            value={heading.R2E3N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E3L"
            value={heading.R2E3L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <div className="flex gap-3 w-full mx-5 mb-3">
          <label htmlFor="">HeadingBox Row 2 fourth element</label>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E4N"
            value={heading.R2E4N}
            placeholder="ENTER POST  Name"
          ></input>
          <input
            className="outline-none border border-gray-700  rounded-md"
            onChange={inputHandlerHeading}
            type="text"
            name="R2E4L"
            value={heading.R2E4L}
            placeholder="ENTER POST LINK"
          ></input>{" "}
        </div>
        <input
          type="submit"
          onClick={submitHandler}
          className="block mx-auto text-green border cursor-pointer border-blue rounded-lg px-3 py-1"
        ></input>
      </form>
    </>
  );
};
export default MarqueeHeadingUpdate;
