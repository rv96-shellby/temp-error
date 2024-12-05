export const BASE_URL = "https://api.themoviedb.org/3";
export const API_URL = `${BASE_URL}/movie`;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";
export const SMALL_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.REACT_APP_TMDB_AUTH_KEY}`,
  },
};

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT980E7afJBlYZzvyMECBb6z3BkkG0XqY_oXyYfxim5c7pcrWM0lRzT-cKIImpMzTOhbBGslrEIb7ORMvOpHdkWMU4109Eo.png?r=2c8";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const global = {
  en: {
    searchPlaceholder: "What would you like to watch today?",
    search: "Search",
  },
};
