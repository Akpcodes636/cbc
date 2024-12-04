import { defineType } from "sanity";
import { blockContent } from "./blockContent";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "registrations",
      title: "Registrations",
      type: "array",
      of: [
        {
          type: "object",
          name: "registration",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "email",
              title: "Email",
              type: "string",
            },
            {
              name: "createdAt",
              title: "Created At",
              type: "datetime",
              initialValue: () => new Date().toISOString(),
            },
          ],
        },
      ],
    },
    {
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        { name: "venue", title: "Venue", type: "string" },
        { name: "address", title: "Address", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "state", title: "State", type: "string" },
        { name: "country", title: "Country", type: "string" },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: date && new Date(date).toLocaleDateString(),
        media,
      };
    },
  },
});
