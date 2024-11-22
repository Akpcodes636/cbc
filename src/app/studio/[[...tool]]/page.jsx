import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

// akpcodes636
// 3129675948Akp
// git remote set-url origin https://akpcodes636:token@github.com/Akpcodes636/cryptoCommunity.git
