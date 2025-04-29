export type ProjectType = {
  id: string; // Unique identifier for the project
  src: string[]; // Source URL for the image or video
  client?: string; // Client for the project
  title?: string; // Title of the project
  description?: string[]; // Description of the project
  align: [string, string]; // Alignment for text (e.g., ["start", "end"])
  w: number; // Width of the media
  h: number; // Height of the media
};

export const allProjects: ProjectType[] = [
  {
    id: "unimelb-mental-health",
    src: [
      "World_Mental_Health_Day-352_jwhae6",
      "barreno-studio/WelcomeToHealthSciencesEvent-222",
      "OrientationWeekDay1-1_h0zlcn",
    ],
    client: "University of Melbourne",
    title: "Mental Health Day",
    description: [
      "Melbourne University marks World Mental Health Day with workshops, panel talks, and activities, promoting awareness, resilience, and well-being while fostering a supportive campus community.",
      "THE CREATIVES",
      "Joshua Barreno, Kenny Kha Tran",
      "CHALLENGE",
      "THE FUN STUFF",
    ],
    align: ["end", "start"],
    w: 480,
    h: 600,
  },
  {
    id: "unimelb-oweek",
    src: ["OrientationWeekDay1-1_h0zlcn"],
    title: "Orientation Week",
    align: ["end", "end"],
    w: 480,
    h: 325,
  },
  {
    id: "ysl",
    src: [
      "https://res.cloudinary.com/dobclogz9/video/upload/q_auto/c_fill,g_auto,h_600,w_480/v1743490368/Monique_x_YSL_Beauty_ffpc7o.webm",
    ],
    title: "YSL Beauty",
    align: ["start", "end"],
    w: 480,
    h: 600,
  },
  {
    id: "uniqlo",
    src: [
      "https://res.cloudinary.com/dobclogz9/video/upload/c_limit,h_480,w_600/uniqlo__lifewear_for_all_seasons_2160p_o5jcf9",
    ],
    title: "uniqlo",
    align: ["end", "end"],
    w: 600,
    h: 480,
  },
  {
    id: "gabs",
    src: ["Gabriel_Gabby_Couple_Shoot-51_wmt0tg"],
    title: "Gabriel & Gabby engagement",
    align: ["start", "end"],
    w: 480,
    h: 325,
  },
];
