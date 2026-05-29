// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.quirinalechmann.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.quirinalechmann.com/","title_tag":"Coloratura Soprano Opera Performances | Quirina Lechmann","meta_description":"Swiss-Belgian coloratura soprano for classical and contemporary opera, musical dramas and vocal performances in Graubünden, Switzerland and internationally."},{"page_url":"https://www.quirinalechmann.com/recordings","title_tag":"Vocal Performances & Recordings | Quirina Lechmann","meta_description":"Discover opera and vocal performances by coloratura soprano Quirina Lechmann, including classical and contemporary recordings from concerts and video art projects."},{"page_url":"https://www.quirinalechmann.com/concerts","title_tag":"Opera Performances & Musical Dramas | Quirina Lechmann","meta_description":"Explore upcoming and ongoing opera performances, musical dramas and vocal performances by coloratura soprano and performance artist Quirina Lechmann."},{"page_url":"https://www.quirinalechmann.com/copy-of-art-performance","title_tag":"Original Musical Dramas & Opera | Quirina Lechmann","meta_description":"Original projects by coloratura soprano Quirina Lechmann: musical dramas, contemporary opera pieces and vocal performances blending theatre, art and music."},{"page_url":"https://www.quirinalechmann.com/copy-of-past-performances","title_tag":"Art & Performance and Video Art | Quirina Lechmann","meta_description":"Art & Performance projects by Quirina Lechmann combining vocal performance, video art and contemporary opera within exhibitions and interdisciplinary works."},{"page_url":"https://www.quirinalechmann.com/photos-fledermaus","title_tag":"Opera & Theatre Coloratura Soprano | Quirina Lechmann","meta_description":"Opera and theatre roles of coloratura soprano Quirina Lechmann in classical and contemporary opera productions across Europe and internationally."},{"page_url":"https://www.quirinalechmann.com/copy-of-performances","title_tag":"Past Opera Performances | Quirina Lechmann Soprano","meta_description":"Archive of past opera performances, musical dramas and art performances by Swiss coloratura soprano and performance artist Quirina Lechmann."},{"page_url":"https://www.quirinalechmann.com/biography","title_tag":"Coloratura Soprano Biography | Quirina Lechmann","meta_description":"Biography of Swiss-Belgian coloratura soprano and performance artist Quirina Lechmann, active in classical and contemporary opera, art and performance."},{"page_url":"https://www.quirinalechmann.com/repertoire","title_tag":"Classical & Contemporary Opera Repertoire | Quirina","meta_description":"Extensive opera repertoire of coloratura soprano Quirina Lechmann: classical and contemporary opera roles and arias for concerts and staged performances."}],"keywords":["quirina lechmann","coloratura soprano","opera performances","musical dramas","classical opera","contemporary opera","art & performance","vocal performances","video art"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.quirinalechmann.com/#person",
  "name": "Quirina Lechmann",
  "url": "https://www.quirinalechmann.com/",
  "image": "https://static.wixstatic.com/media/419d01_bf74d29873694364ba0bafb337dce9af~mv2_d_2082_1912_s_2.jpg/v1/fill/w_2500,h_2295,al_c/419d01_bf74d29873694364ba0bafb337dce9af~mv2_d_2082_1912_s_2.jpg",
  "description": "Swiss-Belgian operatic coloratura soprano and performance artist who performs on opera and theatre stages and creates original musical dramas and art performances, active in Graubünden, Switzerland and internationally.",
  "jobTitle": "Coloratura Soprano, Performance Artist",
  "nationality": [
    "Swiss",
    "Belgian"
  ],
  "sameAs": [
    "https://www.instagram.com",
    "https://www.facebook.com",
    "https://www.youtube.com"
  ],
  "knowsLanguage": [
    "German",
    "English",
    "Dutch",
    "Romansh"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Opera Singer",
    "description": "Professional operatic soprano specializing in coloratura repertoire, opera roles, and contemporary performance art projects."
  },
  "award": [
    "First Prize, Professional Category of Opera Singing, 11th International Competition: Slavic Music Festival Belgrade 2025",
    "Won a Prize from Canton Graubünden for \"Musik-Pick-Nick\""
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "University of Antwerp"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Royal Conservatory of Antwerp"
    }
  ],
  "hasPart": [
    {
      "@type": "CreativeWork",
      "@id": "https://www.quirinalechmann.com/#recording-miu-mozart",
      "name": "Miu Mozart",
      "alternateName": "MIU MOZART",
      "description": "CD recording of German Mozart arias translated into Romansch, released at the 100-year anniversary of the Lia Rumantscha in Zuoz, August 11, 2019.",
      "inLanguage": [
        "German",
        "Romansh"
      ],
      "datePublished": "2019-08-11"
    }
  ],
  "event": [
    {
      "@type": "Event",
      "@id": "https://www.quirinalechmann.com/#event-wat-dingen-doen-2025-05",
      "name": "wat dingen doen",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Exhibition participation and performances as part of Antwerp Art Weekend, OFF Programme.",
      "location": {
        "@type": "Place",
        "name": "Scala Trun",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Antwerp",
          "addressCountry": "Belgium"
        }
      },
      "startDate": "2025-05-14",
      "endDate": "2025-05-17",
      "performer": {
        "@id": "https://www.quirinalechmann.com/#person"
      }
    },
    {
      "@type": "Event",
      "@id": "https://www.quirinalechmann.com/#event-zum-gyrigen-bade-2025-06-13",
      "name": "zum gyrigen Bade – Gala Concert with Dinner",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Gala concert with dinner featuring soprano and harp.",
      "startDate": "2025-06-13T18:00:00",
      "location": {
        "@type": "Place",
        "name": "Gasthof Gyrenbad",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "ob Turbenthal",
          "addressCountry": "Switzerland"
        }
      },
      "performer": [
        {
          "@id": "https://www.quirinalechmann.com/#person"
        },
        {
          "@type": "Person",
          "name": "Julia Steinhauser"
        }
      ]
    },
    {
      "@type": "Event",
      "@id": "https://www.quirinalechmann.com/#event-die-unschuld-vom-lande-2025-06-14",
      "name": "die Unschuld vom Lande – Concert with Harp",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Concert for soprano and harp.",
      "startDate": "2025-06-14",
      "location": {
        "@type": "Place",
        "name": "Aula Schulhaus Zillis",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Zillis",
          "addressCountry": "Switzerland"
        }
      },
      "performer": [
        {
          "@id": "https://www.quirinalechmann.com/#person"
        },
        {
          "@type": "Person",
          "name": "Julia Steinhauser"
        }
      ]
    },
    {
      "@type": "Event",
      "@id": "https://www.quirinalechmann.com/#event-la-boheme-glasgow-2025-07-31",
      "name": "Puccini: La Bohème – Role of Musetta",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Opera production of Puccini's La Bohème with Clyde Opera Group in Glasgow, Scotland.",
      "startDate": "2025-07-31",
      "endDate": "2025-08-02",
      "location": {
        "@type": "Place",
        "name": "Clyde Opera Group",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Glasgow",
          "addressRegion": "Scotland",
          "addressCountry": "United Kingdom"
        }
      },
      "performer": {
        "@id": "https://www.quirinalechmann.com/#person"
      }
    },
    {
      "@type": "Event",
      "@id": "https://www.quirinalechmann.com/#event-schon-ist-die-welt-2025-08-15",
      "name": "Lehár: Schön ist die Welt (Operetta)",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Operetta performances of Lehár's Schön ist die Welt with Bocca Classica Chorus and orchestra.",
      "startDate": "2025-08-15",
      "endDate": "2025-08-16",
      "location": {
        "@type": "Place",
        "name": "Schön ist die Welt (venue details as per production information)",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Switzerland"
        }
      },
      "performer": [
        {
          "@id": "https://www.quirinalechmann.com/#person"
        },
        {
          "@type": "MusicGroup",
          "name": "Bocca Classica Chorus"
        }
      ]
    }
  ],
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Quirina Lechmann gave a fine performance of Der Hölle Rache, from Mozart's Magic Flute. [She] navigated the runs, jumps, and tippy-top notes well with sparkling coloratura. [...] The [Vincerò Academy] artists sang splendidly and have much to be proud of in their CARNEGIE HALL debuts.",
      "author": {
        "@type": "Person",
        "name": "Chris Ruel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "operawire.com"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Congratulations on your wonderful coloraturas and perfect high Fs.",
      "author": {
        "@type": "Person",
        "name": "Guest after Carnegie Hall Concert, Jan 19th, 2023"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Wir haben uns köstlich amüsiert beim gestrigen Anlass: mit stimmigen Rollen, fätzig und nicht zu lange, toll arrangiert punkto Bühne und Bekleidung, in amüsanter Anlehnung ans «Dinner-Drehbuch», doch ganz eigeständig, mit besten Stimmen und Stimmung…",
      "author": {
        "@type": "Person",
        "name": "P. Metz"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Es war ein Erlebnis und Überraschung an einem speziellen Tag und Zeit, die noch lange Nachklinken... Herzliche Gratulation!",
      "author": {
        "@type": "Person",
        "name": "E. Ribi"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Whow! Love how the high notes pop and shimmer AND how the lower notes resonate and resound.",
      "author": {
        "@type": "Person",
        "name": "Fiona Flyte"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "One of the highest, purest soprano voices ever.",
      "author": {
        "@type": "Person",
        "name": "Mike Mellor"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Es war uns eine Freude, diesen seltenen und schönen Moment erleben zu dürfen und so eine hohe Kunst zu geniessen, das mit den Kostümen und dem Outfit ist auch herzig, ihr seid einfach toll!",
      "author": {
        "@type": "Person",
        "name": "Elmar Peretti"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
