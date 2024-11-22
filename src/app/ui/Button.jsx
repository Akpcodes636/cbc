"use client";

export default function Button({ css, children }) {
  return (
    <button
      className={`"${css} flex justify-center items-center gap-1 font-semibold text-white px-3 py-2 bg-black rounded-md min-w-24 hover:scale-[0.96] active:scale-[1.01] duration-150"`}
    >
      {children}
    </button>
  );
}
