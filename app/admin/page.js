"use client";
import { useState } from "react";
import AddPost from "../../components/CRUDpost/addPost";
import UpdatePost from "../../components/CRUDpost/updatePost";
import DeletePost from "@/components/CRUDpost/deletePost";
import MarqueeHeadingUpdate from "@/components/CRUDhome/marqueeHeadingUpdate";
export default function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [postState, setPostState] = useState("");
  const [Token, setToken] = useState({ token: "" });
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  async function authLogin(user) {
    const checkLogin = await fetch(`/api/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    });

    if (checkLogin.ok) {
      const { authToken } = await checkLogin.json();
      setToken({ ...Token, token: authToken });
      setLoggedIn(true);
    } else {
      alert("wrong username or password");
    }
  }
  const loginHandler = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await authLogin(user);
    return;
  };
  return (
    <>
      {!isLoggedIn && (
        <form
          className="w-1/3 mx-auto bg-indigo-300 flex flex-col p-3 border rounded-md "
          action=""
          onSubmit={onSubmit}
        >
          <label htmlFor="username" onChange={loginHandler}>
            UserName
          </label>
          <input
            type="text"
            onChange={loginHandler}
            value={user.userName}
            name="userName"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={loginHandler}
            value={user.password}
            name="password"
          />
          <button
            type="submit"
            className="px-3 py-1 border rounded-md border-gray-500 mt-2"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      )}
      {isLoggedIn && postState === "" && (
        <div className="w-1/2 mx-auto my-2 ">
          <h2 className="text-xl font-bold text-center text-indigo-600 underline">
            Admin Panel
          </h2>
          <div className="flex justify-center gap-2">
            <button
              className="border-orange-400 rounded-full px-3 py-1 border bg-orange-500 text-white"
              onClick={() => setPostState("addPost")}
            >
              Add Post
            </button>
            <button
              className="border-orange-400 rounded-full px-3 py-1 border bg-orange-500 text-white"
              onClick={() => setPostState("updatePost")}
            >
              Update Post
            </button>
            <button
              className="border-orange-400 rounded-full px-3 py-1 border bg-orange-500 text-white"
              onClick={() => setPostState("deletePost")}
            >
              Delete Post
            </button>
            <button
              className="border-orange-400 rounded-full px-3 py-1 border bg-orange-500 text-white"
              onClick={() => setPostState("marqueeHeading")}
            >
              Marquee Heading Update
            </button>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <>
          {postState === "addPost" && (
            <AddPost setPostState={setPostState} token={Token} />
          )}
          {postState === "updatePost" && (
            <UpdatePost setPostState={setPostState} token={Token} />
          )}
          {postState === "deletePost" && (
            <DeletePost setPostState={setPostState} token={Token} />
          )}
          {postState === "marqueeHeading" && (
            <MarqueeHeadingUpdate setPostState={setPostState} token={Token} />
          )}
        </>
      )}
    </>
  );
}
