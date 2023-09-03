"use client"
import { useState } from "react";

export default function DeletePost({token,setPostState}) {
  const [formdata, setFormData] = useState({seoLink:""});
  const onChangeHandlerForm1 = (event) => {
    setFormData((prevdata) => {
      return {seoLink:event.target.value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const data = await fetch("/api/admin/deletepost", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token,seoLink: formdata.seoLink }),
    });
    if (data.ok) {
      window.alert("POSt deleted")
      setPostState("");
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="postId">Enter Link</label>
        <input
          type="text"
          onChange={onChangeHandlerForm1}
          value={formdata.seoLink}
          name="seoLink"
          id="seoLink"
        />
        <input type="Submit" name="submit" id="submit" />
      </form>
    </>
  );
}
