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
    id: "gabs",
    src: ["Gabriel_Gabby_Couple_Shoot-51_wmt0tg"],
    title: "Gabriel & Gabby engagement",
    align: ["start", "end"],
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
    id: "fullaship",
    src: [
      "barreno-studio/Fullaship/one",
      "barreno-studio/Fullaship/two",
      "barreno-studio/Fullaship/three",
      "barreno-studio/Fullaship/four",
    ],
    client: "Fullaship",
    title: "Scholarship",
    description: ["text"],
    align: ["end", "start"],
    w: 480,
    h: 325,
  },
  {
    id: "fiesta-del-sol",
    src: [
      "barreno-studio/Fiesta Del Sol/one",
      "barreno-studio/Fiesta Del Sol/two",
      "barreno-studio/Fiesta Del Sol/three",
      "barreno-studio/Fiesta Del Sol/mariachi1",
      "barreno-studio/Fiesta Del Sol/mariachi2",
    ],
    client: "Fiesta Del Sol",
    title: "Fiesta",
    description: ["text"],
    align: ["end", "start"],
    w: 480,
    h: 325,
  },
  {
    id: "amazing-race",
    src: [
      "barreno-studio/Amazing Race/one",
      "barreno-studio/Amazing Race/two",
      "barreno-studio/Amazing Race/three",
      "barreno-studio/Amazing Race/four",
    ],
    client: "Amazing Race",
    title: "Race",
    description: ["text"],
    align: ["end", "start"],
    w: 480,
    h: 325,
  },
  {
    id: "music-victoria-awards",
    src: [
      "barreno-studio/MusicVictoriaAwards/one",
      "barreno-studio/MusicVictoriaAwards/two",
      "barreno-studio/MusicVictoriaAwards/three",
      "barreno-studio/MusicVictoriaAwards/award1",
      "barreno-studio/MusicVictoriaAwards/award2",
      "barreno-studio/MusicVictoriaAwards/award3",
      "barreno-studio/MusicVictoriaAwards/group1",
      "barreno-studio/MusicVictoriaAwards/group2",
    ],
    client: "Music Victoria Awards",
    title: "Awards",
    description: ["text"],
    align: ["end", "start"],
    w: 480,
    h: 325,
  },
  {
    id: "moon-festival",
    src: [
      "barreno-studio/MidAutumnMoonFestival/one",
      "barreno-studio/MidAutumnMoonFestival/two",
      "barreno-studio/MidAutumnMoonFestival/three",
    ],
    client: "Mid-Autmn Moon Festival",
    title: "Festival",
    description: ["text"],
    align: ["end", "start"],
    w: 480,
    h: 325,
  },
];
