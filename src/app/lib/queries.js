import { defineQuery } from "next-sanity";

export const EVENT_QUERY =
  defineQuery(`*[_type == "event" && slug.current == $slug][0]{
_id,
theme,
slug,
time,
image,
date,
location,
link,
registrations,
description,
_createdAt,
}`);

// console.log(EVENT_QUERY);
