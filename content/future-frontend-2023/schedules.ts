import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0
const tuesday: Schedule = {
  day: "2023-06-06",
  description: "Tuesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "Register and enjoy breakfast on our behalf before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.samuel],
          title: "Cloudflare Workers from zero to hero",
          description: `Always wanted to try out Cloudflare Workers, but haven't known where to start? Maybe you've tried out Workers once or twice, but aren't sure how to fit all the parts together for a production-ready application? Maybe you're completely new to the idea of running code on the edge, but you want to find out more? This is the workshop for you!

You'll be shown how to build a simple application on Cloudflare Workers, Cloudflare's platform for running your code on the edge, all the way from idea to deployed project. You'll learn:

- How to bootstrap and configure a new project with Wrangler, Cloudflare's CLI tool for Workers.
- Debugging and troubleshooting methods via developer tools, analytics, and integration with Sentry.
- How to use Wrangler to develop your project locally, before deploying to the Cloudflare developer platform.`,
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "We have Finnish food in store for people attending the workshop.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const wednesday: Schedule = {
  day: "2023-06-07",
  description: "Wednesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "Register and enjoy breakfast on our behalf before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.kenWheeler],
          title: "Beats with Ken",
          description: `This full-day workshop is for current or aspiring musicians, or people who are interested in synthesis in general. After the workshop, you will understand the fundamentals of synthesis, web audio basics, and some of the newest modern web Audio features. Expect to learn about the Web Audio API, Audio Worklets, Synthesis, Music Theory, Audio focused UI and visualization, and sequencing and composition.`,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.misko],
          title: "Building Fast WebApps with QwikCity",
          description: `Building instant-on web applications at scale have been elusive. Real-world sites need tracking, analytics, and complex user interfaces and interactions. We always start with the best intentions but end up with a less-than-ideal site.

QwikCity is a new meta-framework that allows you to build large-scale applications with constant startup-up performance. We will look at how to build a QwikCity application and what makes it unique. The workshop will show you how to set up a QwikCitp project. How routing works with layout. The demo application will fetch data and present it to the user in an editable form. And finally, how one can use authentication. All of the basic parts for any large-scale applications.

Along the way, we will also look at what makes Qwik unique, and how resumability enables constant startup performance no matter the application complexity.`,
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "We have Finnish food in store for people attending the workshop.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const thursday: Schedule = {
  day: "2023-06-08",
  description: "Thursday – conference",
  location: locations.porssitalo,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
          description: `You can register later too.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Opening",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.misko],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Solid.js",
          description: ``,
          people: [people.ryan],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "Static site generation",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Capri",
          description: ``,
          people: [people.felix],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Astro",
          description: ``,
          people: [people.matthew],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Universal design systems",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Creating universal design systems across web and mobile with Utility First Styling",
          description: ``,
          people: [people.mo],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Establishing the rules for a universal design system",
          description: ``,
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "Sound",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.kenWheeler],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.teroParviainen],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:10",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "",
        },
      ],
    },
  ],
};

const friday: Schedule = {
  day: "2023-06-09",
  description: "Friday – conference",
  location: locations.porssitalo,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
          description: `You can register later too.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Green computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.satu],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.janne],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "Edge computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The story of jsDelivr",
          description: `The story of how jsDelivr came to be and what was learned during the process.`,
          people: [people.dmitriy],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Everything's better with friends",
          description:
            "Software is best when shared; with friends and colleagues, in realtime, across the world. It's traditionally been hard and expensive to do this, but with the advent of edge computing and advances in CRDTs and the like, building multiplayer applications is now accessible to mere mortals like myself. In this talk, I'll share some of the work I've been doing in the space, and we'll have a demo to play with and break!",
          people: [people.sunil],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Security",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Moving application auth to the edge",
          description: `Secure your application by handling auth at the edge - before a user hits your application. This would be primarily about building out a login/signup flow that happens at the edge, before a request reaches your app - which would only see user profile information for the currently logged in user.`,
          people: [people.samuel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.liran],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "Demonstrations",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "No code demonstration",
          description: ``,
          people: [people.misko],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.charlie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:10",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "",
        },
      ],
    },
    {
      begin: "15:00",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Afterparty",
          description: "Epic afterparty at a location to be decided.",
        },
      ],
      // location: locations.babylonHelsinki,
    },
  ],
};

export default [tuesday, wednesday, thursday, friday];