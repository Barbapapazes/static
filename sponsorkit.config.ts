import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "barbapapazes",
    type: "user",
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
    },
  ],
  outputDir: ".",
});
