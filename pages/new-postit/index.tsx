import { useRouter } from "next/router";
import React, { useReducer } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import translation function
import { useTranslation, Trans } from "next-i18next";
import Head from "next/head";

export default function NewPostitForm() {
  const { t } = useTranslation("page-new-postit");
  const router = useRouter();

  interface Action {
    type: string;
    inputField: string;
    payload: string;
  }

  interface FormState {
    title: string;
    creator: string;
    description: string;
    colorSelect: string;
  }

  const formReducer = (state: FormState, action: Action) => {
    switch (action.type) {
      case "CHANGE@TEXTINPUTS":
        return { ...state, [action.inputField]: action.payload };
      default:
        return state;
    }
  };

  const initialState = {
    title: "",
    creator: "",
    description: "",
    colorSelect: "#f9f474",
  };
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const inputChangeHandler = (event) => {
    dispatch({
      type: "CHANGE@TEXTINPUTS",
      inputField: event.target.name,
      payload: event.target.value,
    });
  };

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const postitData = {
      creator: formData.creator,
      title: formData.title,
      content: formData.description,
      color: formData.colorSelect,
    };
    const response = await fetch("/api/add-postit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postitData),
    });

    if (response.ok) {
      router.push("/board");
    } else {
      window.alert("Something went wrong, try again");
    }
  }

  return (
    <>
      <Head>
        <meta name="description" content="page for adding a new post-it" />
      </Head>
      <div className="bg-notebook min-h-screen flex flex-col gap-5 justify-center items-center pt-24 md:pt-10">
        <h1 className="text-6xl text-center drop-shadow-[0px_0px_1px_rgb(0,0,0)]">
          {t("form-head")}
        </h1>
        <form
          className="flex flex-col gap-5 justify-between items-center mt-10"
          onSubmit={submitHandler}
        >
          <div
            className={`flex flex-col gap-2 p-5 w-64 h-64 bg-[${formData.colorSelect}] font-indieFlower break-words shadow-lg`}
          >
            <input
              name="title"
              id="title"
              required
              maxLength={25}
              onChange={(e) => inputChangeHandler(e)}
              className="bg-transparent text-slate-900 text-2xl resize-none"
              placeholder={t("form-placehldr-1")}
            />
            <input
              name="creator"
              id="creator"
              required
              maxLength={20}
              onChange={(e) => inputChangeHandler(e)}
              className="bg-transparent text-slate-900 text-xl"
              placeholder={t("form-placehldr-2")}
            />
            <span className="text-sm leading-3 text-slate-900">----</span>
            <textarea
              name="description"
              id="description"
              required
              maxLength={80}
              onChange={(e) => inputChangeHandler(e)}
              className="bg-transparent text-2xl text-slate-900 m-0 h-full max-h-22 overflow-y-auto resize-none"
              placeholder={t("form-placehldr-3")}
            ></textarea>
          </div>
          <fieldset
            onChange={(e) => inputChangeHandler(e)}
            className="mt-8 flex flex-wrap gap-5 md:gap-8 h-10 cursor-none"
            title="color picker"
          >
            <div className="flex flex-col items-center relative">
              <input
                type="radio"
                name="colorSelect"
                id="option1"
                value={"#74f9e5"}
              />
              <label
                htmlFor="option1"
                className="w-10 h-10 rounded-full bg-[#74f9e5]"
              ></label>
            </div>
            <div className="flex flex-col items-center relative">
              <input
                type="radio"
                name="colorSelect"
                id="option2"
                value={"#f9f474"}
                defaultChecked={true}
              />
              <label
                htmlFor="option2"
                className="w-10 h-10 rounded-full bg-[#f9f474]"
              ></label>
            </div>
            <div className="flex flex-col items-center relative">
              <input
                type="radio"
                name="colorSelect"
                id="option3"
                value={"#f974e1"}
              />
              <label
                htmlFor="option3"
                className="w-10 h-10 rounded-full bg-[#f974e1]"
              ></label>
            </div>
            <div className="flex flex-col items-center relative">
              <input
                type="radio"
                name="colorSelect"
                id="option4"
                value={"#dfded2"}
              />
              <label
                htmlFor="option4"
                className="w-10 h-10 rounded-full bg-[#dfded2]"
              ></label>
            </div>
            <div className="flex flex-col items-center relative">
              <input
                type="radio"
                name="colorSelect"
                id="option5"
                value={"#f97474"}
              />
              <label
                htmlFor="option5"
                className="w-10 h-10 rounded-full bg-[#f97474]"
              ></label>
            </div>
          </fieldset>
          <button className={`cursor-none font-indieFlower text-lg bg-[${formData.colorSelect}] px-4 py-2 mt-10 rounded-lg text-slate-800 font-semibold border border-slate-400 hover:scale-110 transition-all`}>
            {t("form-submit")}
          </button>
        </form>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-new-postit"])),
    },
  };
}
