import React from "react";

export default function Contact() {
  return (
    <section className="py-[9.6rem]">
      <div className="container-sm">
        <div className="rounded grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-blue-400">
          <div className="p-12 lg:col-span-2">
            <h2 className="mb-[1.2rem] text-[2.4rem] font-days-one text-white">
              Reach to us via Email
            </h2>
            <p className="text-[1.3rem] mb-10 font-thin text-white">
              The Crypto Bootcamp Community is a synonymous with excellency,
              professionalism, and skill, the best place to be.
            </p>
            <form
              action="
            "
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 cta-form gap-10"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="me@example.com"
                  className="w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-white">
                  Where did you hear from us?
                </label>
                <select required className="text-white outline-none">
                  <option value="#">Please Choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="my-7">
                <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  sign up
                </button>
              </div>
            </form>
          </div>
          <div
            className="cta-img-box col-span-1 hidden md:block lg:block rounded-sm"
            role="img"
            ria-label="man preparing food"
          ></div>
        </div>
      </div>
    </section>
  );
}
