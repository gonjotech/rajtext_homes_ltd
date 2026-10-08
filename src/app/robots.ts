import { MetadataRoute } from "next";
import { COMPANY_DATA } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${COMPANY_DATA.domain}/sitemap.xml`,
  };
}
