/* ============================================================
   EDIT THIS FILE TO CHANGE ANYTHING ABOUT THE SITE.
   Nothing else needs to change — index.html just reads this.
   Keep the quotes and commas exactly as they are; only change
   the text between the quotes.
   ============================================================ */

const SITE = {

  name: "Priyanshu Kumar",
  nickname: "I prefer Krishna",
  status: "currently: chasing a K1-theory derivation",

  // path to your photo, relative to index.html. leave as "" for
  // the letter-monogram placeholder instead of a photo.
  photo: "pfp.jpg",
  monogram: "V",

  lede: "number theory, mostly. also whatever JEE throws at me this week.",

  pills: [
    "number theory",
    "elliptic integrals",
    "Ramanujan-type series",
    "JEE 2028"
  ],

  // each string becomes its own paragraph, in order
  bio: [
    "Most days look like: physics problem set, a wrong turn somewhere in an integral, tea, try again. Some nights look like: still awake, still on the same page of a 1914 paper, refusing to move on until the step actually makes sense instead of just looking plausible.",
    "That second kind of night is how the Ramanujan thing happened. I wasn't trying to publish anything — I just wanted to know why his formulas worked, not just that they did. Turned out nobody had fully written that \"why\" down in one place. So I did, then kept going until I found something nobody had written down at all.",
    "I write most of this up properly, because half the point is that someone else should be able to check it."
  ],

  featured: {
    title: "Reconstructing and Extending Ramanujan's 1914 Series for 1/π",
    description: "Every missing step in Ramanujan's Equation 3, proved from scratch. Then five series for 1/π that weren't in his published work at all — found in an unfinished table in his notebooks, checked to 40+ decimal digits so nobody has to take my word for it.",
    meta: "Zenodo preprint · 2026",
    doiLabel: "doi.org/10.5281/zenodo.22715269",
    doiUrl: "https://doi.org/10.5281/zenodo.22715269"
  },

  // "icon" must be one of: doi, orcid, github, x, reddit
  // (see ICONS in content.js below — add a new one there if you need a new platform)
  links: [
    { icon: "doi",    label: "Research (DOI)", url: "https://doi.org/10.5281/zenodo.22715269" },
    { icon: "orcid",  label: "ORCID",          url: "https://orcid.org/0009-0000-9941-3267" },
    { icon: "github", label: "GitHub",         url: "https://github.com/krvats" },
    { icon: "x",      label: "X",              url: "https://x.com/kr5na_" },
    { icon: "reddit", label: "Reddit",         url: "https://reddit.com/user/kr5na" }
  ],

  location: "India"
};

/* ------------------------------------------------------------
   Icon shapes. You won't usually need to touch this — it's here
   so "links" above can just say icon: "github" etc. Add a new
   entry here only if you want a platform that isn't listed yet.
   ------------------------------------------------------------ */
const ICONS = {
  doi:    '<path d="M6 2.5h9l4 4v15H6z"/><path d="M15 2.5v4h4"/><path d="M9 13.5h7M9 17h7M9 10h3"/>',
  orcid:  '<circle cx="12" cy="12" r="9.5"/><circle cx="9.2" cy="8.6" r="0.9" fill="currentColor" stroke="none"/><path d="M9.2 11v6.2M13 11v3.6c0 1.6 1.2 2.6 2.6 2.6S18 16.2 18 14.6 16.8 11 15.4 11H13z"/>',
  github: '<path d="M8 4L3 12l5 8M16 4l5 8-5 8M13.5 3l-3 18"/>',
  x:      '<path d="M4 4l16 16M20 4L4 20"/>',
  reddit: '<rect x="3.5" y="6.5" width="17" height="13" rx="4"/><path d="M8.5 13.5v.5a3.5 3.2 0 0 0 7 0v-.5M8.7 11.2h.01M15.3 11.2h.01"/>'
};
