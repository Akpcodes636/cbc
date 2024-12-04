"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { EVENT_QUERY } from "@/app/lib/queries";
import Loader from "@/app/ui/Loader";
import { Toaster, toast } from "sonner";
import imageUrlBuilder from "@sanity/image-url";
import RegistrationModal from "@/app/ui/openModal";
import { useEventModalStore } from "@/zustand/store";
import { writeClient } from "@/app/lib/write-client";
import Back from "@/components/back";

// Create image URL builder
const builder = imageUrlBuilder(client);

// Utility function to create image URLs
const urlFor = (source) => {
  return source ? builder.image(source).url() : null;
};

// Utility to capitalize words
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const { isOpen, setShowRegistrationModal } = useEventModalStore();
  const [loading, setLoading] = useState(true);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
  });
  const { eventSlug } = useParams();

  const showModal = () => {
    console.log("hello");
    setShowRegistrationModal(true);
  };

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const fetchedEvent = await client.fetch(EVENT_QUERY, {
        slug: eventSlug,
      });
      setEvent(fetchedEvent);
      console.log(fetchedEvent);
    } catch (error) {
      console.error("Error fetching Events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (eventSlug) {
      fetchEvent();
    }
  }, [eventSlug]);

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      // Validate input
      if (!registrationData.name || !registrationData.email) {
        toast.error("Please fill in all fields");
        return;
      }

      // Prepare registration data
      const newRegistration = {
        name: registrationData.name,
        email: registrationData.email,
        registeredAt: new Date().toISOString(),
      };

      // Update event's registrations
      const updatedRegistrations = [
        ...(event.registrations || []),
        newRegistration,
      ];
      {
        console.log(updatedRegistrations);
      }
      // Update the event document
      await writeClient
        .patch(event._id)
        .set({ registrations: updatedRegistrations })
        .commit();

      // Refresh event data
      await fetchEvent();

      // Close modal and show success toast
      setShowRegistrationModal(false);
      toast.success("Successfully registered for the event!");

      // Reset registration data
      setRegistrationData({ name: "", email: "" });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No event found</p>
      </div>
    );
  }

  return (
    <div className="py-2 min-h-screen">
      {/* Toaster for notifications */}
      <Toaster position="top-right" richColors />

      {/* Registration Modal */}
      {/* {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl mb-4">
              Register for {capitalizeWords(event.slug?.current)}
            </h2>
            <form onSubmit={handleRegistration}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registrationData.name}
                  onChange={handleRegistrationChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#005effdd] text-white px-4 py-2 rounded"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
      <RegistrationModal
        event={event}
        eventId={event._id}
        isOpen={isOpen}
        showRegistrationModal={setShowRegistrationModal}
        // setShowRegistrationModal={setShowRegistrationModal}
        registrationData={registrationData}
        handleRegistrationChange={handleRegistrationChange}
        handleRegistration={handleRegistration}
        capitalizeWords={capitalizeWords}
      />

      {/* Existing event page content */}

      <div className="flex items-center mb-10">
        <div className="w-full">
          <div
            className="h-[50vh] sm:h-[50vh] flex flex-col justify-center items-center"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(event.image?.asset) || "/three.jpg"})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 className="blog-header font-raleway text-center text-4xl text-white">
              {capitalizeWords(event.slug?.current || "Event Details")}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-sm mx-auto">
        <div className="single-event-main w-full bg-gray-100  mt-8 rounded-lg">
          {/* Event Image */}

          {/* Event Details */}
          <div className="single-content px-6 py-4">
            <h2 className="text-2xl text-[#005effdd]">
              {capitalizeWords(event.slug?.current || "Event Name")}
            </h2>

            {/* Registered Users Count */}
            <div className="mt-2 text-sm text-gray-600">
              Registered Users: {event.registrations?.length || 0}
            </div>

            {/* Description */}
            <p className="text-base mt-2">{event.description}</p>

            {/* Location Details */}
            {event.location && (
              <div className="mt-4">
                <h3 className="font-semibold">Location Details:</h3>
                <p>{event.location.venue}</p>
                <p>{`${event.location.address}, ${event.location.city}, ${event.location.state}, ${event.location.country}`}</p>
              </div>
            )}

            {/* Date */}
            {event.date && (
              <div className="mt-4">
                <h3 className="font-semibold">Date:</h3>
                <p>{new Date(event.date).toLocaleString()}</p>
              </div>
            )}

            {/* Registration Button */}
            <div className="mt-5">
              {event ? (
                <button
                  // onClick={(openModal) => setShowRegistrationModal(!openModal)}
                  onClick={showModal}
                  className="btn-view-event w-36 h-10 font-bold text-white bg-[#005effdd] border-none rounded-md px-4 py-2 cursor-pointer inline-block text-center"
                >
                  Register Now
                </button>
              ) : (
                <button
                  disabled
                  className="btn-view-event w-36 h-10 font-bold text-white bg-gray-400 border-none rounded-md px-4 py-2 cursor-not-allowed"
                >
                  No Registration
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
