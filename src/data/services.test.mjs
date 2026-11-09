import { expect, test } from "bun:test";
import { SERVICES } from "./services.ts";

test("all published package names and USD prices match the approved catalog", () => {
  const actual = SERVICES.flatMap((service) => service.packages.map(({ name, price }) => [name, price]));
  expect(actual).toEqual([
    ["Author Brand Essentials", 650],
    ["Complete Author Brand", 1250],
    ["Author Brand & Digital Presence", 2100],
    ["Book Landing Page", 450],
    ["Complete Author Website", 950],
    ["Premium Author Digital Platform", 1750],
    ["Pinterest Foundation", 250],
    ["Pinterest Visibility Campaign", 450],
    ["Pinterest Growth Campaign", 750],
    ["Listopia Starter", 85],
    ["Listopia Visibility", 150],
    ["Listopia Extended Campaign", 300],
    ["Essential Book Discovery", 350],
    ["Multi-Platform Visibility", 550],
    ["Complete Book Discovery Campaign", 850],
    ["Pinterest Management", 350],
    ["Multi-Platform Management", 650],
    ["Comprehensive Visibility Management", 950],
  ]);
});

test("only ongoing management packages are marked monthly", () => {
  const monthly = SERVICES.flatMap((service) => service.packages.filter((offer) => "monthly" in offer && offer.monthly).map((offer) => offer.name));
  expect(monthly).toEqual(["Pinterest Management", "Multi-Platform Management", "Comprehensive Visibility Management"]);
});