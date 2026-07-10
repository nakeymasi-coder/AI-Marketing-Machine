"use strict";

/* ==========================================================
   APPLICATION CONSTANTS
========================================================== */

const APP_NAME = "Faith-Based Luxury Affirmation Artwork Prompt Generator";

const STORAGE_KEYS = Object.freeze({
  SAVED_PROMPTS: "faithLuxuryAffirmationGenerator.savedPrompts",
  ACTIVE_PRESET: "faithLuxuryAffirmationGenerator.activePreset",
  LOCKS: "faithLuxuryAffirmationGenerator.locks"
});

const INPUT_TYPES = Object.freeze({
  DROPDOWN: "dropdown",
  CHIP: "chip-button",
  MULTI_CHIP: "multi-select",
  TEXT: "text",
  TEXTAREA: "textarea"
});

const QUALITY_METRICS = Object.freeze({
  COMPLETENESS: "completeness",
  CLARITY: "clarity",
  DETAIL: "detail",
  READABILITY: "readability",
  MISSING_INFORMATION: "missingInformation",
  PROMPT_EFFECTIVENESS: "promptEffectiveness"
});

const DEFAULT_VALUES = Object.freeze({
  SELECT: "None",
  TEXT: "",
  TEXTAREA: ""
});

/* ==========================================================
   OPTION DATA
========================================================== */

const OPTION_DATA = Object.freeze({

  artworkStyle: [
    "None",
    "Cinematic",
    "Digital Painting",
    "Elegant",
    "Glamorous",
    "High Fashion",
    "Hyper Realistic",
    "Illustration",
    "Luxury Editorial",
    "Mixed Media",
    "3D Illustration",
"Abstract Expressionism",
"Airbrush Art",
"Art Deco",
"Baroque",
"Black and White Fine Art",
"Bohemian",
"Classical Fine Art",
"Classic Oil Painting",
"Collage Art",
"Colored Pencil Illustration",
"Contemporary Fine Art",
"Dreamlike",
"Elegant Minimalism",
"Expressionist",
"Fantasy Illustration",
"Fine Art Photography",
"Flat Illustration",
"Floating Ink Art",
"Folk Art",
"French Impressionism",
"Futuristic Luxury",
"Glam Editorial",
"Glass Art",
"Gothic Elegance",
"Graphic Novel",
"High-End Commercial",
"Hyper Detailed",
"Luxury Magazine Cover",
"Luxury Portrait",
"Matte Painting",
"Minimal Luxury",
"Mixed Technique",
"Modern Fine Art",
"Modern Glamour",
"Modern Realism",
"Monochromatic",
"Museum Quality",
"Pastel Illustration",
"Photorealistic",
"Pop Art",
"Renaissance Inspired",
"Soft Painterly",
"Stylized Realism",
"Surrealism",
"Traditional Illustration",
"Ultra Detailed",
"Vintage Luxury",
"Watercolor Illustration",
"Woodcut Style"
  ],

  faithTheme: [
    "None",
    "Blessings",
    "Encouragement",
    "God's Favor",
    "God's Grace",
    "God's Love",
    "God's Peace",
    "God's Promises",
    "God's Protection",
    "God's Provision",
    "God's Purpose",
    "God's Strength",
    "God's Timing",
    "Gratitude",
    "Healing",
    "Hope",
    "Prayer",
    "Walking by Faith",
    "Worship",
    "Abiding in Christ",
"Anointed",
"Answered Prayer",
"Armor of God",
"Assurance",
"Be Still",
"Biblical Wisdom",
"Bold Faith",
"Breaking Chains",
"Chosen",
"Contentment",
"Covenant",
"Daily Devotion",
"Divine Direction",
"Divine Healing",
"Divine Restoration",
"Eternal Hope",
"Faith Over Fear",
"Favor and Increase",
"Forgiveness",
"Freedom in Christ",
"Fruit of the Spirit",
"God's Faithfulness",
"God's Mercy",
"God's Presence",
"God's Refuge",
"God's Truth",
"Grace Upon Grace",
"Holy Spirit",
"Humility",
"Identity in Christ",
"Joy in the Lord",
"Kingdom Living",
"Light of the World",
"Love Never Fails",
"New Beginnings",
"Obedience",
"Overflow",
"Patience",
"Peace Beyond Understanding",
"Perseverance",
"Praise",
"Redemption",
"Renewed Mind",
"Revival",
"Salvation",
"Spiritual Growth",
"Steadfast Faith",
"Trust in God's Plan",
"Victory Through Christ",
  ],

  empowermentTheme: [
    "None",
    "Abundance",
    "Confidence",
    "Courage",
    "Growth",
    "Healing",
    "Joy",
    "Peace",
    "Purpose",
    "Resilience",
    "Self Worth",
    "Strength",
    "Success",
    "Victory",
    "Authenticity",
"Balance",
"Becoming",
"Boldness",
"Breakthrough",
"Calm",
"Capability",
"Celebration",
"Change",
"Compassion",
"Determination",
"Discipline",
"Dream Big",
"Empowerment",
"Endurance",
"Excellence",
"Fearlessness",
"Focus",
"Forgiveness",
"Freedom",
"Fresh Start",
"Generosity",
"Grace",
"Gratitude",
"Happiness",
"Harmony",
"Healing Journey",
"Hopeful Future",
"Inner Beauty",
"Inner Peace",
"Inspiration",
"Leadership",
"Legacy",
"Limitless Potential",
"Love Yourself",
"Mindset Shift",
"Motivation",
"New Chapter",
"Optimism",
"Personal Growth",
"Positivity",
"Purpose Driven",
"Renewal",
"Self Acceptance",
"Self Belief",
"Self Care",
"Transformation",
"Triumph",
"Unshakable Confidence",
"Wholeness",
  ],

  subject: [
    "None",
    "Child",
    "Couple",
    "Family",
    "Individual Portrait",
    "Man",
    "Teen",
    "Woman",
    "Young Adult",
    "Author",
"Bride",
"Business Professional",
"Caregiver",
"Chef",
"College Student",
"Community Leader",
"Content Creator",
"Dancer",
"Daughter",
"Entrepreneur",
"Father",
"Firefighter",
"Fitness Coach",
"Graduate",
"Grandfather",
"Grandmother",
"Groom",
"Healer",
"Healthcare Professional",
"High School Student",
"Influencer",
"Judge",
"King",
"Little Girl",
"Little Boy",
"Mentor",
"Military Veteran",
"Minister",
"Missionary",
"Model",
"Mother",
"Musician",
"Nurse",
"Pastor",
"Photographer",
"Police Officer",
"Prayer Warrior",
"Pregnant Mother",
"Queen",
"Retiree",
"Scholar",
"Singer",
"Sister",
"Small Business Owner",
"Teacher",
"Traveler",
"Volunteer",
"Wedding Couple",
"Youth Leader",
  ],


  bodyType: [
  "None",
  "Athletic",
  "Average",
  "Broad Shoulders",
  "Curvy",
  "Fit",
  "Full Figure",
  "Heavyset",
  "Lean",
  "Medium Build",
  "Muscular",
  "Pear Shaped",
  "Petite",
  "Plus Size",
  "Pregnant",
  "Slender",
  "Slim",
  "Stocky",
  "Tall",
  "Thick",
  "Voluptuous",
  "Wide Frame"
],

ethnicity: [
  "None",
  "African",
  "African American",
  "Arab",
  "Asian",
  "Black",
  "Caribbean",
  "Caucasian",
  "East Asian",
  "Ethiopian",
  "Filipino",
  "Hawaiian",
  "Hispanic",
  "Indian",
  "Indigenous",
  "Japanese",
  "Korean",
  "Latina",
  "Latino",
  "Maori",
  "Mediterranean",
  "Middle Eastern",
  "Mixed Ethnicity",
  "Native American",
  "Pacific Islander",
  "South Asian",
  "Southeast Asian",
  "White"
],

ageGroup: [
  "None",
  "Baby",
  "Centenarian",
  "Child",
  "Elderly",
  "Middle Aged",
  "Preteen",
  "Senior Adult",
  "Teenager",
  "Young Adult"
],

  environment: [
    "None",
    "Abstract Background",
    "Beach",
    "Cathedral",
    "Church",
    "City",
    "Floral Setting",
    "Forest",
    "Garden",
    "Heavenly Light",
    "Luxury Interior",
    "Mountain",
    "Studio",
    "Sunrise",
    "Sunset"
  ],

  colorPalette: [
    "None",
    "Emerald & Gold",
    "Gold & Black",
    "Gold & White",
    "Monochrome",
    "Neutral Luxury",
    "Pink & Gold",
    "Purple & Gold",
    "Royal Blue & Gold",
    "Soft Pastels"
  ],

  typographyStyle: [
    "None",
    "Bold Modern",
    "Elegant Script",
    "Embossed",
    "Gold Foil",
    "Hand Lettered",
    "Luxury Serif",
    "Minimal Sans Serif",
    "Mixed Typography",
    "Neon Style"
  ],

  lighting: [
    "None",
    "Backlit",
    "Cinematic",
    "Dramatic",
    "Glowing",
    "Golden Hour",
    "High Contrast",
    "Soft Natural",
    "Studio Lighting",
    "Volumetric"
  ],

  composition: [
    "None",
    "Centered Portrait",
    "Close Up",
    "Dynamic Composition",
    "Full Body",
    "Magazine Cover",
    "Poster Layout",
    "Symmetrical",
    "Waist Up",
    "Wide Scene"
  ],

  visualDetails: [
    "None",
    "Bokeh",
    "Butterflies",
    "Clouds",
    "Decorative Frame",
    "Elegant Textures",
    "Flowers",
    "Gold Accents",
    "Light Rays",
    "Soft Glow",
    "Sparkles",
    "Water Reflections"
  ]

});

/* ==========================================================
   PRESET DATA
========================================================== */

const PRESET_DATA = {
  "Bold Faith Confidence": {
    artworkStyle: "Luxury Editorial",
    faithTheme: "Faith Over Fear",
    empowermentTheme: "Confidence",
    subject: "Woman",
    bodyType: "Plus Size",
    ethnicity: "African American",
    ageGroup: "Adult",
    environment: "Luxury Interior",
    colorPalette: "Royal Blue & Gold",
    typographyStyle: "Luxury Serif",
    lighting: "Golden Hour",
    composition: "Centered Portrait",
    visualDetails: ["Gold Accents", "Soft Glow", "Elegant Textures"],
    affirmationText: "I walk boldly in faith, confidence, and purpose.",
    additionalInstructions: ""
  },

  "Peace Beyond Understanding": {
    artworkStyle: "Soft Painterly",
    faithTheme: "Peace Beyond Understanding",
    empowermentTheme: "Peace",
    subject: "Individual Portrait",
    bodyType: "Average",
    ethnicity: "Mixed Ethnicity",
    ageGroup: "Adult",
    environment: "Garden",
    colorPalette: "Soft Pastels",
    typographyStyle: "Elegant Script",
    lighting: "Soft Natural",
    composition: "Waist Up",
    visualDetails: ["Flowers", "Soft Glow", "Light Rays"],
    affirmationText: "God’s peace covers me, steadies me, and leads me.",
    additionalInstructions: ""
  },

  "Chosen And Covered": {
    artworkStyle: "High Fashion",
    faithTheme: "Chosen",
    empowermentTheme: "Self Worth",
    subject: "Woman",
    bodyType: "Curvy",
    ethnicity: "Black",
    ageGroup: "40s",
    environment: "Studio",
    colorPalette: "Gold & Black",
    typographyStyle: "Gold Foil",
    lighting: "Studio Lighting",
    composition: "Magazine Cover",
    visualDetails: ["Gold Accents", "Bokeh", "Elegant Textures"],
    affirmationText: "I am chosen, covered, and called for more.",
    additionalInstructions: ""
  },

  "Grace In Bloom": {
    artworkStyle: "Watercolor Illustration",
    faithTheme: "God's Grace",
    empowermentTheme: "Healing",
    subject: "Woman",
    bodyType: "Petite",
    ethnicity: "Latina",
    ageGroup: "Young Adult",
    environment: "Flower Field",
    colorPalette: "Pink & Gold",
    typographyStyle: "Hand Lettered",
    lighting: "Glowing",
    composition: "Full Body",
    visualDetails: ["Flowers", "Butterflies", "Soft Glow"],
    affirmationText: "Grace is growing in every part of my life.",
    additionalInstructions: ""
  },

  "Victory Through Christ": {
    artworkStyle: "Cinematic",
    faithTheme: "Victory Through Christ",
    empowermentTheme: "Victory",
    subject: "Man",
    bodyType: "Athletic",
    ethnicity: "African",
    ageGroup: "Adult",
    environment: "Mountain",
    colorPalette: "Gold & White",
    typographyStyle: "Bold Modern",
    lighting: "Dramatic",
    composition: "Wide Scene",
    visualDetails: ["Light Rays", "Clouds", "Soft Glow"],
    affirmationText: "Through Christ, I rise with strength and victory.",
    additionalInstructions: ""
  },

  "New Chapter Glow": {
    artworkStyle: "Glamorous",
    faithTheme: "New Beginnings",
    empowermentTheme: "Fresh Start",
    subject: "Content Creator",
    bodyType: "Voluptuous",
    ethnicity: "Afro-Latina",
    ageGroup: "30s",
    environment: "City Rooftop",
    colorPalette: "Purple & Gold",
    typographyStyle: "Mixed Typography",
    lighting: "Cinematic",
    composition: "Poster Layout",
    visualDetails: ["Sparkles", "Gold Accents", "Bokeh"],
    affirmationText: "This is my new chapter, and I am glowing with purpose.",
    additionalInstructions: ""
  },

  "God’s Timing Is Perfect": {
    artworkStyle: "Elegant",
    faithTheme: "God's Timing",
    empowermentTheme: "Patience",
    subject: "Individual Portrait",
    bodyType: "Medium Build",
    ethnicity: "Asian",
    ageGroup: "Adult",
    environment: "Sunset",
    colorPalette: "Neutral Luxury",
    typographyStyle: "Luxury Serif",
    lighting: "Golden Hour",
    composition: "Close Up",
    visualDetails: ["Soft Glow", "Water Reflections", "Light Rays"],
    affirmationText: "God’s timing is perfect, and I trust the process.",
    additionalInstructions: ""
  },

  "Prayer Warrior Strength": {
    artworkStyle: "Hyper Realistic",
    faithTheme: "Prayer",
    empowermentTheme: "Strength",
    subject: "Prayer Warrior",
    bodyType: "Strong Build",
    ethnicity: "African American",
    ageGroup: "50s",
    environment: "Candlelit Chapel",
    colorPalette: "Gold & Black",
    typographyStyle: "Embossed",
    lighting: "Dramatic",
    composition: "Centered Portrait",
    visualDetails: ["Light Rays", "Soft Glow", "Gold Accents"],
    affirmationText: "My strength is renewed through prayer and faith.",
    additionalInstructions: ""
  },

  "Healing Journey": {
    artworkStyle: "Digital Painting",
    faithTheme: "Divine Healing",
    empowermentTheme: "Healing Journey",
    subject: "Woman",
    bodyType: "Full Figure",
    ethnicity: "Caribbean",
    ageGroup: "Adult",
    environment: "Beach",
    colorPalette: "Soft Pastels",
    typographyStyle: "Minimal Sans Serif",
    lighting: "Soft Natural",
    composition: "Wide Scene",
    visualDetails: ["Water Reflections", "Clouds", "Soft Glow"],
    affirmationText: "I am healing, growing, and becoming whole.",
    additionalInstructions: ""
  },

  "Purpose Driven Life": {
    artworkStyle: "Modern Realism",
    faithTheme: "God's Purpose",
    empowermentTheme: "Purpose Driven",
    subject: "Entrepreneur",
    bodyType: "Tall",
    ethnicity: "Middle Eastern",
    ageGroup: "Young Professional",
    environment: "Luxury Penthouse",
    colorPalette: "Emerald & Gold",
    typographyStyle: "Bold Modern",
    lighting: "High Contrast",
    composition: "Magazine Cover",
    visualDetails: ["Elegant Textures", "Gold Accents", "Decorative Frame"],
    affirmationText: "I am walking in purpose, power, and divine direction.",
    additionalInstructions: ""
  },

  "Faith Over Fear": {
    artworkStyle: "Luxury Portrait",
    faithTheme: "Faith Over Fear",
    empowermentTheme: "Courage",
    subject: "Teen",
    bodyType: "Youthful Build",
    ethnicity: "Hispanic",
    ageGroup: "Teen",
    environment: "Abstract Background",
    colorPalette: "Royal Blue & Gold",
    typographyStyle: "Neon Style",
    lighting: "Glowing",
    composition: "Close Up",
    visualDetails: ["Sparkles", "Soft Glow", "Bokeh"],
    affirmationText: "Faith is louder than fear.",
    additionalInstructions: ""
  },

  "Abundance And Overflow": {
    artworkStyle: "High-End Commercial",
    faithTheme: "Overflow",
    empowermentTheme: "Abundance",
    subject: "Business Professional",
    bodyType: "Curvy Athletic",
    ethnicity: "Nigerian",
    ageGroup: "40s",
    environment: "Grand Ballroom",
    colorPalette: "Gold & White",
    typographyStyle: "Gold Foil",
    lighting: "Studio Lighting",
    composition: "Full Body",
    visualDetails: ["Gold Accents", "Decorative Frame", "Elegant Textures"],
    affirmationText: "I am open to overflow, favor, and abundance.",
    additionalInstructions: ""
  },

  "Still Covered": {
    artworkStyle: "Minimal Luxury",
    faithTheme: "God's Protection",
    empowermentTheme: "Calm",
    subject: "Grandmother",
    bodyType: "Soft Curvy",
    ethnicity: "Black",
    ageGroup: "Senior Adult",
    environment: "Heavenly Light",
    colorPalette: "Gold & White",
    typographyStyle: "Elegant Script",
    lighting: "Volumetric",
    composition: "Waist Up",
    visualDetails: ["Light Rays", "Clouds", "Soft Glow"],
    affirmationText: "I am still covered, still blessed, and still becoming.",
    additionalInstructions: ""
  },

  "Joy Comes Morning": {
    artworkStyle: "Illustration",
    faithTheme: "Joy in the Lord",
    empowermentTheme: "Joy",
    subject: "Child",
    bodyType: "None",
    ethnicity: "Mixed Ethnicity",
    ageGroup: "Child",
    environment: "Sunrise",
    colorPalette: "Soft Pastels",
    typographyStyle: "Hand Lettered",
    lighting: "Golden Hour",
    composition: "Poster Layout",
    visualDetails: ["Flowers", "Butterflies", "Light Rays"],
    affirmationText: "Joy comes in the morning.",
    additionalInstructions: ""
  },

  "Unshakable Woman": {
    artworkStyle: "Bold Editorial",
    faithTheme: "Steadfast Faith",
    empowermentTheme: "Unshakable Confidence",
    subject: "Woman",
    bodyType: "Thick",
    ethnicity: "African American",
    ageGroup: "Adult",
    environment: "City",
    colorPalette: "Monochrome",
    typographyStyle: "Bold Modern",
    lighting: "High Contrast",
    composition: "Dynamic Composition",
    visualDetails: ["Bokeh", "Gold Accents", "Elegant Textures"],
    affirmationText: "I am unshakable because my faith is rooted in God.",
    additionalInstructions: ""
  }
};

/* ==========================================================
   CATEGORY CONFIGURATION
========================================================== */

const CATEGORY_CONFIG = Object.freeze([

  {
    id: "artworkStyle",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "faithTheme",
    customId: "faithThemeCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "empowermentTheme",
    customId: "empowermentThemeCustom",
    type: INPUT_TYPES.CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "subject",
    customId: "subjectCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
  id: "bodyType",
  customId: "bodyTypeCustom",
  type: INPUT_TYPES.DROPDOWN,
  randomize: true,
  preset: true,
  lock: true,
  clear: true
},

{
  id: "ethnicity",
  customId: "ethnicityCustom",
  type: INPUT_TYPES.DROPDOWN,
  randomize: true,
  preset: true,
  lock: true,
  clear: true
},

{
  id: "ageGroup",
  customId: "ageGroupCustom",
  type: INPUT_TYPES.DROPDOWN,
  randomize: true,
  preset: true,
  lock: true,
  clear: true
},


  {
    id: "environment",
    customId: "environmentCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "colorPalette",
    customId: "colorPaletteCustom",
    type: INPUT_TYPES.CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "typographyStyle",
    customId: "typographyStyleCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "lighting",
    customId: "lightingCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "composition",
    customId: "compositionCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "visualDetails",
    customId: "visualDetailsCustom",
    type: INPUT_TYPES.MULTI_CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "affirmationText",
    type: INPUT_TYPES.TEXTAREA,
    randomize: false,
    preset: true,
    lock: true,
    clear: true
  },

  {
    id: "additionalInstructions",
    type: INPUT_TYPES.TEXTAREA,
    randomize: false,
    preset: false,
    lock: true,
    clear: true
  }

]);

/* ==========================================================
   DOM HELPERS
========================================================== */

const $ = (selector, scope = document) => scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];

const byId = (id) => document.getElementById(id);

/* ==========================================================
   DOM REFERENCES
========================================================== */

const DOM = Object.freeze({

  presetsContainer: byId("presetsContainer"),


  premiumOutputs: {
  suno: byId("sunoPromptOutput"),
  video: byId("videoScriptOutput"),
  marketing: byId("marketingPromptOutput"),
  customGpt: byId("customGptPromptOutput")
},

premiumCopyButtons: {
  suno: byId("copySunoPromptBtn"),
  video: byId("copyVideoScriptBtn"),
  marketing: byId("copyMarketingPromptBtn"),
  customGpt: byId("copyCustomGptPromptBtn")
},
  generateButton: byId("generatePromptBtn"),
  randomizeButton: byId("randomizeBtn"),
  copyButton: byId("copyPromptBtn"),
  saveButton: byId("savePromptBtn"),
  clearButton: byId("clearAllBtn"),

  finalPrompt: byId("finalPrompt"),

  copyFinalPromptButton: byId("copyFinalPromptBtn"),

  characterCounter: byId("characterCounter"),
  promptQualityScore: byId("promptQualityScore"),

  variationsContainer: byId("promptVariationsContainer"),

  variationOutputs: [
    byId("variationOutput1"),
    byId("variationOutput2"),
    byId("variationOutput3"),
    byId("variationOutput4")
  ],

  historyContainer: byId("promptHistoryContainer"),
  historyTemplate: byId("promptHistoryTemplate"),

  quality: {
    overall: byId("qualityOverallScore"),
    completeness: byId("qualityCompleteness"),
    clarity: byId("qualityClarity"),
    detail: byId("qualityDetail"),
    readability: byId("qualityReadability"),
    missingInformation: byId("qualityMissingInformation"),
    promptEffectiveness: byId("qualityPromptEffectiveness")
  }

});

/* ==========================================================
   SHARED APPLICATION STATE
========================================================== */

const appState = {

  activePreset: null,

  savedPrompts: [],

  generatedPrompt: "",

  promptVariations: [],

  locks: {},

  quality: {
    score: 0,
    completeness: 0,
    clarity: 0,
    detail: 0,
    readability: 0,
    missingInformation: 0,
    promptEffectiveness: 0
  }

};

/* ==========================================================
   CATEGORY STATE
========================================================== */

const categoryState = CATEGORY_CONFIG.reduce((state, category) => {

  state[category.id] = {
    value:
      category.type === INPUT_TYPES.MULTI_CHIP
        ? []
        : DEFAULT_VALUES.SELECT,
    locked: false
  };

  if (category.customId) {
    state[category.customId] = {
      value: DEFAULT_VALUES.TEXT
    };
  }

  if (category.type === INPUT_TYPES.TEXTAREA) {
    state[category.id] = {
      value: DEFAULT_VALUES.TEXTAREA,
      locked: false
    };
  }

  return state;

}, {});

/* ==========================================================
   UTILITY FUNCTIONS
========================================================== */

function isString(value) {
  return typeof value === "string";
}

function cleanText(value) {
  return isString(value) ? value.trim().replace(/\s+/g, " ") : "";
}

function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return value.length === 0 || value.every((item) => item === DEFAULT_VALUES.SELECT);
  }

  return cleanText(value) === "" || value === DEFAULT_VALUES.SELECT;
}

function uniqueValues(values) {
  return [...new Set(values.filter((value) => !isEmptyValue(value)))];
}

function getCategoryConfig(categoryId) {
  return CATEGORY_CONFIG.find((category) => category.id === categoryId) || null;
}

function getCategoryElement(categoryId) {
  return byId(categoryId);
}

function getCustomElement(category) {
  return category.customId ? byId(category.customId) : null;
}

function getLockButton(categoryId) {
  return byId(`${categoryId}Lock`);
}

function getClearButton(categoryId) {
  return byId(`clear${categoryId.charAt(0).toUpperCase()}${categoryId.slice(1)}`);
}

function getCategoryCard(categoryId) {
  return byId(`${categoryId}Section`);
}

function getCategoryContent(categoryId) {
  return byId(`${categoryId}Content`);
}

function getCategoryToggle(categoryId) {
  return byId(`${categoryId}Toggle`);
}

function randomFromArray(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return null;
  }

  return values[Math.floor(Math.random() * values.length)];
}

function getRandomOptions(categoryId) {
  return (OPTION_DATA[categoryId] || []).filter(
    (option) => option !== DEFAULT_VALUES.SELECT
  );
}

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function safeSetText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

function safeSetValue(element, value) {
  if (element) {
    element.value = value;
  }
}

/* ==========================================================
   STORAGE HELPERS
========================================================== */

function readStorage(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

/* ==========================================================
   DROPDOWN HELPERS
========================================================== */

function populateDropdown(category) {
  const select = getCategoryElement(category.id);
  const options = OPTION_DATA[category.id] || [];

  if (!select || category.type !== INPUT_TYPES.DROPDOWN) {
    return;
  }

  select.innerHTML = "";

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

function getDropdownValue(categoryId) {
  const select = getCategoryElement(categoryId);

  return select ? cleanText(select.value) : DEFAULT_VALUES.SELECT;
}

function setDropdownValue(categoryId, value) {
  const select = getCategoryElement(categoryId);

  if (!select) {
    return;
  }

  const approvedOptions = OPTION_DATA[categoryId] || [];
  select.value = approvedOptions.includes(value) ? value : DEFAULT_VALUES.SELECT;
  categoryState[categoryId].value = select.value;
}

/* ==========================================================
   CHIP BUTTON HELPERS
========================================================== */

function createChipButton(categoryId, option, multiSelect = false) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = multiSelect ? "multi-chip-btn" : "chip-btn";
  button.textContent = option;
  button.dataset.value = option;
  button.setAttribute("aria-pressed", option === DEFAULT_VALUES.SELECT ? "true" : "false");

  return button;
}

function populateChipGroup(category) {
  const group = getCategoryElement(category.id);
  const options = OPTION_DATA[category.id] || [];
  const isMultiSelect = category.type === INPUT_TYPES.MULTI_CHIP;

  if (!group || ![INPUT_TYPES.CHIP, INPUT_TYPES.MULTI_CHIP].includes(category.type)) {
    return;
  }

  group.innerHTML = "";

  options.forEach((option) => {
    group.appendChild(createChipButton(category.id, option, isMultiSelect));
  });
}

function getSelectedChipValue(categoryId) {
  const group = getCategoryElement(categoryId);

  if (!group) {
    return DEFAULT_VALUES.SELECT;
  }

  const selected = $(".chip-btn[aria-pressed='true']", group);

  return selected ? cleanText(selected.dataset.value) : DEFAULT_VALUES.SELECT;
}

function setSelectedChipValue(categoryId, value) {
  const group = getCategoryElement(categoryId);

  if (!group) {
    return;
  }

  $$(".chip-btn", group).forEach((button) => {
    const isSelected = button.dataset.value === value;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("is-selected", isSelected);
  });

  categoryState[categoryId].value = value;
}

/* ==========================================================
   MULTI-SELECT HELPERS
========================================================== */

function getSelectedMultiValues(categoryId) {
  const group = getCategoryElement(categoryId);

  if (!group) {
    return [];
  }

  return $$(".multi-chip-btn[aria-pressed='true']", group)
    .map((button) => cleanText(button.dataset.value))
    .filter((value) => value !== DEFAULT_VALUES.SELECT);
}

function setSelectedMultiValues(categoryId, values) {
  const group = getCategoryElement(categoryId);
  const safeValues = Array.isArray(values) ? values : [];

  if (!group) {
    return;
  }

  $$(".multi-chip-btn", group).forEach((button) => {
    const value = button.dataset.value;
    const isNone = value === DEFAULT_VALUES.SELECT;
    const isSelected = safeValues.length === 0 ? isNone : safeValues.includes(value);

    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("is-selected", isSelected);
  });

  categoryState[categoryId].value = safeValues;
}

/* ==========================================================
   TEXT INPUT AND TEXTAREA HELPERS
========================================================== */

function getTextValue(inputId) {
  const input = byId(inputId);

  return input ? cleanText(input.value) : "";
}

function setTextValue(inputId, value) {
  const input = byId(inputId);

  if (!input) {
    return;
  }

  input.value = cleanText(value);
  categoryState[inputId] = categoryState[inputId] || {};
  categoryState[inputId].value = input.value;
}

function getTextareaValue(inputId) {
  const textarea = byId(inputId);

  return textarea ? textarea.value.trim() : "";
}

function setTextareaValue(inputId, value) {
  const textarea = byId(inputId);

  if (!textarea) {
    return;
  }

  textarea.value = isString(value) ? value.trim() : "";
  categoryState[inputId].value = textarea.value;
}

/* ==========================================================
   LOCK STATE HELPERS
========================================================== */

function isCategoryLocked(categoryId) {
  return Boolean(appState.locks[categoryId]);
}

function setCategoryLocked(categoryId, locked) {
  const category = getCategoryConfig(categoryId);
  const lockButton = getLockButton(categoryId);
  const card = getCategoryCard(categoryId);

  if (!category || !category.lock) {
    return;
  }

  appState.locks[categoryId] = Boolean(locked);
  categoryState[categoryId].locked = Boolean(locked);

  if (lockButton) {
    lockButton.setAttribute("aria-pressed", String(Boolean(locked)));
    lockButton.textContent = locked ? "Locked" : "Lock";
  }

  if (card) {
    card.classList.toggle("is-locked", Boolean(locked));
  }

  writeStorage(STORAGE_KEYS.LOCKS, appState.locks);
}

function toggleCategoryLock(categoryId) {
  setCategoryLocked(categoryId, !isCategoryLocked(categoryId));
}

/* ==========================================================
   VALIDATION HELPERS
========================================================== */

function isApprovedSelection(categoryId, value) {
  if (isEmptyValue(value)) {
    return true;
  }

  const approvedOptions = OPTION_DATA[categoryId];

  return !approvedOptions || approvedOptions.includes(value);
}

function hasAnyUsableInput(inputData) {
  return Object.values(inputData).some((value) => !isEmptyValue(value));
}

function validateSelections(inputData) {
  const errors = [];

  CATEGORY_CONFIG.forEach((category) => {
    const value = inputData[category.id];

    if (category.type === INPUT_TYPES.MULTI_CHIP) {
      const invalidValues = Array.isArray(value)
        ? value.filter((item) => !isApprovedSelection(category.id, item))
        : [];

      if (invalidValues.length) {
        errors.push(`${category.id} contains invalid selections.`);
      }

      return;
    }

    if (
      [INPUT_TYPES.DROPDOWN, INPUT_TYPES.CHIP].includes(category.type) &&
      !isApprovedSelection(category.id, value)
    ) {
      errors.push(`${category.id} contains an invalid selection.`);
    }
  });

  if (!hasAnyUsableInput(inputData)) {
    errors.push("Every input is empty.");
  }

  return errors;
}

function normalizePhraseList(values) {
  return uniqueValues(
    values.map((value) => cleanText(value)).filter((value) => value)
  );
}

/* ==========================================================
   INPUT COLLECTION
========================================================== */

function collectInputData() {
  const inputData = {};

  CATEGORY_CONFIG.forEach((category) => {
    if (category.type === INPUT_TYPES.DROPDOWN) {
      inputData[category.id] = getDropdownValue(category.id);
    }

    if (category.type === INPUT_TYPES.CHIP) {
      inputData[category.id] = getSelectedChipValue(category.id);
    }

    if (category.type === INPUT_TYPES.MULTI_CHIP) {
      inputData[category.id] = getSelectedMultiValues(category.id);
    }

    if (category.type === INPUT_TYPES.TEXTAREA) {
      inputData[category.id] = getTextareaValue(category.id);
    }

    if (category.customId) {
      inputData[category.customId] = getTextValue(category.customId);
    }
  });

  return inputData;
}

/* ==========================================================
   PROMPT VALUE RESOLUTION
========================================================== */

function resolveCategoryValue(category, inputData) {
  const selectedValue = inputData[category.id];
  const customValue = category.customId ? inputData[category.customId] : "";

  const selectedValues = Array.isArray(selectedValue)
    ? selectedValue
    : [selectedValue];

  const cleanedSelections = normalizePhraseList(
    selectedValues.filter((value) => value !== DEFAULT_VALUES.SELECT)
  );

  const cleanedCustom = cleanText(customValue);

  return normalizePhraseList([...cleanedSelections, cleanedCustom]);
}

function createCategorySegment(category, values) {
  if (!values.length) {
    return "";
  }

  const joinedValues = values.join(", ");

  const segmentMap = {
    artworkStyle: `Artwork style: ${joinedValues}.`,
    faithTheme: `Faith theme: ${joinedValues}.`,
    empowermentTheme: `Empowerment theme: ${joinedValues}.`,
    subject: `Subject: ${joinedValues}.`,
bodyType: `Body type: ${joinedValues}.`,
ethnicity: `Ethnicity: ${joinedValues}.`,
ageGroup: `Age group: ${joinedValues}.`,
environment: `Environment: ${joinedValues}.`,
    colorPalette: `Color palette: ${joinedValues}.`,
    typographyStyle: `Typography style: ${joinedValues}.`,
    lighting: `Lighting: ${joinedValues}.`,
    composition: `Composition: ${joinedValues}.`,
    visualDetails: `Visual details: ${joinedValues}.`,
    affirmationText: `Affirmation text to include: "${joinedValues}".`,
    additionalInstructions: `Additional prompt instructions: ${joinedValues}.`
  };

  return segmentMap[category.id] || "";
}

function removeDuplicateSegments(segments) {
  const seen = new Set();

  return segments.filter((segment) => {
    const normalized = segment.toLowerCase().replace(/[^\w\s]/g, "").trim();

    if (!normalized || seen.has(normalized)) {
      return false;
    }

    seen.add(normalized);
    return true;
  });
}

function buildPromptSections(inputData) {
  const selectionSegments = [];
  const userContentSegments = [];

  CATEGORY_CONFIG.forEach((category) => {
    const values = resolveCategoryValue(category, inputData);
    const segment = createCategorySegment(category, values);

    if (!segment) {
      return;
    }

    if (["affirmationText", "additionalInstructions"].includes(category.id)) {
      userContentSegments.push(segment);
    } else {
      selectionSegments.push(segment);
    }
  });

  return {
    selections: removeDuplicateSegments(selectionSegments),
    userContent: removeDuplicateSegments(userContentSegments)
  };
}

/* ==========================================================
   FINAL PROMPT ASSEMBLY
========================================================== */

function assembleFinalPrompt(inputData) {
  const sections = buildPromptSections(inputData);

  const promptParts = [
    `Create a faith-based luxury affirmation artwork prompt for AI image generation.`,

    sections.selections.length
      ? `Creative direction:\n${sections.selections.join("\n")}`
      : "",

    sections.userContent.length
      ? `User content:\n${sections.userContent.join("\n")}`
      : "",

    `Quality instructions: Make the artwork cohesive, professional, visually balanced, highly detailed, faith-centered, and suitable for premium AI image generation.`,

    `Output instructions: Produce one polished, copy-ready AI image prompt with clear visual direction and no unnecessary placeholder text.`
  ];

  return promptParts
    .filter((part) => cleanText(part))
    .join("\n\n")
    .trim();
}

function updatePromptOutput(prompt) {
  appState.generatedPrompt = prompt;
  safeSetValue(DOM.finalPrompt, prompt);
  updateCharacterCounter(prompt);
}

function buildPremiumContext(inputData) {
  const getValues = (id) => {
    const category = getCategoryConfig(id);
    return category ? resolveCategoryValue(category, inputData).join(", ") : "";
  };

  return {
    artworkStyle: getValues("artworkStyle"),
    faithTheme: getValues("faithTheme"),
    empowermentTheme: getValues("empowermentTheme"),
    subject: getValues("subject"),
    bodyType: getValues("bodyType"),
    ethnicity: getValues("ethnicity"),
    ageGroup: getValues("ageGroup"),
    environment: getValues("environment"),
    colorPalette: getValues("colorPalette"),
    typographyStyle: getValues("typographyStyle"),
    lighting: getValues("lighting"),
    composition: getValues("composition"),
    visualDetails: getValues("visualDetails"),
    affirmationText: getValues("affirmationText"),
    additionalInstructions: getValues("additionalInstructions")
  };
}

function generateSunoPrompt(inputData) {
  const c = buildPremiumContext(inputData);

  return `SUNO AI MUSIC PROMPT

SONG TITLE IDEA
"${c.affirmationText || "Faith Over Fear"}"

SONG CONCEPT
Create an uplifting faith-based inspirational song inspired by a luxury affirmation artwork centered on ${c.faithTheme || "God's Love"} and ${c.empowermentTheme || "Hope"}.

OVERALL MOOD
Hopeful, peaceful, joyful, encouraging, feminine, emotionally moving, worshipful, and cinematic.

GENRE
Modern Inspirational Gospel • Contemporary Christian • Cinematic Worship • Soulful Pop

VOCAL STYLE
Warm female lead vocal with rich harmonies, emotional delivery, clear diction, gentle power, and heartfelt expression.

INSTRUMENTATION
Soft piano, acoustic guitar, warm strings, subtle choir pads, light percussion, ambient textures, inspirational orchestral build, and uplifting finale.

LYRICAL DIRECTION

Write lyrics about:

• God's faithfulness
• Walking by faith
• Hope after difficult seasons
• Inner peace
• Grace
• Joy
• Renewal
• Trusting God's timing

Use this affirmation as the emotional foundation:

"${c.affirmationText || "God is still working in my life."}"

VISUAL INSPIRATION

Artwork Style:
${c.artworkStyle || "Illustration"}

Subject:
${c.subject || "Faith-filled woman"}

Environment:
${c.environment || "Heavenly Light"}

Lighting:
${c.lighting || "Soft cinematic lighting"}

Color Palette:
${c.colorPalette || "Gold and White"}

Visual Details:
${c.visualDetails || "Light rays, soft glow, elegant details"}

SONG STRUCTURE

• Intro
• Verse 1
• Pre-Chorus
• Chorus
• Verse 2
• Bridge
• Final Chorus
• Inspirational Ending

PRODUCTION STYLE

Luxury.
Clean.
Professional.
Modern.
Radio quality.
Warm.
Emotional.
Hope-filled.

AVOID

• Dark themes
• Anger
• Violence
• Fear-based messaging
• Heavy rock
• Aggressive vocals
• Negative language

FINAL SUNO PROMPT

Create a professionally produced contemporary inspirational Christian song with cinematic worship influences inspired by ${c.faithTheme || "God's Love"} and ${c.empowermentTheme || "Hope"}.

Use warm female vocals, uplifting instrumentation, emotional storytelling, and elegant production.

The lyrics should center around:

"${c.affirmationText || "God is still working in my life."}"

The overall feeling should be luxurious, peaceful, encouraging, faith-filled, emotionally moving, and suitable for modern Christian listeners.`;
}

function generateVideoScriptPrompt(inputData) {
  const c = buildPremiumContext(inputData);

  return `VIDEO SCRIPT PROMPT

VIDEO CONCEPT
Create a polished short-form promotional video script for a faith-based luxury affirmation artwork product.

PRODUCT STYLE
A premium ${c.artworkStyle || "luxury"} affirmation artwork centered on ${c.faithTheme || "faith"} and ${c.empowermentTheme || "encouragement"}.

AFFIRMATION
"${c.affirmationText || "God is still working in my life."}"

TARGET AUDIENCE
Faith-based women, content creators, digital product buyers, spiritual art lovers, inspirational décor shoppers, and customers who enjoy beautiful polished faith-centered artwork.

VIDEO LENGTH
30 seconds.

VIDEO FORMAT
Vertical short-form video for TikTok, Instagram Reels, Pinterest, Facebook Reels, and YouTube Shorts.

VISUAL DIRECTION
Subject: ${c.subject || "Faith-centered subject"}
Body type: ${c.bodyType || "Not specified"}
Ethnicity: ${c.ethnicity || "Not specified"}
Age group: ${c.ageGroup || "Not specified"}
Environment: ${c.environment || "Soft spiritual setting"}
Color palette: ${c.colorPalette || "Luxury colors"}
Typography: ${c.typographyStyle || "Elegant typography"}
Lighting: ${c.lighting || "Soft cinematic lighting"}
Composition: ${c.composition || "Balanced artwork layout"}
Visual details: ${c.visualDetails || "soft glow, light rays, elegant details"}

OPENING HOOK
"Some reminders are too beautiful to scroll past."

SCENE-BY-SCENE SCRIPT

SCENE 1 — 0:00-0:04
Visual: Slow reveal of the artwork with soft lighting and elegant movement.
On-screen text: "A little reminder for your spirit."
Voiceover: "Sometimes your space needs more than decoration."

SCENE 2 — 0:05-0:09
Visual: Close-up of the affirmation typography.
On-screen text: "${c.affirmationText || "God is still working in my life."}"
Voiceover: "It needs a reminder of what God is still doing in you."

SCENE 3 — 0:10-0:15
Visual: Highlight the subject, environment, and faith-filled visual details.
On-screen text: "${c.faithTheme || "Faith"} • ${c.empowermentTheme || "Hope"}"
Voiceover: "This faith-based luxury artwork was created to bring encouragement, beauty, and peace into your everyday life."

SCENE 4 — 0:16-0:22
Visual: Show the artwork styled as wall art, printable décor, digital art, or a product mockup.
On-screen text: "Perfect for prayer spaces, offices, gifts, and inspiration."
Voiceover: "Use it in your prayer corner, workspace, gallery wall, digital collection, or as a meaningful gift."

SCENE 5 — 0:23-0:30
Visual: Final full view of the artwork with soft glow and clean product framing.
On-screen text: "Bring faith-filled beauty into your space."
Voiceover: "Let this piece remind you that your faith, your joy, and your purpose still matter."

CALL TO ACTION
Shop now and add this faith-filled artwork to your collection.

CAPTION
This faith-based luxury affirmation artwork was created to bring beauty, peace, and encouragement into your space. A polished reminder that God is still moving, still covering, and still working in your life.

HASHTAGS
#FaithBasedArt #ChristianWallArt #AffirmationArtwork #InspirationalArt #FaithDecor #DigitalArtwork #FaithFilledHome`;
}

function generateMarketingPrompt(inputData) {
  const c = buildPremiumContext(inputData);

  return `MARKETING PACKAGE

PRODUCT POSITIONING

A premium faith-based luxury affirmation artwork designed to inspire hope, strengthen faith, and bring elegant spiritual encouragement into everyday life. This artwork combines ${c.artworkStyle || "luxury illustration"}, refined typography, and meaningful affirmation messaging to create a timeless piece suitable for home décor, printable wall art, digital collections, gifts, and inspirational spaces.

────────────────────────────

SHORT PRODUCT DESCRIPTION

Bring beauty and faith together with this premium affirmation artwork inspired by ${c.faithTheme || "God's promises"} and ${c.empowermentTheme || "encouragement"}.

Featuring a ${c.subject || "faith-inspired subject"} in a ${c.environment || "beautiful setting"}, accented with ${c.visualDetails || "elegant details"}, this artwork is designed with a ${c.colorPalette || "luxury"} color palette and ${c.typographyStyle || "elegant"} typography.

Affirmation:

"${c.affirmationText || "Faith changes everything."}"

Perfect for printable wall art, prayer spaces, offices, gifts, digital backgrounds, social media graphics, and inspirational collections.

────────────────────────────

SOCIAL MEDIA CAPTION

Every day is another opportunity to remember God's promises.

This luxury faith-inspired affirmation artwork was created to encourage your heart, brighten your space, and remind you that God is still working behind the scenes.

"${c.affirmationText || "Faith changes everything."}"

Beautiful.
Elegant.
Faith-filled.

Perfect for women who love inspirational décor, meaningful artwork, and daily encouragement.

────────────────────────────

3 HOOKS

1. Beautiful artwork that speaks to your spirit.

2. More than décor—this is a daily reminder of God's promises.

3. Fill your home with faith, encouragement, and timeless beauty.

────────────────────────────

3 CALL TO ACTION OPTIONS

1. Shop now and bring faith-filled beauty into your space.

2. Add this inspiring artwork to your collection today.

3. Download instantly and enjoy a daily reminder of God's goodness.

────────────────────────────

CUSTOMER BENEFITS

• Encourages daily faith and positivity
• Creates a peaceful, uplifting atmosphere
• Makes a thoughtful Christian gift
• Beautiful enough for home, office, or prayer room décor
• Perfect for printable wall art and digital products

────────────────────────────

IDEAL CUSTOMER

• Faith-based women
• Christian content creators
• Digital product buyers
• Church leaders
• Prayer warriors
• Inspirational art lovers
• Christian gift shoppers

────────────────────────────

SELLING POINTS

• Premium luxury design
• Faith-centered message
• Elegant typography
• Professionally balanced composition
• High-quality printable artwork
• Timeless inspirational décor

────────────────────────────

KEYWORDS

Faith-Based Wall Art
Christian Wall Art
Luxury Christian Decor
Bible Affirmations
Inspirational Artwork
Prayer Room Decor
Printable Christian Art
Faith Home Decor
Christian Gift
Religious Wall Art

────────────────────────────

HASHTAGS

#FaithBasedArt
#ChristianWallArt
#BibleAffirmations
#FaithDecor
#LuxuryWallArt
#ChristianWomen
#PrayerRoom
#InspirationalArt
#PrintableWallArt
#DigitalDownloads`;
}

function generateCustomGptPrompt(inputData) {
  const c = buildPremiumContext(inputData);

  return `CUSTOM GPT BUILDER CONFIGURATION

GPT NAME

Faith-Based Luxury Affirmation Artwork Prompt Creator

────────────────────────────

GPT PURPOSE

Help users create polished, copy-ready AI image prompts for faith-based luxury affirmation artwork.

This GPT is designed for users who want to create spiritual artwork prompts for printable wall art, digital products, social media graphics, Christian gifts, inspirational décor, prayer spaces, journals, planners, and premium affirmation collections.

────────────────────────────

SPECIALTY

This GPT specializes in creating faith-centered luxury affirmation artwork prompts with strong creative direction, emotional clarity, and polished visual detail.

It guides users through:

• Artwork style
• Faith theme
• Empowerment theme
• Subject details
• Body type
• Ethnicity
• Age group
• Environment
• Color palette
• Typography style
• Lighting
• Composition
• Visual details
• Affirmation text
• Additional creative instructions

────────────────────────────

DEFAULT CREATIVE DIRECTION

Artwork style: ${c.artworkStyle || "Illustration"}
Faith theme: ${c.faithTheme || "Joy in the Lord"}
Empowerment theme: ${c.empowermentTheme || "Joy"}
Subject: ${c.subject || "Child"}
Environment: ${c.environment || "Sunrise"}
Color palette: ${c.colorPalette || "Soft Pastels"}
Typography style: ${c.typographyStyle || "Hand Lettered"}
Lighting: ${c.lighting || "Soft radiant lighting"}
Composition: ${c.composition || "Balanced poster layout"}
Visual details: ${c.visualDetails || "Butterflies, flowers, and light rays"}

────────────────────────────

COMPLETE CUSTOM GPT INSTRUCTIONS

You are an expert AI prompt engineer, creative director, and faith-based luxury affirmation artwork specialist.

Your job is to help users create one polished, copy-ready AI image prompt for faith-based luxury affirmation artwork.

Your prompts should be beautiful, faith-centered, emotionally clear, visually balanced, and suitable for premium AI image generation platforms.

You should help beginners without overwhelming them. Ask only the most important questions first. If the user gives limited details, make tasteful creative choices that match a luxury, feminine, faith-centered artwork style.

Every final prompt should include:

• Artwork style
• Faith theme
• Empowerment theme
• Subject
• Subject details
• Body type, if provided
• Ethnicity, if provided
• Age group, if provided
• Environment
• Color palette
• Typography style
• Lighting
• Composition
• Visual details
• Affirmation text
• Emotional tone
• Quality instructions

When information is missing, use the default creative direction.

The final output should always be one clean, structured AI image prompt ready to paste into an image generation platform.

────────────────────────────

USER INPUTS TO ASK FOR

Ask the user for these details:

1. What affirmation text do you want included?
2. What faith theme do you want?
3. Who is the subject?
4. What environment or background do you want?
5. What artwork style do you prefer?
6. What color palette do you want?
7. What custom creative details should be included?

If the user seems unsure, offer only 1-2 choices at a time.

────────────────────────────

WELCOME MESSAGE

Welcome. I can help you turn your faith-based affirmation into a polished luxury artwork prompt.

Share your affirmation, subject, and the feeling you want the artwork to have, and I’ll create one clean, copy-ready AI image prompt for you.

────────────────────────────

CONVERSATION STARTERS

1. Create a luxury faith-based affirmation artwork prompt using the affirmation "${c.affirmationText || "Joy comes in the morning."}"

2. Help me turn my Christian affirmation into a polished AI image prompt.

3. Create a soft pastel faith-based wall art prompt for women.

4. Build a premium prayer room artwork prompt.

5. Make this affirmation artwork feel more elegant and professional.

────────────────────────────

SUGGESTED KNOWLEDGE FILES TO UPLOAD

• Brand style guide
• Approved color palette list
• Approved faith themes
• Approved empowerment themes
• Affirmation examples
• Artwork style examples
• Typography style guide
• Prompt examples that created strong image results
• Product listing examples
• Banned visual elements list
• Platform-specific image prompt tips

────────────────────────────

BEHAVIOR AND RESPONSE GUIDELINES

Always:

• Be beginner-friendly
• Be clear and direct
• Keep the process simple
• Ask only necessary questions
• Preserve the user's affirmation exactly
• Produce one polished copy-ready prompt
• Make tasteful creative decisions when details are missing
• Keep the final prompt luxury, faith-centered, feminine, and emotionally clear
• Make sure the artwork direction feels cohesive
• Use strong visual direction
• Avoid clutter

Never:

• Overwhelm the user
• Output multiple versions unless requested
• Use placeholders
• Add random unrelated design elements
• Add crowns, tiaras, or royal headpieces unless specifically requested
• Add fake AI graphics, HUD overlays, dashboards, scan lines, charts, or tech clutter unless requested
• Change the user's affirmation
• Make the artwork feel cheap, chaotic, or generic

────────────────────────────

TONE AND PERSONALITY INSTRUCTIONS

The GPT should sound:

• Warm
• Professional
• Encouraging
• Creative
• Polished
• Calm
• Easy to understand

It should feel like a creative director helping the user turn a simple faith-based idea into a premium visual prompt.

────────────────────────────

GOALS AND RESPONSIBILITIES

The GPT should:

• Help users create premium faith-based affirmation artwork prompts
• Turn simple ideas into polished image-generation prompts
• Improve weak or vague creative ideas
• Keep artwork prompts visually balanced
• Make faith themes feel meaningful and respectful
• Help users create artwork suitable for digital products, wall art, gifts, and inspirational content
• Protect the user's chosen affirmation
• Keep every final prompt easy to copy and paste

────────────────────────────

RULES AND LIMITATIONS

• Do not create hateful, disrespectful, explicit, or offensive religious content.
• Do not mock faith, prayer, scripture, worship, or spiritual themes.
• Do not guarantee exact image results.
• Do not provide legal, medical, or financial claims.
• Do not force a denomination unless the user requests it.
• Do not use copyrighted characters, celebrities, or trademarked brands unless the user has rights.
• Do not add cluttered or unrelated symbols.
• Do not use crowns, tiaras, or royal accessories unless the user asks.
• Do not use futuristic AI graphics unless the user asks.

────────────────────────────

FINAL OUTPUT FORMAT

Return one clean AI image prompt using this structure:

Create a faith-based luxury affirmation artwork in a [artwork style] visual style, centered on [faith theme] and [empowerment theme]. Feature [subject] with [subject details] in [environment], using a [color palette] color palette with [typography style] typography. Include [visual details]. Add the affirmation text: "[affirmation text]". Use [lighting] and [composition]. Make the artwork cohesive, professional, visually balanced, faith-centered, emotionally uplifting, highly detailed, and suitable for premium AI image generation.

Do not include explanations before or after the prompt unless the user asks.

────────────────────────────

BEST PRACTICES FOR USING THIS GPT

• Start with the affirmation first.
• Choose one main faith theme.
• Keep the subject clear.
• Pick one main environment.
• Use one strong color palette.
• Keep visual details meaningful.
• Avoid adding too many symbols.
• Match typography to the emotion of the affirmation.
• Ask for a simplified version if the prompt feels too busy.
• Ask for a more luxurious version if the prompt feels too plain.

────────────────────────────

TESTING CHECKLIST

Use this checklist before publishing the GPT:

• Does the GPT ask beginner-friendly questions?
• Does it avoid overwhelming the user?
• Does it create one complete AI image prompt?
• Does it preserve the affirmation exactly?
• Does it include artwork style?
• Does it include faith theme?
• Does it include empowerment theme?
• Does it include subject details?
• Does it include environment?
• Does it include color palette?
• Does it include typography?
• Does it include lighting?
• Does it include composition?
• Does it include visual details?
• Does the final prompt feel luxury and polished?
• Does it avoid clutter?
• Does it avoid crowns unless requested?
• Does it avoid fake AI graphics unless requested?
• Does it work when the user gives minimal details?
• Is the output copy-and-paste ready?

────────────────────────────

EXAMPLE GENERATED PROMPT

Create a faith-based luxury affirmation artwork in a ${c.artworkStyle || "Illustration"} visual style, centered on ${c.faithTheme || "Joy in the Lord"} and ${c.empowermentTheme || "Joy"}. Feature ${c.subject || "a child"} in a ${c.environment || "sunrise"} setting, using a ${c.colorPalette || "soft pastel"} color palette with ${c.typographyStyle || "hand lettered"} typography. Include ${c.visualDetails || "butterflies, flowers, and soft light rays"}. Add the affirmation text: "${c.affirmationText || "Joy comes in the morning."}" Use ${c.lighting || "soft radiant lighting"} and ${c.composition || "balanced poster layout"}. Make the artwork cohesive, professional, visually balanced, faith-centered, emotionally uplifting, highly detailed, and suitable for premium AI image generation.`;
}

function generatePremiumOutputs(inputData) {
  if (!hasAnyUsableInput(inputData)) {
    clearPremiumOutputs();
    return;
  }

  safeSetValue(DOM.premiumOutputs.suno, generateSunoPrompt(inputData));
  safeSetValue(DOM.premiumOutputs.video, generateVideoScriptPrompt(inputData));
  safeSetValue(DOM.premiumOutputs.marketing, generateMarketingPrompt(inputData));
  safeSetValue(DOM.premiumOutputs.customGpt, generateCustomGptPrompt(inputData));
}

function clearPremiumOutputs() {
  if (!DOM.premiumOutputs) {
    return;
  }

  Object.values(DOM.premiumOutputs).forEach((output) => {
    safeSetValue(output, "");
  });
}

/* ==========================================================
   GENERATE PROMPT
========================================================== */

function generatePrompt() {
  try {
    const inputData = collectInputData();
    const validationErrors = validateSelections(inputData);

    if (validationErrors.length) {
      updatePromptOutput("");
      clearPromptVariations();
      updateQualityScore("");
      showToast(validationErrors[0], "error");
      return "";
    }

    const prompt = assembleFinalPrompt(inputData);

    if (!prompt) {
      updatePromptOutput("");
      clearPromptVariations();
      updateQualityScore("");
      showToast("Prompt could not be generated.", "error");
      return "";
    }

    updatePromptOutput(prompt);
    generatePromptVariations(prompt, inputData);
generatePremiumOutputs(inputData);
updateQualityScore(prompt, inputData);
    showToast("Prompt generated.", "success");

    return prompt;
  } catch (error) {
    updatePromptOutput("");
    showToast("Something went wrong while generating the prompt.", "error");
    return "";
  }
}

/* ==========================================================
   RANDOMIZE
========================================================== */

function randomizeCategory(category) {
  if (!category.randomize || isCategoryLocked(category.id)) {
    return;
  }

  switch (category.type) {
    case INPUT_TYPES.DROPDOWN: {
      const options = getRandomOptions(category.id);
      setDropdownValue(category.id, randomFromArray(options) || DEFAULT_VALUES.SELECT);
      break;
    }

    case INPUT_TYPES.CHIP: {
      const options = getRandomOptions(category.id);
      setSelectedChipValue(
        category.id,
        randomFromArray(options) || DEFAULT_VALUES.SELECT
      );
      break;
    }

    case INPUT_TYPES.MULTI_CHIP: {
      const options = getRandomOptions(category.id);

      if (!options.length) {
        setSelectedMultiValues(category.id, []);
        break;
      }

      const shuffled = [...options].sort(() => Math.random() - 0.5);
      const count = Math.min(
        shuffled.length,
        Math.max(1, Math.floor(Math.random() * 4) + 1)
      );

      setSelectedMultiValues(category.id, shuffled.slice(0, count));
      break;
    }

    default:
      break;
  }

  if (category.customId) {
    const customInput = byId(category.customId);

    if (customInput && !isCategoryLocked(category.id)) {
      customInput.value = "";
      categoryState[category.customId].value = "";
    }
  }
}

function randomizeGenerator() {
  CATEGORY_CONFIG.forEach(randomizeCategory);
}

/* ==========================================================
   LOCK SUPPORT
========================================================== */

function loadLockState() {
  const storedLocks = readStorage(STORAGE_KEYS.LOCKS, {});

  appState.locks = storedLocks;

  CATEGORY_CONFIG.forEach((category) => {
    setCategoryLocked(category.id, Boolean(storedLocks[category.id]));
  });
}

/* ==========================================================
   PRESET SUPPORT
========================================================== */

function renderPresetButtons() {
  if (!DOM.presetsContainer) {
    return;
  }

  DOM.presetsContainer.innerHTML = "";

  Object.keys(PRESET_DATA).forEach((presetName) => {
    const button = createElement("button", "preset-btn", presetName);

    button.type = "button";
    button.dataset.preset = presetName;

    DOM.presetsContainer.appendChild(button);
  });
}

function applyPreset(presetName) {
  const preset = PRESET_DATA[presetName];

  if (!preset) {
    return;
  }

  CATEGORY_CONFIG.forEach((category) => {
    if (!category.preset || isCategoryLocked(category.id)) {
      return;
    }

    const value = preset[category.id];

    if (value === undefined) {
      return;
    }

    switch (category.type) {
      case INPUT_TYPES.DROPDOWN:
        setDropdownValue(category.id, value);
        break;

      case INPUT_TYPES.CHIP:
        setSelectedChipValue(category.id, value);
        break;

      case INPUT_TYPES.MULTI_CHIP:
        setSelectedMultiValues(
          category.id,
          Array.isArray(value) ? value : []
        );
        break;

      case INPUT_TYPES.TEXTAREA:
        setTextareaValue(category.id, value);
        break;
    }

    if (category.customId && preset[category.customId] !== undefined) {
      setTextValue(category.customId, preset[category.customId]);
    }
  });

  appState.activePreset = presetName;
  writeStorage(STORAGE_KEYS.ACTIVE_PRESET, presetName);

  $$(".preset-btn", DOM.presetsContainer).forEach((button) => {
    const active = button.dataset.preset === presetName;

    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function loadActivePreset() {
  const preset = readStorage(STORAGE_KEYS.ACTIVE_PRESET, null);

  if (preset && PRESET_DATA[preset]) {
    applyPreset(preset);
  }
}

/* ==========================================================
   CLEAR ALL
========================================================== */

function clearCategory(category) {
  if (isCategoryLocked(category.id)) {
    return;
  }

  switch (category.type) {
    case INPUT_TYPES.DROPDOWN:
      setDropdownValue(category.id, DEFAULT_VALUES.SELECT);
      break;

    case INPUT_TYPES.CHIP:
      setSelectedChipValue(category.id, DEFAULT_VALUES.SELECT);
      break;

    case INPUT_TYPES.MULTI_CHIP:
      setSelectedMultiValues(category.id, []);
      break;

    case INPUT_TYPES.TEXTAREA:
      setTextareaValue(category.id, "");
      break;
  }

  if (category.customId) {
    setTextValue(category.customId, "");
  }
}

function clearPromptOutput() {
  safeSetValue(DOM.finalPrompt, "");
  appState.generatedPrompt = "";

  clearPromptVariations();
  clearPremiumOutputs();

  updateCharacterCounter("");
  updateQualityScore("");
}

function clearAll() {
  CATEGORY_CONFIG.forEach(clearCategory);
  clearPromptOutput();
}

/* ==========================================================
   COPY
========================================================== */

async function copyText(text) {
  if (!cleanText(text)) {
    showToast("Nothing to copy.", "error");
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied successfully.", "success");
    return true;
  } catch (error) {
    showToast("Copy failed.", "error");
    return false;
  }
}

function copyFinalPrompt() {
  return copyText(DOM.finalPrompt.value);
}

function copyVariation(index) {
  const output = DOM.variationOutputs[index];

  return output ? copyText(output.value) : false;
}

function copyHistoryPrompt(prompt) {
  return copyText(prompt);
}

/* ==========================================================
   SAVE PROMPTS
========================================================== */

function createPromptRecord(prompt) {
  return {
    id: crypto.randomUUID(),
    dateCreated: new Date().toLocaleString(),
    promptPreview: prompt.substring(0, 150),
    fullPrompt: prompt
  };
}

function persistSavedPrompts() {
  writeStorage(STORAGE_KEYS.SAVED_PROMPTS, appState.savedPrompts);
}

function savePrompt() {
  const prompt = cleanText(appState.generatedPrompt);

  if (!prompt) {
    showToast("Generate a prompt before saving.", "error");
    return;
  }

  appState.savedPrompts.unshift(createPromptRecord(prompt));

  persistSavedPrompts();
  renderPromptHistory();

  showToast("Prompt saved.", "success");
}

function deleteSavedPrompt(id) {
  appState.savedPrompts = appState.savedPrompts.filter(
    (prompt) => prompt.id !== id
  );

  persistSavedPrompts();
  renderPromptHistory();
}

function loadSavedPrompts() {
  appState.savedPrompts = readStorage(
    STORAGE_KEYS.SAVED_PROMPTS,
    []
  );
}

function renderPromptHistory() {
  if (!DOM.historyContainer || !DOM.historyTemplate) {
    return;
  }

  DOM.historyContainer.innerHTML = "";

  appState.savedPrompts.forEach((prompt) => {
    const fragment = DOM.historyTemplate.content.cloneNode(true);

    $(".history-preview", fragment).textContent = prompt.promptPreview;
    $(".history-date", fragment).textContent = prompt.dateCreated;

    $(".history-copy-btn", fragment).addEventListener("click", () => {
      copyHistoryPrompt(prompt.fullPrompt);
    });

    $(".history-delete-btn", fragment).addEventListener("click", () => {
      deleteSavedPrompt(prompt.id);
    });

    DOM.historyContainer.appendChild(fragment);
  });
}

/* ==========================================================
   PROMPT VARIATIONS
========================================================== */

function clearPromptVariations() {
  appState.promptVariations = [];

  DOM.variationOutputs.forEach((output) => {
    if (output) {
      output.value = "";
    }
  });
}

function generatePromptVariations(prompt, inputData) {
  const basePrompt = cleanText(prompt);

  if (!basePrompt) {
    clearPromptVariations();
    return;
  }

  const variations = [
    basePrompt,

    `${basePrompt}

Increase the richness of descriptive details while preserving every user selection and maintaining the same creative intent.`,

    `${basePrompt}

Place greater emphasis on artistic direction, lighting, composition, premium visual quality, and refined craftsmanship while preserving all user content.`,

    `${basePrompt}

Present the scene with a premium editorial aesthetic, exceptional realism, elegant visual balance, and polished professional presentation without changing the requested subject, affirmation, or faith theme.`
  ];

  appState.promptVariations = variations;

  DOM.variationOutputs.forEach((output, index) => {
    if (output) {
      output.value = variations[index] || "";
    }
  });
}

/* ==========================================================
   CHARACTER COUNTER
========================================================== */

function updateCharacterCounter(prompt) {
  const length = cleanText(prompt).length;

  safeSetText(
    DOM.characterCounter,
    `${length} Character${length === 1 ? "" : "s"}`
  );
}

/* ==========================================================
   PROMPT QUALITY CHECKER
========================================================== */

function calculateCompleteness(inputData) {
  const totalCategories = CATEGORY_CONFIG.length;

  const completed = CATEGORY_CONFIG.reduce((count, category) => {
    const values = resolveCategoryValue(category, inputData);
    return count + (values.length ? 1 : 0);
  }, 0);

  return Math.round((completed / totalCategories) * 25);
}

function calculateClarity(prompt) {
  if (!prompt) {
    return 0;
  }

  return Math.min(20, 20);
}

function calculateDetail(inputData) {
  const detailCategories = [
    "artworkStyle",
    "environment",
    "lighting",
    "composition",
    "visualDetails"
  ];

  const completed = detailCategories.filter((id) => {
    const category = getCategoryConfig(id);
    return resolveCategoryValue(category, inputData).length;
  }).length;

  return Math.round((completed / detailCategories.length) * 20);
}

function calculateReadability(prompt) {
  if (!prompt) {
    return 0;
  }

  return Math.min(15, 15);
}

function calculateMissingInformation(inputData) {
  const important = [
    "artworkStyle",
    "subject",
    "environment",
    "affirmationText"
  ];

  const missing = important.filter((id) => {
    const category = getCategoryConfig(id);
    return resolveCategoryValue(category, inputData).length === 0;
  }).length;

  return Math.max(0, 10 - Math.round((missing / important.length) * 10));
}

function calculatePromptEffectiveness(prompt) {
  if (!prompt) {
    return 0;
  }

  return Math.min(10, 10);
}

function updateQualityScore(prompt = "", inputData = {}) {
  if (!cleanText(prompt)) {
    appState.quality = {
      score: 0,
      completeness: 0,
      clarity: 0,
      detail: 0,
      readability: 0,
      missingInformation: 0,
      promptEffectiveness: 0
    };
  } else {
    appState.quality.completeness = calculateCompleteness(inputData);
    appState.quality.clarity = calculateClarity(prompt);
    appState.quality.detail = calculateDetail(inputData);
    appState.quality.readability = calculateReadability(prompt);
    appState.quality.missingInformation =
      calculateMissingInformation(inputData);
    appState.quality.promptEffectiveness =
      calculatePromptEffectiveness(prompt);

    appState.quality.score =
      appState.quality.completeness +
      appState.quality.clarity +
      appState.quality.detail +
      appState.quality.readability +
      appState.quality.missingInformation +
      appState.quality.promptEffectiveness;
  }

  safeSetText(DOM.quality.overall, appState.quality.score);
  safeSetText(DOM.quality.completeness, appState.quality.completeness);
  safeSetText(DOM.quality.clarity, appState.quality.clarity);
  safeSetText(DOM.quality.detail, appState.quality.detail);
  safeSetText(DOM.quality.readability, appState.quality.readability);
  safeSetText(
    DOM.quality.missingInformation,
    appState.quality.missingInformation
  );
  safeSetText(
    DOM.quality.promptEffectiveness,
    appState.quality.promptEffectiveness
  );

  safeSetText(
    DOM.promptQualityScore,
    `Quality Score: ${appState.quality.score}`
  );
}

/* ==========================================================
   TOAST NOTIFICATIONS
========================================================== */

let toastContainer = null;

function getToastContainer() {
  if (toastContainer) {
    return toastContainer;
  }

  toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";
  document.body.appendChild(toastContainer);

  return toastContainer;
}

function showToast(message, type = "success", duration = 3000) {
  const container = getToastContainer();

  const toast = document.createElement("div");

  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, duration);
}

/* ==========================================================
   MODAL SUPPORT
========================================================== */

let activeModal = null;

function closeModal() {
  if (!activeModal) {
    return;
  }

  activeModal.remove();
  activeModal = null;
}

function openModal(contentNode) {
  closeModal();

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  const modal = document.createElement("div");
  modal.className = "modal";

  modal.appendChild(contentNode);
  backdrop.appendChild(modal);

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  document.body.appendChild(backdrop);

  activeModal = backdrop;
}

/* ==========================================================
   GLOBAL ERROR HANDLING
========================================================== */

function handleApplicationError(error, fallbackMessage) {
  console.error(error);

  showToast(
    fallbackMessage || "An unexpected error occurred.",
    "error"
  );
}

window.addEventListener("error", (event) => {
  handleApplicationError(event.error, "Unexpected application error.");
});

window.addEventListener("unhandledrejection", (event) => {
  handleApplicationError(event.reason, "Unexpected application error.");
});

/* ==========================================================
   EVENT BINDING
========================================================== */

function bindCategoryEvents(category) {
  const input = byId(category.id);
  const toggle = getCategoryToggle(category.id);
  const content = getCategoryContent(category.id);
  const lockButton = getLockButton(category.id);
  const clearButton = getClearButton(category.id);

  /* ---------- Collapsible Sections ---------- */

  if (toggle && content) {
    toggle.addEventListener("click", () => {
      const expanded =
        toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;
    });
  }

  /* ---------- Lock ---------- */

  if (lockButton) {
    lockButton.addEventListener("click", () => {
      toggleCategoryLock(category.id);
    });
  }

  /* ---------- Clear Category ---------- */

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      clearCategory(category);
    });
  }

  /* ---------- Dropdown ---------- */

  if (category.type === INPUT_TYPES.DROPDOWN && input) {
    input.addEventListener("change", (event) => {
      categoryState[category.id].value = event.target.value;
    });
  }

  /* ---------- Chip Buttons ---------- */

  if (category.type === INPUT_TYPES.CHIP && input) {
    input.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip-btn");

      if (!chip) {
        return;
      }

      setSelectedChipValue(
        category.id,
        chip.dataset.value
      );
    });
  }

  /* ---------- Multi Select ---------- */

  if (category.type === INPUT_TYPES.MULTI_CHIP && input) {
    input.addEventListener("click", (event) => {
      const chip = event.target.closest(".multi-chip-btn");

      if (!chip) {
        return;
      }

      const value = chip.dataset.value;

      if (value === DEFAULT_VALUES.SELECT) {
        setSelectedMultiValues(category.id, []);
        return;
      }

      const current = getSelectedMultiValues(category.id);

      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      setSelectedMultiValues(category.id, updated);
    });
  }

  /* ---------- Textarea ---------- */

  if (category.type === INPUT_TYPES.TEXTAREA && input) {
    input.addEventListener("input", (event) => {
      categoryState[category.id].value = event.target.value;

      if (category.id === "affirmationText") {
        updateCharacterCounter(event.target.value);
      }
    });
  }

  /* ---------- Custom Text ---------- */

  if (category.customId) {
    const custom = byId(category.customId);

    if (custom) {
      custom.addEventListener("input", (event) => {
        categoryState[category.customId].value =
          cleanText(event.target.value);
      });
    }
  }
}

/* ==========================================================
   BUTTON CONNECTIONS
========================================================== */

function bindMainButtons() {
  DOM.generateButton?.addEventListener("click", generatePrompt);

  DOM.randomizeButton?.addEventListener("click", () => {
    randomizeGenerator();
  });

  DOM.premiumCopyButtons.suno?.addEventListener("click", () => {
  copyText(DOM.premiumOutputs.suno.value);
});

DOM.premiumCopyButtons.video?.addEventListener("click", () => {
  copyText(DOM.premiumOutputs.video.value);
});

DOM.premiumCopyButtons.marketing?.addEventListener("click", () => {
  copyText(DOM.premiumOutputs.marketing.value);
});

DOM.premiumCopyButtons.customGpt?.addEventListener("click", () => {
  copyText(DOM.premiumOutputs.customGpt.value);
});

  DOM.copyButton?.addEventListener("click", copyFinalPrompt);

  DOM.copyFinalPromptButton?.addEventListener(
    "click",
    copyFinalPrompt
  );

  DOM.saveButton?.addEventListener("click", savePrompt);

  DOM.clearButton?.addEventListener("click", clearAll);

  DOM.variationOutputs.forEach((output, index) => {
    const button = byId(`copyVariation${index + 1}Btn`);

    if (button) {
      button.addEventListener("click", () => {
        copyVariation(index);
      });
    }
  });
}

function bindPresetButtons() {
  $$(".preset-btn", DOM.presetsContainer).forEach((button) => {
    button.addEventListener("click", () => {
      applyPreset(button.dataset.preset);
    });
  });
}

/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeDropdowns() {
  CATEGORY_CONFIG.forEach((category) => {
    if (category.type === INPUT_TYPES.DROPDOWN) {
      populateDropdown(category);
    }
  });
}

function initializeChipGroups() {
  CATEGORY_CONFIG.forEach((category) => {
    if (
      category.type === INPUT_TYPES.CHIP ||
      category.type === INPUT_TYPES.MULTI_CHIP
    ) {
      populateChipGroup(category);
    }
  });
}

function initializeCategories() {
  CATEGORY_CONFIG.forEach(bindCategoryEvents);
}

function initializePresets() {
  renderPresetButtons();
  bindPresetButtons();
  loadActivePreset();
}

function initializeStorage() {
  loadSavedPrompts();
  renderPromptHistory();

  loadLockState();
}

function initializeApplicationState() {
  clearPromptOutput();

  CATEGORY_CONFIG.forEach((category) => {
    if (category.type === INPUT_TYPES.DROPDOWN) {
      setDropdownValue(category.id, DEFAULT_VALUES.SELECT);
    }

    if (category.type === INPUT_TYPES.CHIP) {
      setSelectedChipValue(category.id, DEFAULT_VALUES.SELECT);
    }

    if (category.type === INPUT_TYPES.MULTI_CHIP) {
      setSelectedMultiValues(category.id, []);
    }

    if (category.type === INPUT_TYPES.TEXTAREA) {
      setTextareaValue(category.id, "");
    }

    if (category.customId) {
      setTextValue(category.customId, "");
    }
  });
}

/* ==========================================================
   FINAL VALIDATION
========================================================== */

function validateDomBindings() {
  CATEGORY_CONFIG.forEach((category) => {
    const element = byId(category.id);

    if (!element) {
      console.warn(`Missing element: ${category.id}`);
    }

    if (category.customId && !byId(category.customId)) {
      console.warn(`Missing custom input: ${category.customId}`);
    }

    if (!getLockButton(category.id)) {
      console.warn(`Missing lock button: ${category.id}`);
    }
  });

  [
    DOM.generateButton,
    DOM.randomizeButton,
    DOM.copyButton,
    DOM.copyFinalPromptButton,
    DOM.saveButton,
    DOM.clearButton,
    DOM.finalPrompt,
    DOM.historyContainer
  ].forEach((element) => {
    if (!element) {
      console.warn("Missing required DOM element.");
    }
  });
}

function initializeApplication() {
  try {
    initializeDropdowns();
    initializeChipGroups();
    initializeApplicationState();
    initializeStorage();
    initializePresets();
    initializeCategories();
    bindMainButtons();
    validateDomBindings();

    console.info(`${APP_NAME} initialized successfully.`);
  } catch (error) {
    handleApplicationError(
      error,
      "Application failed to initialize."
    );
  }
}

/* ==========================================================
   START APPLICATION
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApplication);