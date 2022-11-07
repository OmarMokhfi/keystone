import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, select } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { locale } from "../shared-fields/Locale";

export const Workshop = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),

    course: select({
      type: "enum",
      options: [
        { label: "Web Development", value: "web_development" },
        { label: "Cybersecurity", value: "cyber_security" },
      ],
      defaultValue: "...",
      db: { map: "my_select" },
      validation: { isRequired: true },
      ui: { displayMode: "select" },
    }),

    locale: locale
  },
});
