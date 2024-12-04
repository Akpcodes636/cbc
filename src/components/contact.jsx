import React from "react";

export default function Contact() {
  return (
    <section className="py-[9.6rem]">
      <div className="container-sm">
        <div className="ct grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-blue-400 rounded-[11px]">
          <div className="p-8 lg:col-span-2 ">
            <h2 className="mb-[1.2rem] text-[2.4rem] font-days-one">
              Reach to us via Email
            </h2>
            <p className="text-[1.3rem] mb-10 ">
              The Crypto Bootcamp Community is a synonymous with excellency,
              professionalism, and skill, the best place to be.
            </p>
            <form
              action="
            "
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 cta-form gap-10"
            >
              <div>
                <label className="block text-[1rem] font-medium">
                  Full Name
                </label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="text" placeholder="me@example.com" />
              </div>
              <div>
                <label>Where did you hear from us?</label>
                <select required>
                  <option value="#">Please Choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="my-7">
                <button className="btn--form w-full bg-blue-900 py-[1rem] px-[1rem]">
                  sign up
                </button>
              </div>
            </form>
          </div>
          <div
            className="cta-img-box col-span-1 hidden md:block lg:block"
            role="img"
            ria-label="man preparing food"
          ></div>
        </div>
      </div>
    </section>
  );
}
