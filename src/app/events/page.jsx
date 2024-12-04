import Events from "@/components/Events";

// Add capitalizeWords function
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function EventsPage() {
  return (
    <section className="">
      <div
        className="h-[50vh] sm:h-[50vh] flex flex-col"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img15.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="blog-header font-raleway text-center text-4xl text-white">
          {capitalizeWords("Upcoming Events")}
        </h1>
        <p className="text-white text-center">
          Take a look at some of our upcoming events.
        </p>
      </div>
      <Events />
    </section>
  );
}
