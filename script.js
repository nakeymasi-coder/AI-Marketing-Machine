"use strict";

/* ==========================================================
   APPLICATION CONSTANTS
========================================================== */

const APP_NAME = "Faith-Based Luxury Affirmation Artwork Prompt Generator";

const STORAGE_KEYS = Object.freeze({
  SAVED_PROMPTS: "faithLuxuryAffirmationGenerator.savedPrompts",
  ACTIVE_PRESET: "faithLuxuryAffirmationGenerator.activePreset",
  LOCKS: "faithLuxuryAffirmationGenerator.locks",
});

const INPUT_TYPES = Object.freeze({
  DROPDOWN: "dropdown",
  CHIP: "chip-button",
  MULTI_CHIP: "multi-select",
  TEXT: "text",
  TEXTAREA: "textarea",
});

const DEFAULT_VALUES = Object.freeze({
  SELECT: "None",
  TEXT: "",
  TEXTAREA: "",
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
    "Woodcut Style",
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
    "Wide Frame",
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
    "White",
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
    "Young Adult",
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
    "Sunset",
  ],

  colorPalette: [
    "None",
    "Black & Gold",
    "Black, Gold & White",
    "Blush Pink & Gold",
    "Burgundy & Gold",
    "Champagne & Ivory",
    "Chocolate Brown & Gold",
    "Cream & Gold",
    "Emerald & Gold",
    "Gold & Black",
    "Gold & White",
    "Ivory & Gold",
    "Lavender & Gold",
    "Monochrome",
    "Navy & Gold",
    "Neutral Luxury",
    "Pink & Gold",
    "Plum & Gold",
    "Purple & Gold",
    "Red & Gold",
    "Rose Gold & Cream",
    "Royal Blue & Gold",
    "Sage Green & Gold",
    "Silver & White",
    "Soft Pastels",
    "Teal & Gold",
    "Terracotta & Cream",
    "White, Gold & Beige",
  ],

  typographyStyle: [
    "None",
    "Bold Modern",
    "Classic Serif",
    "Clean Sans Serif",
    "Editorial Serif",
    "Elegant Script",
    "Embossed",
    "Gold Foil",
    "Hand Lettered",
    "High Fashion Serif",
    "Luxury Serif",
    "Minimal Sans Serif",
    "Mixed Typography",
    "Modern Calligraphy",
    "Modern Serif",
    "Neon Style",
    "Refined Script",
    "Signature Script",
    "Soft Feminine Script",
    "Sophisticated Serif",
    "Vintage Serif",
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
    "Volumetric",
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
    "Wide Scene",
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
    "Water Reflections",
  ],
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
    ageGroup: "Middle Aged",
    environment: "Luxury Interior",
    colorPalette: "Royal Blue & Gold",
    typographyStyle: "Luxury Serif",
    lighting: "Golden Hour",
    composition: "Centered Portrait",
    visualDetails: ["Gold Accents", "Soft Glow", "Elegant Textures"],
    affirmationText: "I walk boldly in faith, confidence, and purpose.",
    additionalInstructions: "",
  },

  "Peace Beyond Understanding": {
    artworkStyle: "Soft Painterly",
    faithTheme: "Peace Beyond Understanding",
    empowermentTheme: "Peace",
    subject: "Individual Portrait",
    bodyType: "Average",
    ethnicity: "Mixed Ethnicity",
    ageGroup: "Middle Aged",
    environment: "Garden",
    colorPalette: "Soft Pastels",
    typographyStyle: "Elegant Script",
    lighting: "Soft Natural",
    composition: "Waist Up",
    visualDetails: ["Flowers", "Soft Glow", "Light Rays"],
    affirmationText: "God’s peace covers me, steadies me, and leads me.",
    additionalInstructions: "",
  },

  "Chosen And Covered": {
    artworkStyle: "High Fashion",
    faithTheme: "Chosen",
    empowermentTheme: "Self Worth",
    subject: "Woman",
    bodyType: "Curvy",
    ethnicity: "Black",
    ageGroup: "Middle Aged",
    environment: "Studio",
    colorPalette: "Gold & Black",
    typographyStyle: "Gold Foil",
    lighting: "Studio Lighting",
    composition: "Magazine Cover",
    visualDetails: ["Gold Accents", "Bokeh", "Elegant Textures"],
    affirmationText: "I am chosen, covered, and called for more.",
    additionalInstructions: "",
  },

  "Grace In Bloom": {
    artworkStyle: "Watercolor Illustration",
    faithTheme: "God's Grace",
    empowermentTheme: "Healing",
    subject: "Woman",
    bodyType: "Petite",
    ethnicity: "Latina",
    ageGroup: "Young Adult",
    environment: "Floral Setting",
    colorPalette: "Pink & Gold",
    typographyStyle: "Hand Lettered",
    lighting: "Glowing",
    composition: "Full Body",
    visualDetails: ["Flowers", "Butterflies", "Soft Glow"],
    affirmationText: "Grace is growing in every part of my life.",
    additionalInstructions: "",
  },

  "Victory Through Christ": {
    artworkStyle: "Cinematic",
    faithTheme: "Victory Through Christ",
    empowermentTheme: "Victory",
    subject: "Man",
    bodyType: "Athletic",
    ethnicity: "African",
    ageGroup: "Middle Aged",
    environment: "Mountain",
    colorPalette: "Gold & White",
    typographyStyle: "Bold Modern",
    lighting: "Dramatic",
    composition: "Wide Scene",
    visualDetails: ["Light Rays", "Clouds", "Soft Glow"],
    affirmationText: "Through Christ, I rise with strength and victory.",
    additionalInstructions: "",
  },

  "New Chapter Glow": {
    artworkStyle: "Glamorous",
    faithTheme: "New Beginnings",
    empowermentTheme: "Fresh Start",
    subject: "Content Creator",
    bodyType: "Voluptuous",
    ethnicity: "Mixed Ethnicity",
    ageGroup: "Young Adult",
    environment: "City",
    colorPalette: "Purple & Gold",
    typographyStyle: "Mixed Typography",
    lighting: "Cinematic",
    composition: "Poster Layout",
    visualDetails: ["Sparkles", "Gold Accents", "Bokeh"],
    affirmationText: "This is my new chapter, and I am glowing with purpose.",
    additionalInstructions: "",
  },

  "God’s Timing Is Perfect": {
    artworkStyle: "Elegant",
    faithTheme: "God's Timing",
    empowermentTheme: "Calm",
    subject: "Individual Portrait",
    bodyType: "Medium Build",
    ethnicity: "Asian",
    ageGroup: "Middle Aged",
    environment: "Sunset",
    colorPalette: "Neutral Luxury",
    typographyStyle: "Luxury Serif",
    lighting: "Golden Hour",
    composition: "Close Up",
    visualDetails: ["Soft Glow", "Water Reflections", "Light Rays"],
    affirmationText: "God’s timing is perfect, and I trust the process.",
    additionalInstructions: "",
  },

  "Prayer Warrior Strength": {
    artworkStyle: "Hyper Realistic",
    faithTheme: "Prayer",
    empowermentTheme: "Strength",
    subject: "Prayer Warrior",
    bodyType: "Muscular",
    ethnicity: "African American",
    ageGroup: "Middle Aged",
    environment: "Church",
    colorPalette: "Gold & Black",
    typographyStyle: "Embossed",
    lighting: "Dramatic",
    composition: "Centered Portrait",
    visualDetails: ["Light Rays", "Soft Glow", "Gold Accents"],
    affirmationText: "My strength is renewed through prayer and faith.",
    additionalInstructions: "",
  },

  "Healing Journey": {
    artworkStyle: "Digital Painting",
    faithTheme: "Divine Healing",
    empowermentTheme: "Healing Journey",
    subject: "Woman",
    bodyType: "Full Figure",
    ethnicity: "Caribbean",
    ageGroup: "Middle Aged",
    environment: "Beach",
    colorPalette: "Soft Pastels",
    typographyStyle: "Minimal Sans Serif",
    lighting: "Soft Natural",
    composition: "Wide Scene",
    visualDetails: ["Water Reflections", "Clouds", "Soft Glow"],
    affirmationText: "I am healing, growing, and becoming whole.",
    additionalInstructions: "",
  },

  "Purpose Driven Life": {
    artworkStyle: "Modern Realism",
    faithTheme: "God's Purpose",
    empowermentTheme: "Purpose Driven",
    subject: "Entrepreneur",
    bodyType: "Tall",
    ethnicity: "Middle Eastern",
    ageGroup: "Young Adult",
    environment: "Luxury Interior",
    colorPalette: "Emerald & Gold",
    typographyStyle: "Bold Modern",
    lighting: "High Contrast",
    composition: "Magazine Cover",
    visualDetails: ["Elegant Textures", "Gold Accents", "Decorative Frame"],
    affirmationText: "I am walking in purpose, power, and divine direction.",
    additionalInstructions: "",
  },

  "Faith Over Fear": {
    artworkStyle: "Luxury Portrait",
    faithTheme: "Faith Over Fear",
    empowermentTheme: "Courage",
    subject: "Teen",
    bodyType: "Average",
    ethnicity: "Hispanic",
    ageGroup: "Teenager",
    environment: "Abstract Background",
    colorPalette: "Royal Blue & Gold",
    typographyStyle: "Neon Style",
    lighting: "Glowing",
    composition: "Close Up",
    visualDetails: ["Sparkles", "Soft Glow", "Bokeh"],
    affirmationText: "Faith is louder than fear.",
    additionalInstructions: "",
  },

  "Abundance And Overflow": {
    artworkStyle: "High-End Commercial",
    faithTheme: "Overflow",
    empowermentTheme: "Abundance",
    subject: "Business Professional",
    bodyType: "Athletic",
    ethnicity: "African",
    ageGroup: "Middle Aged",
    environment: "Luxury Interior",
    colorPalette: "Gold & White",
    typographyStyle: "Gold Foil",
    lighting: "Studio Lighting",
    composition: "Full Body",
    visualDetails: ["Gold Accents", "Decorative Frame", "Elegant Textures"],
    affirmationText: "I am open to overflow, favor, and abundance.",
    additionalInstructions: "",
  },

  "Still Covered": {
    artworkStyle: "Minimal Luxury",
    faithTheme: "God's Protection",
    empowermentTheme: "Calm",
    subject: "Grandmother",
    bodyType: "Curvy",
    ethnicity: "Black",
    ageGroup: "Senior Adult",
    environment: "Heavenly Light",
    colorPalette: "Gold & White",
    typographyStyle: "Elegant Script",
    lighting: "Volumetric",
    composition: "Waist Up",
    visualDetails: ["Light Rays", "Clouds", "Soft Glow"],
    affirmationText: "I am still covered, still blessed, and still becoming.",
    additionalInstructions: "",
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
    additionalInstructions: "",
  },

  "Unshakable Woman": {
    artworkStyle: "Luxury Editorial",
    faithTheme: "Steadfast Faith",
    empowermentTheme: "Unshakable Confidence",
    subject: "Woman",
    bodyType: "Thick",
    ethnicity: "African American",
    ageGroup: "Middle Aged",
    environment: "City",
    colorPalette: "Monochrome",
    typographyStyle: "Bold Modern",
    lighting: "High Contrast",
    composition: "Dynamic Composition",
    visualDetails: ["Bokeh", "Gold Accents", "Elegant Textures"],
    affirmationText: "I am unshakable because my faith is rooted in God.",
    additionalInstructions: "",
  },
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
    clear: true,
  },

  {
    id: "faithTheme",
    customId: "faithThemeCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "empowermentTheme",
    customId: "empowermentThemeCustom",
    type: INPUT_TYPES.CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "subject",
    customId: "subjectCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "bodyType",
    customId: "bodyTypeCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "ethnicity",
    customId: "ethnicityCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "ageGroup",
    customId: "ageGroupCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "environment",
    customId: "environmentCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "colorPalette",
    customId: "colorPaletteCustom",
    type: INPUT_TYPES.CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "typographyStyle",
    customId: "typographyStyleCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "lighting",
    customId: "lightingCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "composition",
    customId: "compositionCustom",
    type: INPUT_TYPES.DROPDOWN,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "visualDetails",
    customId: "visualDetailsCustom",
    type: INPUT_TYPES.MULTI_CHIP,
    randomize: true,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "affirmationText",
    type: INPUT_TYPES.TEXTAREA,
    randomize: false,
    preset: true,
    lock: true,
    clear: true,
  },

  {
    id: "additionalInstructions",
    type: INPUT_TYPES.TEXTAREA,
    randomize: false,
    preset: false,
    lock: true,
    clear: true,
  },
]);

/* ==========================================================
   DOM HELPERS
========================================================== */

const $ = (selector, scope = document) => scope.querySelector(selector);

const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector),
];

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
    customGpt: byId("customGptPromptOutput"),
  },

  sunoBuilder: {
    musicFormat: byId("musicFormat"),
    musicGenre: byId("musicGenre"),
    musicReference: byId("musicReference"),
    vocalType: byId("vocalType"),
    songLength: byId("songLength"),
    lyricsType: byId("lyricsType"),
    musicMood: byId("musicMood"),
    musicEnergy: byId("musicEnergy"),
    musicTempo: byId("musicTempo"),
    musicInstruments: byId("musicInstruments"),
    songStructure: byId("songStructure"),
    vocalDelivery: byId("vocalDelivery"),
    customLyrics: byId("customLyrics"),
    musicAvoid: byId("musicAvoid"),
    additionalMusicInstructions: byId("additionalMusicInstructions"),
  },

  marketingBuilder: {
    marketingGoal: byId("marketingGoal"),
    marketingOfferName: byId("marketingOfferName"),
    marketingAudience: byId("marketingAudience"),
    marketingPlatform: byId("marketingPlatform"),
    marketingTone: byId("marketingTone"),
    marketingCallToAction: byId("marketingCallToAction"),
    marketingLinkDestination: byId("marketingLinkDestination"),
    marketingContentType: byId("marketingContentType"),
    marketingKeywords: byId("marketingKeywords"),
    marketingAvoid: byId("marketingAvoid"),
    additionalMarketingInstructions: byId("additionalMarketingInstructions"),
  },

  generateMarketingButton: byId("generateMarketingPromptBtn"),

  customGptBuilder: {
    gptName: byId("gptName"),
    gptAudience: byId("gptAudience"),
    gptTone: byId("gptTone"),
    gptQuestionStyle: byId("gptQuestionStyle"),
    gptResultCount: byId("gptResultCount"),
    additionalGptInstructions: byId("additionalGptInstructions"),
  },

  generateCustomGptButton: byId("generateCustomGptPromptBtn"),

  premiumCopyButtons: {
    suno: byId("copySunoPromptBtn"),
    video: byId("copyVideoScriptBtn"),
    marketing: byId("copyMarketingPromptBtn"),
    customGpt: byId("copyCustomGptPromptBtn"),
  },
  generateButton: byId("generatePromptBtn"),
  generateSunoButton: byId("generateSunoPromptBtn"),
  randomizeButton: byId("randomizeBtn"),
  copyButton: byId("copyPromptBtn"),
  saveButton: byId("savePromptBtn"),
  clearButton: byId("clearAllBtn"),

  finalPrompt: byId("finalPrompt"),

  copyFinalPromptButton: byId("copyFinalPromptBtn"),

  variationsContainer: byId("promptVariationsContainer"),

  variationOutputs: [
    byId("variationOutput1"),
    byId("variationOutput2"),
    byId("variationOutput3"),
    byId("variationOutput4"),
  ],

  historyContainer: byId("promptHistoryContainer"),
  historyTemplate: byId("promptHistoryTemplate"),
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
};

/* ==========================================================
   CATEGORY STATE
========================================================== */

const categoryState = CATEGORY_CONFIG.reduce((state, category) => {
  state[category.id] = {
    value:
      category.type === INPUT_TYPES.MULTI_CHIP ? [] : DEFAULT_VALUES.SELECT,
    locked: false,
  };

  if (category.customId) {
    state[category.customId] = {
      value: DEFAULT_VALUES.TEXT,
    };
  }

  if (category.type === INPUT_TYPES.TEXTAREA) {
    state[category.id] = {
      value: DEFAULT_VALUES.TEXTAREA,
      locked: false,
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
    return (
      value.length === 0 ||
      value.every((item) => item === DEFAULT_VALUES.SELECT)
    );
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
  return byId(
    `clear${categoryId.charAt(0).toUpperCase()}${categoryId.slice(1)}`,
  );
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
    (option) => option !== DEFAULT_VALUES.SELECT,
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
  select.value = approvedOptions.includes(value)
    ? value
    : DEFAULT_VALUES.SELECT;
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
  button.setAttribute(
    "aria-pressed",
    option === DEFAULT_VALUES.SELECT ? "true" : "false",
  );

  return button;
}

function populateChipGroup(category) {
  const group = getCategoryElement(category.id);
  const options = OPTION_DATA[category.id] || [];
  const isMultiSelect = category.type === INPUT_TYPES.MULTI_CHIP;

  if (
    !group ||
    ![INPUT_TYPES.CHIP, INPUT_TYPES.MULTI_CHIP].includes(category.type)
  ) {
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
    const isSelected =
      safeValues.length === 0 ? isNone : safeValues.includes(value);

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
    values.map((value) => cleanText(value)).filter((value) => value),
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
    selectedValues.filter((value) => value !== DEFAULT_VALUES.SELECT),
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
    artworkStyle: `Create the artwork in a ${joinedValues} style.`,
    faithTheme: `Center the artwork on the faith theme of ${joinedValues}.`,
    empowermentTheme: `Reflect the empowerment theme of ${joinedValues}.`,
    subject: `Feature ${joinedValues} as the main subject.`,
    bodyType: `Depict the subject with a ${joinedValues} body type.`,
    ethnicity: `Depict the subject as ${joinedValues}.`,
    ageGroup: `Depict the subject as ${joinedValues}.`,
    environment: `Place the subject in a ${joinedValues} setting.`,
    colorPalette: `Use a ${joinedValues} color palette.`,
    typographyStyle: `Render the affirmation text using ${joinedValues} typography.`,
    lighting: `Use ${joinedValues} lighting.`,
    composition: `Use a ${joinedValues} composition.`,
    visualDetails: `Include these visual details: ${joinedValues}.`,
    affirmationText: `Include this affirmation text: "${joinedValues}".`,
    additionalInstructions: `Additional creative instructions: ${joinedValues}.`,
  };

  return segmentMap[category.id] || "";
}

function removeDuplicateSegments(segments) {
  const seen = new Set();

  return segments.filter((segment) => {
    const normalized = segment
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .trim();

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
    userContent: removeDuplicateSegments(userContentSegments),
  };
}

/* ==========================================================
   FINAL PROMPT ASSEMBLY
========================================================== */

function assembleFinalPrompt(inputData) {
  const sections = buildPromptSections(inputData);

  const promptSentences = [
    `Create a polished faith-based luxury affirmation artwork image.`,
    ...sections.selections,
    ...sections.userContent,
    `Display the affirmation text clearly and beautifully as part of the artwork using the selected typography style.`,
    `Render this as a finished image, not as a prompt template.`,
    `Make the artwork cohesive, professional, visually balanced, highly detailed, faith-centered, emotionally uplifting, and suitable for premium wall art, digital artwork, or social media content.`,
  ];

  return promptSentences
    .filter((part) => cleanText(part))
    .join(" ")
    .trim();
}

function updatePromptOutput(prompt) {
  appState.generatedPrompt = prompt;
  safeSetValue(DOM.finalPrompt, prompt);
}

function collectSunoBuilderData() {
  const getValue = (element) => {
    if (!element) {
      return "";
    }

    const value = cleanText(element.value);

    return value === DEFAULT_VALUES.SELECT ? "" : value;
  };

  return {
    musicFormat: getValue(DOM.sunoBuilder.musicFormat),
    musicGenre: getValue(DOM.sunoBuilder.musicGenre),
    musicReference: getValue(DOM.sunoBuilder.musicReference),
    vocalType: getValue(DOM.sunoBuilder.vocalType),
    songLength: getValue(DOM.sunoBuilder.songLength),
    lyricsType: getValue(DOM.sunoBuilder.lyricsType),
    musicMood: getValue(DOM.sunoBuilder.musicMood),
    musicEnergy: getValue(DOM.sunoBuilder.musicEnergy),
    musicTempo: getValue(DOM.sunoBuilder.musicTempo),
    musicInstruments: getValue(DOM.sunoBuilder.musicInstruments),
    songStructure: getValue(DOM.sunoBuilder.songStructure),
    vocalDelivery: getValue(DOM.sunoBuilder.vocalDelivery),
    customLyrics: getValue(DOM.sunoBuilder.customLyrics),
    musicAvoid: getValue(DOM.sunoBuilder.musicAvoid),
    additionalMusicInstructions: getValue(
      DOM.sunoBuilder.additionalMusicInstructions,
    ),
  };
}

function collectMarketingBuilderData() {
  const getValue = (element) => {
    if (!element) {
      return "";
    }

    const value = cleanText(element.value);

    return value === DEFAULT_VALUES.SELECT ? "" : value;
  };

  return {
    marketingGoal: getValue(DOM.marketingBuilder.marketingGoal),
    marketingOfferName: getValue(DOM.marketingBuilder.marketingOfferName),
    marketingAudience: getValue(DOM.marketingBuilder.marketingAudience),
    marketingPlatform: getValue(DOM.marketingBuilder.marketingPlatform),
    marketingTone: getValue(DOM.marketingBuilder.marketingTone),
    marketingCallToAction: getValue(DOM.marketingBuilder.marketingCallToAction),
    marketingLinkDestination: getValue(
      DOM.marketingBuilder.marketingLinkDestination,
    ),
    marketingContentType: getValue(DOM.marketingBuilder.marketingContentType),
    marketingKeywords: getValue(DOM.marketingBuilder.marketingKeywords),
    marketingAvoid: getValue(DOM.marketingBuilder.marketingAvoid),
    additionalMarketingInstructions: getValue(
      DOM.marketingBuilder.additionalMarketingInstructions,
    ),
  };
}

function collectCustomGptBuilderData() {
  const getValue = (element) => {
    if (!element) {
      return "";
    }

    const value = cleanText(element.value);

    return value === DEFAULT_VALUES.SELECT ? "" : value;
  };

  return {
    gptName: getValue(DOM.customGptBuilder.gptName),
    gptAudience: getValue(DOM.customGptBuilder.gptAudience),
    gptTone: getValue(DOM.customGptBuilder.gptTone),
    gptQuestionStyle: getValue(DOM.customGptBuilder.gptQuestionStyle),
    gptResultCount: getValue(DOM.customGptBuilder.gptResultCount),
    additionalGptInstructions: getValue(
      DOM.customGptBuilder.additionalGptInstructions,
    ),
  };
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
    additionalInstructions: getValues("additionalInstructions"),
  };
}

function generateSunoPrompt(inputData) {
  const c = buildPremiumContext(inputData);
  const music = collectSunoBuilderData();

  const affirmation = c.affirmationText || "God is still working in my life.";

  const faithTheme = c.faithTheme || "faith";
  const empowermentTheme = c.empowermentTheme || "hope";

  const referenceDirection = music.musicReference
    ? `Use the emotional qualities associated with ${music.musicReference}, such as powerful worship vocals, uplifting gospel energy, rich harmonies, emotional builds, and a strong faith-centered delivery. Do not copy any existing melody, lyrics, or recording.`
    : "";

  const lyricsDirection =
    music.lyricsType === "Instrumental"
      ? `Create an instrumental track with no sung or spoken lyrics.`
      : `Write original ${music.lyricsType || "song"} lyrics centered on the affirmation: "${affirmation}"

The lyrics should communicate ${faithTheme}, ${empowermentTheme}, confidence, spiritual covering, purpose, and trust in God.

Use the affirmation naturally as the main message or chorus hook without repeating it excessively.

Create a clear song structure using ${
          music.songStructure ||
          "Verse 1, Pre-Chorus, Chorus, Verse 2, Bridge, and Final Chorus"
        }.

The chorus should be memorable, emotionally powerful, and easy to sing along with.`;

  return `SUNO MUSIC CREATION BRIEF

Create a ${music.musicFormat || "full song"} with a total length of approximately ${
    music.songLength || "3 minutes"
  }.

STYLE OF MUSIC

Genre: ${music.musicGenre || "Gospel"}.
Mood: ${music.musicMood || "Uplifting"}.
Energy: ${music.musicEnergy || "Moderate"}.
Tempo: ${music.musicTempo || "Mid-Tempo"}.
Vocal arrangement: ${music.vocalType || "Female Vocal"}.
Vocal delivery: ${
    music.vocalDelivery ||
    "Soulful, expressive, powerful, warm, and faith-filled"
  }.
Instrumentation: ${
    music.musicInstruments ||
    "Piano, organ, gospel drums, bass, warm strings, handclaps, and layered choir harmonies"
  }.

${referenceDirection}

SONG MESSAGE

Faith theme: ${faithTheme}.
Empowerment theme: ${empowermentTheme}.
Central affirmation: "${affirmation}".

${lyricsDirection}

${
  music.customLyrics
    ? `REQUIRED LYRICS OR PHRASES

Include these original words or phrases naturally:

${music.customLyrics}`
    : ""
}

${
  music.musicAvoid
    ? `AVOID

${music.musicAvoid}`
    : ""
}

${
  music.additionalMusicInstructions
    ? `ADDITIONAL DIRECTIONS

${music.additionalMusicInstructions}`
    : ""
}

FINAL DIRECTION

Create an original, polished, emotionally engaging faith-based song with a strong beginning, memorable chorus, satisfying musical build, and powerful ending.

Preserve the meaning of the affirmation. Do not copy existing melodies, lyrics, vocal performances, or recordings.`;
}

function generateVideoScriptPrompt(inputData) {
  const c = buildPremiumContext(inputData);

  const affirmation = c.affirmationText || "God is still working in my life.";

  return `Create a finished cinematic faith-based affirmation video.

FORMAT

Vertical 9:16 short-form video.

LENGTH

8 to 10 seconds.

VISUAL DIRECTION

Create the video in a ${c.artworkStyle || "Luxury Editorial"} style.

Feature ${c.subject || "an individual"} as the main subject.

Subject details:
Body type: ${c.bodyType || "Not specified"}.
Ethnicity: ${c.ethnicity || "Not specified"}.
Age group: ${c.ageGroup || "Not specified"}.

Place the subject in a ${c.environment || "soft spiritual"} setting.

Center the visual message on ${c.faithTheme || "faith"} and ${c.empowermentTheme || "hope"}.

Use a ${c.colorPalette || "Gold & White"} color palette, ${c.lighting || "soft cinematic"} lighting, and a ${c.composition || "balanced portrait"} composition.

Include these visual details: ${c.visualDetails || "soft glow, elegant textures, and gentle light rays"}.

VIDEO ACTION

Begin with the subject already visible.

Use one slow, smooth camera movement such as a gentle push-in, subtle pullback, or soft side-to-side motion.

Add natural movement to the subject’s clothing, hair, background light, or surrounding details.

Do not use fast cuts or multiple scenes.

AFFIRMATION TEXT

Display this affirmation clearly throughout the main portion of the video:

"${affirmation}"

Render the affirmation using ${c.typographyStyle || "Luxury Serif"} typography.

Keep the text large, readable, elegant, and visually integrated into the scene.

VOICEOVER

Read only this affirmation slowly and warmly:

"${affirmation}"

AUDIO

Use soft inspirational instrumental music with gentle piano, ambient pads, warm strings, or subtle gospel-inspired tones.

FINAL INSTRUCTIONS

Create a finished video, not a script, storyboard, outline, or planning document.

Keep the video visually simple, polished, luxurious, faith-centered, and emotionally uplifting.

Avoid extra captions, opening statements, closing statements, fast transitions, clutter, random symbols, fake AI graphics, dashboards, charts, scan lines, crowns, tiaras, and unrelated effects.`;
}

function generateMarketingPrompt(inputData) {
  const c = buildPremiumContext(inputData);
  const marketing = collectMarketingBuilderData();

  const offerName =
    marketing.marketingOfferName ||
    `${c.faithTheme || "Faith-Based"} Affirmation Artwork`;

  const audience =
    marketing.marketingAudience ||
    "faith-based women, inspirational art lovers, and digital product buyers";

  const affirmation = c.affirmationText || "Faith changes everything.";

  const callToAction =
    marketing.marketingCallToAction || "Click the link to learn more.";

  const linkDestination =
    marketing.marketingLinkDestination || "the product page";

  const keywords =
    marketing.marketingKeywords ||
    `${c.faithTheme || "faith"} affirmation, Christian artwork, inspirational art, faith-based digital product`;

  const tone =
    marketing.marketingTone ||
    "warm, polished, faith-centered, and encouraging";

  return `Create a complete ${marketing.marketingContentType || "multi-platform marketing package"} for the following offer.

OFFER DETAILS

Offer name: ${offerName}
Marketing goal: ${marketing.marketingGoal || "Promote the offer"}
Target audience: ${audience}
Main platform: ${marketing.marketingPlatform || "Multi-Platform"}
Marketing tone: ${tone}
Link destination: ${linkDestination}
Preferred call to action: ${callToAction}

ARTWORK MESSAGE

Faith theme: ${c.faithTheme || "Faith"}
Empowerment theme: ${c.empowermentTheme || "Encouragement"}
Affirmation: "${affirmation}"
Artwork style: ${c.artworkStyle || "Luxury Editorial"}
Color palette: ${c.colorPalette || "Luxury colors"}
Visual details: ${c.visualDetails || "Elegant faith-centered details"}

PINTEREST PACKAGE

Create:

• One SEO-friendly Pinterest pin title
• One persuasive Pinterest description
• One clear call to action
• Five relevant Pinterest keywords
• No more than five hashtags
• One recommendation for the type of pin image or layout to post
• One short text overlay for the pin

Keep the Pinterest description under 800 characters and naturally include the strongest keywords.

TIKTOK PACKAGE

Create:

• One strong opening hook
• One short TikTok caption
• One on-screen text idea
• One 15- to 30-second video concept
• One clear call to action
• Five relevant hashtags

Make the content natural, engaging, easy to film, and focused on the offer’s real value.

INSTAGRAM PACKAGE

Create:

• One Instagram caption
• One opening hook
• One call to action
• Five hashtags
• One Reel or carousel content idea

FACEBOOK PACKAGE

Create:

• One Facebook post
• One short headline
• One clear call to action
• One engagement question

EMAIL PACKAGE

Create:

• Three email subject line options
• One preview-text option
• One promotional email body
• One clear button call to action

Keep the email warm, direct, easy to understand, and focused on the buyer’s benefit.

YOUTUBE PACKAGE

Create:

• One YouTube video title
• One short YouTube description
• One opening hook
• One call to action
• Five search keywords
• One short-form video idea

AD COPY PACKAGE

Create:

• One short primary-text ad
• One headline
• One description
• One call-to-action recommendation

SEO AND DISCOVERY

Use these keywords or phrases naturally:

${keywords}

${
  marketing.marketingAvoid
    ? `AVOID

Do not use these words, claims, or topics:

${marketing.marketingAvoid}`
    : ""
}

${
  marketing.additionalMarketingInstructions
    ? `ADDITIONAL MARKETING INSTRUCTIONS

${marketing.additionalMarketingInstructions}`
    : ""
}

FINAL INSTRUCTIONS

Write platform-specific marketing copy instead of repeating the same caption everywhere.

Keep the content clear, polished, persuasive, beginner-friendly, and appropriate for ${audience}.

Do not use exaggerated claims, fake urgency, generic filler, or unsupported promises.

Preserve the affirmation exactly as written.

Return the finished marketing content, not an explanation of how to create it.`;
}

function generateCustomGptPrompt(inputData) {
  const c = buildPremiumContext(inputData);
  const gpt = collectCustomGptBuilderData();

  const gptName = gpt.gptName || "Faith-Based Affirmation Art Creator";

  const audience =
    gpt.gptAudience ||
    "beginners, faith-based women, content creators, and digital product creators";

  const tone = gpt.gptTone || "Warm and Beginner-Friendly";

  const questionStyle = gpt.gptQuestionStyle || "One Question at a Time";

  const resultCount = gpt.gptResultCount || "One Polished Result";

  const affirmation = c.affirmationText || "God is still working in my life.";

  const questionWorkflowMap = {
    "One Question at a Time": `
Ask only one clear question at a time.

Wait for the user's answer before asking the next question.

Move through the generator categories in a logical order without overwhelming the user.`,

    "Small Groups of Questions": `
Ask the questions in small groups of no more than three related questions.

Wait for the user's answers before moving to the next group.

Keep each group simple and clearly labeled.`,

    "All Questions at Once": `
Ask all necessary generator questions in one organized message.

Group the questions under short, clear headings.

Do not ask the same questions again unless the user's response is incomplete or unclear.`,
  };

  const resultInstructionMap = {
    "One Polished Result": `
Create one complete, polished image-generation prompt.

Return only one final option unless the user specifically requests alternatives.`,

    "Two Options": `
Create two clearly different, complete image-generation prompt options.

Preserve the user's affirmation and required selections in both options.

Make each option meaningfully different in visual direction rather than changing only a few words.`,

    "Three Options": `
Create three clearly different, complete image-generation prompt options.

Preserve the user's affirmation and required selections in every option.

Make all three options meaningfully different in artwork direction, composition, atmosphere, or styling.`,
  };

  const outputLabelMap = {
    "One Polished Result": "one polished image-generation prompt",
    "Two Options": "two polished image-generation prompt options",
    "Three Options": "three polished image-generation prompt options",
  };

  const questionWorkflow =
    questionWorkflowMap[questionStyle] ||
    questionWorkflowMap["One Question at a Time"];

  const resultInstructions =
    resultInstructionMap[resultCount] ||
    resultInstructionMap["One Polished Result"];

  const outputLabel =
    outputLabelMap[resultCount] || outputLabelMap["One Polished Result"];

  return `CUSTOM GPT BUILDER CONFIGURATION

GPT NAME

${gptName}

────────────────────────────

GPT PURPOSE

Help ${audience} create polished faith-based luxury affirmation artwork prompts using the approved categories, options, workflow, and image-output structure from this generator.

The GPT should guide users through:

• Artwork style
• Faith theme
• Empowerment theme
• Subject
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

COMPLETE CUSTOM GPT INSTRUCTIONS

You are an expert creative director and AI image-prompt specialist for faith-based luxury affirmation artwork.

Your job is to help users create direct instructions for finished images.

Do not create prompts about creating prompts.

TARGET AUDIENCE

${audience}

TONE AND PERSONALITY

${tone}

QUESTION STYLE

${questionStyle}

${questionWorkflow}

RESULT COUNT

${resultCount}

${resultInstructions}

────────────────────────────

CORE WORKFLOW

1. Collect the user's affirmation text.
2. Collect the faith theme and empowerment theme.
3. Identify the main subject.
4. Collect subject details only when they are relevant.
5. Collect the environment, artwork style, color palette, typography, lighting, composition, and visual details.
6. Collect any final custom instructions.
7. Review the selections for conflicts, missing information, or unnecessary clutter.
8. Create ${outputLabel}.

When the user is unsure, provide only one or two helpful choices at a time.

Do not override choices the user already provided.

────────────────────────────

DEFAULT CREATIVE DIRECTION

Artwork style: ${c.artworkStyle || "Luxury Editorial"}
Faith theme: ${c.faithTheme || "Faith"}
Empowerment theme: ${c.empowermentTheme || "Encouragement"}
Subject: ${c.subject || "Individual Portrait"}
Body type: ${c.bodyType || "Not specified"}
Ethnicity: ${c.ethnicity || "Not specified"}
Age group: ${c.ageGroup || "Not specified"}
Environment: ${c.environment || "Luxury Interior"}
Color palette: ${c.colorPalette || "Royal Blue & Gold"}
Typography style: ${c.typographyStyle || "Luxury Serif"}
Lighting: ${c.lighting || "Soft Natural"}
Composition: ${c.composition || "Centered Portrait"}
Visual details: ${c.visualDetails || "Soft Glow, Light Rays, Elegant Textures"}
Affirmation: "${affirmation}"

Use these defaults only when the user does not provide a choice.

────────────────────────────

FINAL OUTPUT RULES

Every final option must:

• Directly instruct an image generator to create a finished image
• Preserve the affirmation exactly
• Use the user's selected categories
• Keep the artwork cohesive and visually balanced
• Include clear typography placement and readability instructions
• Keep faith themes respectful and meaningful
• Avoid filler, placeholders, and repeated wording
• Avoid unnecessary follow-up questions
• Avoid crowns, tiaras, and royal headpieces unless requested
• Avoid fake AI graphics, dashboards, charts, scan lines, and futuristic clutter unless requested
• Avoid unrelated objects and random symbols

────────────────────────────

FINAL OUTPUT FORMAT

Return ${outputLabel}.

Each option must be a complete, copy-ready image-generation prompt.

Use this structure as a guide:

Create a polished faith-based luxury affirmation artwork image in a [artwork style] style. Center the artwork on [faith theme] and [empowerment theme]. Feature [subject] as the main subject, including [body type], [ethnicity], and [age group] details when provided. Place the subject in [environment]. Use a [color palette] color palette with [typography style] typography. Use [lighting] lighting and a [composition] composition. Include [visual details]. Display this affirmation exactly: "[affirmation text]". Make the finished artwork cohesive, professional, visually balanced, highly detailed, faith-centered, emotionally uplifting, and suitable for premium digital or printed use.

Do not include explanations before or after the final result unless the user asks.

────────────────────────────

WELCOME MESSAGE

Welcome. I’ll help you turn your faith-based affirmation into polished luxury artwork.

Start by sharing the affirmation you want included.

────────────────────────────

CONVERSATION STARTERS

1. Create faith-based affirmation artwork from my message.
2. Help me choose a visual direction for my affirmation.
3. Create luxury faith-centered social media artwork.
4. Turn my affirmation into polished wall art.
5. Help me build an uplifting faith-based image concept.

────────────────────────────

RECOMMENDED KNOWLEDGE FILES

• Approved category list
• Approved option lists
• Brand style guide
• Strong prompt examples
• Visual-reference examples
• Banned-elements list
• Product-use guide
• Testing examples

${
  gpt.additionalGptInstructions
    ? `────────────────────────────

ADDITIONAL CUSTOM GPT INSTRUCTIONS

${gpt.additionalGptInstructions}`
    : ""
}

────────────────────────────

FINAL BUILD CHECK

Before publishing, verify that the GPT:

• Uses the selected question style without contradicting it
• Produces the selected number of results
• Preserves the affirmation exactly
• Uses the approved categories
• Creates direct image instructions
• Avoids prompt-about-prompt wording
• Uses the selected tone
• Works when users provide minimal details
• Returns complete copy-ready image prompts`;
}

function generatePremiumOutputs(inputData) {
  if (!hasAnyUsableInput(inputData)) {
    clearPremiumOutputs();
    return;
  }

  safeSetValue(DOM.premiumOutputs.suno, generateSunoPrompt(inputData));
  safeSetValue(DOM.premiumOutputs.video, generateVideoScriptPrompt(inputData));
  safeSetValue(
    DOM.premiumOutputs.marketing,
    generateMarketingPrompt(inputData),
  );
  safeSetValue(
    DOM.premiumOutputs.customGpt,
    generateCustomGptPrompt(inputData),
  );
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

      showToast(validationErrors[0], "error");
      return "";
    }

    const prompt = assembleFinalPrompt(inputData);

    if (!prompt) {
      updatePromptOutput("");
      clearPromptVariations();

      showToast("Prompt could not be generated.", "error");
      return "";
    }

    updatePromptOutput(prompt);
    generatePromptVariations(prompt, inputData);
    generatePremiumOutputs(inputData);

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
      setDropdownValue(
        category.id,
        randomFromArray(options) || DEFAULT_VALUES.SELECT,
      );
      break;
    }

    case INPUT_TYPES.CHIP: {
      const options = getRandomOptions(category.id);
      setSelectedChipValue(
        category.id,
        randomFromArray(options) || DEFAULT_VALUES.SELECT,
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
        Math.max(1, Math.floor(Math.random() * 4) + 1),
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
        setSelectedMultiValues(category.id, Array.isArray(value) ? value : []);
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
    fullPrompt: prompt,
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
    (prompt) => prompt.id !== id,
  );

  persistSavedPrompts();
  renderPromptHistory();
}

function loadSavedPrompts() {
  appState.savedPrompts = readStorage(STORAGE_KEYS.SAVED_PROMPTS, []);
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
  const sections = buildPromptSections(inputData);

  const creativeDirection = sections.selections.join(" ");
  const userContent = sections.userContent.join(" ");

  if (!cleanText(creativeDirection) && !cleanText(userContent)) {
    clearPromptVariations();
    return;
  }

  const variations = [
    `Create a polished faith-based luxury affirmation artwork image. ${creativeDirection} ${userContent} Give the image refined detail, natural depth, clean visual balance, realistic textures, and a professional finished appearance. Keep every selected subject detail, theme, setting, color, typography choice, lighting choice, composition, and affirmation exactly as provided. Display the affirmation clearly and beautifully as part of the finished artwork.`,

    `Create a finished faith-based luxury affirmation artwork image using these exact selections. ${creativeDirection} ${userContent} Strengthen the emotional atmosphere through thoughtful framing, dimensional lighting, elegant depth, and intentional visual storytelling. Preserve all selected details without replacing the subject, environment, style, palette, typography, composition, visual elements, or affirmation text.`,

    `Create a premium faith-based affirmation artwork image. ${creativeDirection} ${userContent} Place strong emphasis on typography placement, text readability, spacing, hierarchy, and seamless integration of the affirmation into the artwork. Keep the visual scene sophisticated, cohesive, uncluttered, and professionally composed while preserving every user selection exactly.`,

    `Create a highly polished faith-based luxury affirmation artwork image. ${creativeDirection} ${userContent} Elevate the final presentation with graceful detail, refined craftsmanship, balanced contrast, realistic texture, emotional warmth, and a premium editorial finish. Do not change or substitute any selected category, subject detail, visual direction, or affirmation text. Render a complete finished image rather than a prompt template.`,
  ].map((variation) => variation.replace(/\s+/g, " ").trim());

  appState.promptVariations = variations;

  DOM.variationOutputs.forEach((output, index) => {
    if (output) {
      output.value = variations[index] || "";
    }
  });
}

function calculatePromptEffectiveness(prompt) {
  if (!prompt) {
    return 0;
  }

  return Math.min(10, 10);
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

  showToast(fallbackMessage || "An unexpected error occurred.", "error");
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
      const expanded = toggle.getAttribute("aria-expanded") === "true";

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

      setSelectedChipValue(category.id, chip.dataset.value);
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
      }
    });
  }

  /* ---------- Custom Text ---------- */

  if (category.customId) {
    const custom = byId(category.customId);

    if (custom) {
      custom.addEventListener("input", (event) => {
        categoryState[category.customId].value = cleanText(event.target.value);
      });
    }
  }
}

/* ==========================================================
   BUTTON CONNECTIONS
========================================================== */

function bindMainButtons() {
  DOM.generateButton?.addEventListener("click", generatePrompt);

  DOM.generateSunoButton?.addEventListener("click", () => {
    const inputData = collectInputData();
    const sunoPrompt = generateSunoPrompt(inputData);

    safeSetValue(DOM.premiumOutputs.suno, sunoPrompt);

    DOM.premiumOutputs.suno?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    showToast("Suno prompt generated.", "success");
  });

  DOM.generateCustomGptButton?.addEventListener("click", () => {
    const inputData = collectInputData();
    const gptData = collectCustomGptBuilderData();

    if (!cleanText(gptData.gptName)) {
      showToast("Enter a Custom GPT name first.", "error", 4000);

      DOM.customGptBuilder.gptName?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    const customGptPrompt = generateCustomGptPrompt(inputData);

    safeSetValue(DOM.premiumOutputs.customGpt, customGptPrompt);

    DOM.premiumOutputs.customGpt?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    showToast("Custom GPT instructions generated.", "success");
  });

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

  DOM.copyFinalPromptButton?.addEventListener("click", copyFinalPrompt);

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
    DOM.historyContainer,
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
    handleApplicationError(error, "Application failed to initialize.");
  }
}

/* ==========================================================
   START APPLICATION
========================================================== */

document.addEventListener("DOMContentLoaded", initializeApplication);
