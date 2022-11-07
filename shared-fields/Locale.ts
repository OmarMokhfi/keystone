import { select } from "@keystone-6/core/fields";

export const locale = select({
  type: "enum",
  options: [
    { label: "English", value: "en" },
    { label: "German", value: "de" },
  ],
  defaultValue: "en",
  db: { map: "my_languages" },
  validation: { isRequired: true },
  ui: { displayMode: "select" },
});
