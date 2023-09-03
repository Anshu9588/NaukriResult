"use client";
import { useState, useRef } from "react";
export default function UpdatePost({ token, setPostState }) {
  const questionInput = useRef("");
  const answerInput = useRef("");
  const [showForm, setShowForm] = useState(false);
  const [getPostData, setgetFromData] = useState("");

  const [formData, setFormData] = useState({});
  //handling getPost data
  const onChangeHandlerForm1 = (event) => {
    setgetFromData(event.target.value);
  };
  const submitHandlerForPostGet = async (event) => {
    event.preventDefault();
    let fetchData = await fetch(`/api/admin/getpost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        seoLink: getPostData,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dat) => {
        return dat;
      });
    fetchData = { ...fetchData, category: fetchData.category[0] };
    setFormData(fetchData);
    setShowForm(true);
  };
  const addQuestionAnswerHandler = (event) => {
    const question = questionInput.current.value;
    const answer = answerInput.current.value;
    if (question.trim() === "" || answer.trim() === "") return;
    const data = [question, answer];
    setFormData({
      ...formData,
      questionAnswer: [...formData.questionAnswer, data],
    });
    questionInput.current.value = "";
    answerInput.current.value = "";
  };
  /// handling input using state for update from
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const categoryHandler = (event) => {
    const { name, value } = event.target;
    const checkExits = formData.category.split(" ").includes(value);
    if (checkExits) return;
    const category = formData.category + " " + value;
    setFormData({
      ...formData,
      category: category,
    });
  };
  const resetCategory = () => {
    setFormData({ ...formData, category: "" });
  };
  const addItemHandler = (event, value, value2) => {
    let item = document.getElementById(`${event}`);
    let item2 = document.getElementById(`${value}`);
    let item3 = document.getElementById(`${value2}`);

    const itemValue = item.value;
    const itemValue2 = item2.value;
    let arry;
    if (item3 === null) {
      arry = [...formData[event], [itemValue, itemValue2]];
    } else {
      const itemValue3 = item3.value;
      arry = [...formData[event], [itemValue, itemValue2, [itemValue3]]];
    }

    setFormData({
      ...formData,
      [event]: arry,
    });

    item.value = "";
    item2.value = "";
    if (item3 !== null) {
      item3.value = "";
    }
  };
  const addListHandler = (event, value) => {
    const item = document.getElementById(`${value}`);
    const itemValue = item.value;
    const itemLenght = formData[event].length;

    const arryList = [...formData[event][itemLenght - 1][2], itemValue];
    const arry = formData[event];
    arry[itemLenght - 1][2] = arryList;

    setFormData({
      ...formData,
      [event]: arry,
    });

    item.value = "";
  };
  const addListHandler2 = (event) => {
    const item = document.getElementById(`${event}`);
    const itemValue = item.value;
    const arry = [...formData[event], itemValue];
    setFormData({
      ...formData,
      [event]: arry,
    });
    item.value = "";
  };
  const resetItemHandler = (event) => {
    setFormData({
      ...formData,
      [event]: [],
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const updateData = await fetch(`api/admin/updatepost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token, data: { ...formData } }),
    });
    if (updateData.ok) {
      window.alert("post updated");
      setPostState("");
    }
  };

  return (
    <>
      {!showForm && (
        <form onSubmit={submitHandlerForPostGet}>
          <label htmlFor="postLink">Enter Post Link</label>
          <input
            type="text"
            onChange={onChangeHandlerForm1}
            name="postName"
            id="postName"
          />
          <input type="Submit" name="submit" id="submit" />
        </form>
      )}
      {showForm && (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="metatitle">Meta Title</label>
            <input className="w-2/3"
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="metaImageLink">Meta Image Link</label>
            <input className="w-2/3"
              type="text"
              name="metaImageLink"
              value={formData.metaImageLink}
              onChange={handleInputChange}
              placeholder="Optional"
            />
          </div>
          <div>
            <label htmlFor="metaDiscription">Meta Description</label>
            <textarea className="w-2/3"
              type="text"
              name="metaDiscription"
              value={formData.metaDiscription}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="metaKeywords">Meta Keywords</label>
            <input className="w-2/3"
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Select category</label>
            <select
              multiple
              name="category"
              onChange={categoryHandler}
              id="category"
            >
              <option value="">Select</option>
              <option value="result">Result</option>
              <option value="admit-card">Admit Card</option>
              <option value="latest-jobs">Latest Jobs</option>
              <option value="answer-key">Answer Key</option>
              <option value="coming-soon">Coming Soon</option>
              <option value="syllabus">syllabus</option>
              <option value="answer-key">Answer key</option>
              <option value="offline-form">Offline Form</option>
              <option value="goverment-scheme">Goverment Scheme</option>
              <option value="important-link">Other Important Link</option>
            </select>
          </div>
          <div>
            selected category: <b>{formData.category}</b>
          </div>
          <div
            className="border w-max px-2 border-gray-700 rounded-md"
            onClick={resetCategory}
          >
            Reset Category
          </div>

          <div className="flex gap-3">
            <div className="w-full mt-3 pl-2">
              <table className="border-collapse border w-full border-gray-700">
                <tbody>
                  <tr>
                    <td className="pl-1.5 w-1/5 text-red text-lg font-semibold">
                      Name Of Post:{" "}
                    </td>
                    <td>
                      <h1 className="text-xl text-blue font-bold">
                        <input
                          className="border-none "
                          type="text"
                          name="nameOfPost"
                          value={formData.nameOfPost}
                          onChange={handleInputChange}
                          id="title"
                          placeholder="Post Name"
                          required
                        />
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-1.5 w-1/5  text-red text-lg font-semibold">
                      Post Date / Update:{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        className="border-none"
                        type="text"
                        name="dateOfPost"
                        value={formData.dateOfPost}
                        onChange={handleInputChange}
                        id="dateOfPost"
                        required
                        placeholder="date of post"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-1.5 w-1/5  text-red text-lg font-semibold">
                      About Post:
                    </td>
                    <td>
                      <p className=" text-base text-left">
                        <textarea
                          className="border-none"
                          type="text"
                          value={formData.postDescription}
                          onChange={handleInputChange}
                          name="postDescription"
                          id="postDescription"
                          required
                          placeholder="short info about post"
                        />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className=" text-center font-medium">
                <input
                  className="border-none"
                  type="text"
                  name="seoHeading1"
                  id="seoHeading1"
                  value={formData.seoHeading1}
                  onChange={handleInputChange}
                  required
                  placeholder="heading for seo "
                />
              </h2>
              <table className="border-collapse border w-full border-gray-700">
                <tbody>
                  <tr>
                    <td colSpan="8">
                      <strong className="block w-full text-center leading-7 text-red">
                        {" "}
                        <input
                          className="border-none"
                          type="text"
                          name="seoHeadingh2"
                          value={formData.seoHeadingh2}
                          onChange={handleInputChange}
                          id="seoHeadingh2"
                          required
                          placeholder="other some heading1"
                        />
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="8">
                      <strong className="block w-full text-center leading-7 text-blue">
                        <input
                          className="border-none"
                          type="text"
                          name="seoHeadingh3"
                          value={formData.seoHeadingh3}
                          onChange={handleInputChange}
                          id="seoHeadingh3"
                          required
                          placeholder="other some heading2"
                        />
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="8">
                      <strong className="block w-full text-center leading-7 text-green">
                        <input
                          className="border-none"
                          type="text"
                          name="seoHeadingh4"
                          id="seoHeadingh4"
                          value={formData.seoHeadingh4}
                          onChange={handleInputChange}
                          required
                          placeholder="other some heading3"
                        />
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="8">
                      <strong className="block w-full text-center leading-7 text-pink">
                        WWW.NAUKRIRESULT.CO
                      </strong>
                    </td>
                  </tr>

                  <tr className="border-y border-gray-700 border-collapse ">
                    <td
                      className="border-x border-gray-700 border-collapse align-top"
                      colSpan="4"
                    >
                      <h2>
                        <strong className="block text-center w-full text-green text-2xl">
                          Important Dates
                        </strong>
                      </h2>
                      <ul className="px-2">
                        <li>
                          Application Begin:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appStartDate"
                              value={formData.appStartDate}
                              onChange={handleInputChange}
                              id="appStartDate"
                              required
                              placeholder="enter date"
                            />
                          </b>
                        </li>
                        <li>
                          Last DAte for Apply Online :
                          <span style={{ color: "red" }}>
                            <b>
                              <input
                                className="border-none"
                                type="text"
                                name="appLastDate"
                                value={formData.appLastDate}
                                onChange={handleInputChange}
                                id="appLastDate"
                                required
                                placeholder="enter date"
                              />
                            </b>
                          </span>
                        </li>
                        <li>
                          Last Date For Exam Fee :{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appFeeLastDate"
                              value={formData.appFeeLastDate}
                              onChange={handleInputChange}
                              id="appFeeLastDate"
                              required
                              placeholder="enter date"
                            />
                          </b>
                        </li>
                        <li>
                          Admit Card Date :{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appAdmitCardDate"
                              value={formData.appAdmitCardDate}
                              onChange={handleInputChange}
                              id="appAdmitCardDate"
                              required
                              placeholder="enter date"
                            />
                          </b>
                        </li>
                        <li>
                          Exam Date:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appExamDate"
                              value={formData.appExamDate}
                              onChange={handleInputChange}
                              id="appExamDate"
                              required
                              placeholder="enter date"
                            />
                          </b>
                        </li>
                        {formData.appCustumDateLabel.map((items) => {
                          return (
                            <li key={items[0]}>
                              {items[0]} <b>{items[1]}</b>
                            </li>
                          );
                        })}
                        <li>
                          <input
                            className="border-none"
                            type="text"
                            name="appCustumDateLabel"
                            id="appCustumDateLabel"
                            placeholder="custum field for label"
                          />
                          <input
                            className="border-none"
                            type="text"
                            name="appCustumDateLabelValue"
                            id="appCustumDateLabelValue"
                            placeholder="label data "
                          />
                        </li>

                        <div className="border border-blue px-2 py-1 w-max"
                          onClick={() =>
                            addItemHandler(
                              "appCustumDateLabel",
                              "appCustumDateLabelValue"
                            )
                          }
                        >
                          Add
                        </div>
                        <div className="border border-blue px-2 py-1 w-max"
                          onClick={() =>
                            resetItemHandler(
                              "appCustumDateLabel",
                              "appCustumDateLabelValue"
                            )
                          }
                        >
                          Reset
                        </div>
                      </ul>
                    </td>
                    <td colSpan="4">
                      <h2>
                        <strong className="block align-top text-center w-full text-green text-2xl">
                          Application Fee
                        </strong>
                      </h2>
                      <ul className="px-2">
                        <li>
                          <b>Male Candidate</b>
                        </li>
                        <li>
                          General/OBC:{" "}
                          <b>
                            {" "}
                            <input
                              className="border-none"
                              type="text"
                              name="appGeneralMAleFee"
                              value={formData.appGeneralMAleFee}
                              onChange={handleInputChange}
                              id="appGeneralMaleFee"
                              placeholder="enter fee"
                              required
                            />
                          </b>
                        </li>
                        <li>
                          Reserver Category:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appReserverMaleFee"
                              value={formData.appReserverMaleFee}
                              onChange={handleInputChange}
                              id="appReserverMAleFee"
                              placeholder="enter fee"
                              required
                            />
                          </b>
                        </li>
                        <li>
                          <b>Female Candidate</b>
                        </li>
                        <li>
                          General/OBC:{" "}
                          <b>
                            {" "}
                            <input
                              className="border-none"
                              type="text"
                              name="appGeneralFemaleFee"
                              value={formData.appGeneralFemaleFee}
                              onChange={handleInputChange}
                              id="appGeneralFemaleFee"
                              placeholder="enter fee"
                              required
                            />
                          </b>
                        </li>
                        <li>
                          Reserver Category:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="appReserverFemaleFee"
                              value={formData.appReserverFemaleFee}
                              onChange={handleInputChange}
                              id="appReserverFemleFee"
                              placeholder="enter fee"
                              required
                            />
                          </b>
                        </li>
                        {formData.appCustumFeeLabel.map((items) => {
                          return (
                            <li key={items[0]}>
                              {items[0]} <b>{items[1]}</b>
                            </li>
                          );
                        })}
                        <li>
                          <input
                            className="border-none"
                            type="text"
                            name="appCustumFeeLabel"
                            id="appCustumFeeLabel"
                            placeholder="enter Fee label custum"
                          />{" "}
                          <input
                            className="border-none"
                            type="text"
                            name="appCustumFeeLabelValue"
                            id="appCustumFeeLabelValue"
                            placeholder="enter Fee  custum"
                          />{" "}
                        </li>
                        <div className="border border-blue px-2 py-1 w-max"
                          onClick={() =>
                            addItemHandler(
                              "appCustumFeeLabel",
                              "appCustumFeeLabelValue"
                            )
                          }
                        >
                          Add
                        </div>
                        <div className="border border-blue px-2 py-1 w-max"
                          onClick={() =>
                            resetItemHandler(
                              "appCustumFeeLabel",
                              "appCustumFeeLabelValue"
                            )
                          }
                        >
                          Reset
                        </div>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="8">
                      <h2 className="text-center text-pink text-2xl ">
                        <strong>
                          <input
                            className="border-none"
                            type="text"
                            name="postAgeLimit"
                            value={formData.postAgeLimit}
                            onChange={handleInputChange}
                            id="postAgeLimit"
                            placeholder="Heading of Post For age Limit"
                            required
                          />{" "}
                          <b className="text-green">Age Limit Details</b>
                        </strong>
                      </h2>
                      <ul className="px-3">
                        <li>
                          Minimum Age:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="MinAge"
                              value={formData.MinAge}
                              onChange={handleInputChange}
                              id="MinAge"
                              placeholder="enter age"
                              required
                            />
                          </b>
                        </li>
                        <li>
                          MAximum Age:{" "}
                          <b>
                            <input
                              className="border-none"
                              type="text"
                              name="MaxAge"
                              value={formData.MaxAge}
                              onChange={handleInputChange}
                              id="MaxAge"
                              placeholder="enter age"
                              required
                            />
                          </b>
                        </li>

                        {formData.custumAgeLabel.map((items) => {
                          return (
                            <li key={items[0]}>
                              {items[0]} <b>{items[1]}</b>
                            </li>
                          );
                        })}
                        <li>
                          <input
                            className="border-none"
                            type="text"
                            name="custumAgeLabel"
                            id="custumAgeLabel"
                            placeholder="custum Age label enter"
                          />
                          <input
                            className="border-none"
                            type="text"
                            name="custumAgeLabelValue"
                            id="custumAgeLabelValue"
                            placeholder=" Age  enter"
                          />
                        </li>
                        <div className="border border-blue px-2 py-1 w-max"
                          onClick={() =>
                            addItemHandler(
                              "custumAgeLabel",
                              "custumAgeLabelValue"
                            )
                          }
                        >
                          Add
                        </div>
                        <div className="border border-blue px-2 py-1 w-max" onClick={() => resetItemHandler("custumAgeLabel")}>
                          Reset
                        </div>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse border w-full border-gray-700">
                <tbody>
                  <tr>
                    <td colSpan="8">
                      <h2 className="text-center text-pink text-2xl">
                        <strong>
                          <input
                            className="border-none"
                            type="text"
                            name="vacencyHeading"
                            value={formData.vacencyHeading}
                            onChange={handleInputChange}
                            id="vacencyHeading"
                            placeholder="enter heading for vacency"
                            required
                          />

                          <b className="text-green"> Vacancy Details</b>
                        </strong>
                      </h2>
                    </td>
                  </tr>
                  <tr className="border-y border-gray-700 border-collapse">
                    <td className="border-x border-gray-700 border-collapse">
                      <p className="text-center">
                        <b>Post Name</b>
                      </p>
                    </td>
                    <td className="border-x border-gray-700 border-collapse">
                      <p className="text-center">
                        <b>Total Post</b>
                      </p>
                    </td>
                    <td colSpan="4">
                      <p className="text-center">
                        <b>
                          {" "}
                          <input
                            className="border-none"
                            type="text"
                            name="postEligibility"
                            value={formData.postEligibility}
                            onChange={handleInputChange}
                            id="postEligibility"
                            placeholder="enter post name with eligibility"
                            required
                          />
                        </b>
                      </p>
                    </td>
                  </tr>
                  {formData.custumPostDetails.map((item) => {
                    return (
                      <tr key={item}>
                        <td className="border-r border-gray-700 border-collapse">
                          <p className="px-1" key={item[0]}>
                            {item[0]}
                          </p>
                        </td>
                        <td className="border-r border-gray-700 border-collapse">
                          <p className="px-1" key={item[1]}>
                            {" "}
                            {item[1]}
                          </p>
                        </td>
                        <td colSpan="4">
                          <ul>
                            {item[2].map((item) => {
                              return <li key={item}>{item}</li>;
                            })}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>
                      <p>
                        <input
                          className="border-none"
                          type="text"
                          name="custumPostDetails"
                          id="custumPostDetails"
                          placeholder="enter post Name "
                        />
                      </p>
                    </td>
                    <td>
                      <p>
                        {" "}
                        <input
                          className="border-none"
                          type="text"
                          name="postVacency"
                          id="postVacency"
                          placeholder="enter vacency"
                        />
                      </p>
                    </td>
                    <td colSpan="4">
                      <ul>
                        <li>
                          <input
                            className="border-none"
                            type="text"
                            name="eligibilityDetails"
                            id="eligibilityDetails"
                            placeholder="eligibilityDetails enter"
                          />
                          <div className="border border-blue px-2 py-1 w-max"
                            onClick={() =>
                              addListHandler(
                                "custumPostDetails",
                                "eligibilityDetails"
                              )
                            }
                          >
                            Add
                          </div>
                          <div  className="border border-blue px-2 py-1 w-max"
                            onClick={() =>
                              resetItemHandler("eligibilityDetails")
                            }
                          >
                            Reset
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <div className="border border-blue px-2 py-1 w-max"
                        onClick={() =>
                          addItemHandler(
                            "custumPostDetails",
                            "postVacency",
                            "eligibilityDetails"
                          )
                        }
                      >
                        Add all Item
                      </div>
                      <div className="border border-blue px-2 py-1 w-max"
                        onClick={() => resetItemHandler("custumPostDetails")}
                      >
                        Reset
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse border-x w-full border-gray-700">
                <tbody>
                  <tr>
                    <td>
                      <h2 className="text-lg border-b border-gray-700 text-center ">
                        <strong>
                          <input
                            className="border-none w-full text-center"
                            type="text"
                            name="howToFillForm"
                            value={formData.howToFillForm}
                            onChange={handleInputChange}
                            id="howToFillForm"
                            placeholder="heading for how to fill form "
                            required
                          />
                        </strong>
                      </h2>
                      <ul className="px-2">
                        {formData.stepToFillForm.map((item) => {
                          return <li key={item}>{item}</li>;
                        })}
                        <li>
                          <input
                            className="border-none"
                            type="text"
                            name="stepToFillForm"
                            id="stepToFillForm"
                            placeholder="steps to fill form "
                          />
                          <div className="border border-blue px-2 py-1 w-max"
                            onClick={() => addListHandler2("stepToFillForm")}
                          >
                            Add
                          </div>
                          <div className="border border-blue px-2 py-1 w-max"
                            onClick={() => resetItemHandler("stepToFillForm")}
                          >
                            Reset
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-x border-gray-700 border-collapse w-full">
                <tbody>
                  <tr>
                    <td colSpan="8">
                      <h2 className="border-y text-center w-full  border-collapse border-gray-700 text-green text-2xl ">
                        <strong><input className="w-full " value={formData.linkHeading} placeholder="post name for links" type="text" id="linkHeading" name="linkHeading" onChange={handleInputChange} ></input></strong>
                      </h2>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 text-2xl text-center">
                    <td
                      className="  text-red  border-r w-1/2  border-gray-700"
                      colSpan="4"
                    >
                      <h2>
                        <strong>Apply Online</strong>
                      </h2>
                    </td>
                    <td className="border-b border-gray-700" colSpan="4">
                      <h2>
                        <input
                          className="border-none"
                          type="text"
                          name="applyLink"
                          value={formData.applyLink}
                          onChange={handleInputChange}
                          id="applyLink"
                          placeholder="paste apply link "
                          required
                        />
                      </h2>
                    </td>
                  </tr>

                  {formData.custumLinkLabel.map((items) => {
                    return (
                      <tr
                        key={items.id}
                        className="border-b  border-gray-700 text-2xl text-center"
                      >
                        <td
                          className=" w-1/2 text-red  border-r border-gray-700"
                          colSpan="3"
                        >
                          <h2>
                            <strong key={items[0]}>{items[0]} </strong>
                          </h2>
                        </td>
                        <td className="border-b border-gray-700" colSpan="3">
                          <h2 key={items[1]}>{items[1]}</h2>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="3">
                      <h2>
                        <strong>
                          {" "}
                          <input
                            className="border-none"
                            type="text"
                            name="custumLinkLabel"
                            id="custumLinkLabel"
                            placeholder="cutum link label"
                          />
                        </strong>
                      </h2>
                    </td>
                    <td colSpan="3">
                      <h2>
                        <input
                          className="border-none"
                          type="text"
                          name="custumLinkValue"
                          id="custumLinkValue"
                          placeholder="paste custum link "
                        />
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="border border-blue px-2 py-1 w-max"
                        onClick={() =>
                          addItemHandler("custumLinkLabel", "custumLinkValue")
                        }
                      >
                        Add
                      </div>
                      <div className="border border-blue px-2 py-1 w-max"
                        onClick={() =>
                          resetItemHandler("custumLinkLabel", "custumLinkValue")
                        }
                      >
                        Reset
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="border-x border-y border-gray-700 border-collapse w-full">
                <tbody>
                  {formData.questionAnswer.length != 0 &&
                    formData.questionAnswer.map((item) => {
                      return (
                        <tr colSpan="8" className="w-full py-2" key={item[0]}>
                          <td>
                            <h2 className="bg-rose-500 text-2xl font-semibold text-white">
                              {item[0]}
                            </h2>
                            <p className="py-1 text-base">{item[1]}</p>
                          </td>
                        </tr>
                      );
                    })}
                  <tr colSpan="8" className="w-full">
                    <td>
                      Question: POst related
                      <textarea
                        className="border border-gray-400 w-full"
                        ref={questionInput}
                      ></textarea>
                      Answer:{" "}
                      <textarea
                        className="border border-gray-400 w-full"
                        ref={answerInput}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className="border border-blue px-1 w-max"
                        onClick={addQuestionAnswerHandler}
                      >
                        Add
                      </div>
                      <div
                        className="border border-blue px-1 w-max"
                        onClick={() => {
                          resetItemHandler("questionAnswer");
                        }}
                      >
                        Reset
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className="bg-blue hover:cursor-pointer text-white py-1 px-2 rounded"
              type="submit"
              name="submit"
              id="submit"
            />
          </div>
        </form>
      )}
    </>
  );
}
