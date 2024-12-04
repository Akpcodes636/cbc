// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";
// import { toast } from "sonner";
// import { useOpenModal } from "@/zustand/store";
// import { writeClient } from "../lib/write-client";

// const RegistrationModal = ({ event, eventId }) => {
//   const [loading, setLoading] = useState(false);
//   const { isOpen, setShowRegistrationModal } = useOpenModal();

//   // Helper function to capitalize words
//   const capitalizeWords = (str) =>
//     str
//       ? str
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ")
//       : "";

//   // Check for existing emails
//   const emails = event?.registrations?.map((r) => r.email) || [];

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test(
//           "unique-email",
//           "Email Already Exists",
//           (value) => !emails.includes(value)
//         ),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       setLoading(true);

//       try {
//         // Validate inputs again before submission
//         await formik.validateForm(values);

//         if (Object.keys(formik.errors).length > 0) {
//           throw new Error("Form validation failed");
//         }

//         // Ensure eventId exists
//         if (!eventId) {
//           throw new Error("Event ID is missing");
//         }

//         const registrationData = {
//           _key: nanoid(),
//           _type: "registration",
//           name: values.name,
//           email: values.email,
//           createdAt: new Date().toISOString(),
//         };

//         // More robust error handling for writeClient
//         const response = await writeClient
//           .patch(eventId)
//           .setIfMissing({ registrations: [] })
//           .append("registrations", [registrationData])
//           .commit({ autoGenerateArrayKeys: true });

//         if (response) {
//           toast.success("Registration Successful");
//           resetForm();
//           setShowRegistrationModal(false);
//         } else {
//           throw new Error("No response from server");
//         }
//       } catch (error) {
//         console.error("Registration Error:", error);

//         // More specific error messaging
//         const errorMessage = error.message.includes("unique-email")
//           ? "This email is already registered"
//           : "Failed to register. Please try again.";

//         toast.error(errorMessage);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
//         isOpen ? "visible" : "invisible"
//       }`}
//     >
//       <div className="bg-white p-8 rounded-lg w-96">
//         <h2 className="text-2xl mb-4">
//           Register for {capitalizeWords(event.slug?.current)}
//         </h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               {...formik.getFieldProps("name")}
//               className="w-full p-2 border rounded"
//             />
//             {formik.touched.name && formik.errors.name && (
//               <div className="text-red-500 text-sm mt-1">
//                 {formik.errors.name}
//               </div>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...formik.getFieldProps("email")}
//               className="w-full p-2 border rounded"
//             />
//             {formik.touched.email && formik.errors.email && (
//               <div className="text-red-500 text-sm mt-1">
//                 {formik.errors.email}
//               </div>
//             )}
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               onClick={() => setShowRegistrationModal(false)}
//               className="bg-gray-300 text-black px-4 py-2 rounded"
//               disabled={loading}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-[#005effdd] text-white px-4 py-2 rounded"
//               disabled={loading}
//             >
//               {loading ? "Registering..." : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationModal;
"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Button from "./ui/Button";
import { toast } from "sonner";
import { writeClient } from "@/app/lib/write-client";
import { nanoid } from "nanoid"; // Ensure nanoid is installed: npm install nanoid
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEventModalStore } from "@/zustand/store";

import { FaCheckCircle } from "react-icons/fa";

const EventRegisterModal = ({ eventId, event }) => {
  const [loading, setLoading] = useState(false);
  // const {
  //   closeEventModal,
  //   isEventModalOpen,
  //   isRegisterSuccess,
  //   openSuccess,
  //   closeSuccess,
  // } = useEventModalStore();
  const { isOpen, setShowRegistrationModal } = useEventModalStore();
  // const emails = event?.registrations.map((r) => r.email);

  //   console.log(emails);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Start loading state
      // const existingEmail = emails.includes(formik.values.email);

      // if (existingEmail) {
      //   toast.warning("Email Already Exists");
      //   setLoading(false);
      //   return;
      // }

      try {
        const response = await writeClient
          .patch(eventId) // Start a patch on the event document
          .setIfMissing({ registrations: [] }) // Ensure registrations exists
          .append("registrations", [
            {
              _key: nanoid(), // Generate a unique key
              _type: "registration",
              name: values.name,
              email: values.email,
              createdAt: new Date().toISOString(),
            },
          ])
          .commit(); // Save changes

        //   console.log("Sanity Response:", response);

        if (response) {
          toast.success("Registration Successful");
          resetForm(); // Clear form fields
          // openSuccess();
        }
      } catch (error) {
        console.error("Registration Error:", error);
        toast.error("Failed to register. Please try again.");
      } finally {
        setLoading(false); // End loading state
      }
    },
  });

  const reset = () => {
    window.location.reload();
    // closeEventModal();
    // closeSuccess();
  };
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed top-0 bg-[#33333350] backdrop-blur left-0 right-0 bottom-0 flex justify-center items-center z-50 px-4">
            {/* {isRegisterSuccess ? (
              <div className="bg-white p-5 rounded-xl flex flex-col items-center w-full max-w-md pt-8 relative">
                <IoMdCloseCircleOutline
                  onClick={closeEventModal}
                  className="absolute top-2 right-2"
                  size={22}
                />
                <FaCheckCircle size={80} className="text-success mb-4" />
                <p className="text-lg font-medium text-primary mb-2">
                  Registration Successful
                </p>
                <p className="text-center text-sm mb-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil, rerum.
                </p>
                <Button fn={reset} style="primary" type="button">
                  Proceed
                </Button>
              </div>
            ) : ( */}
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white p-5 rounded-xl flex flex-col gap-4 w-full max-w-md pt-8 relative"
            >
              <IoMdCloseCircleOutline
                // onClick={closeEventModal}
                className="absolute top-2 right-2"
                size={22}
              />
              <h3 className="text-start font-medium">Event Registration</h3>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`input-class ${
                    formik.touched.name && formik.errors.name
                      ? "input-error"
                      : ""
                  }`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter name"
                />
                {formik.touched.name && formik.errors.name && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`input-class ${
                    formik.touched.email && formik.errors.email
                      ? "input-error"
                      : ""
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter email"
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              {/* <Button loading={loading} style="primary" type="submit">
                  Register
                </Button> */}
              <button type="submit">Register</button>
            </form>
            {/* )} */}
          </div>
        </>
      )}
    </>
  );
};

export default EventRegisterModal;
