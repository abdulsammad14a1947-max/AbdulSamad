export type Agent = {
  slug: string;
  name: string;
  image: string;
};

export const agents: Agent[] = [
  { slug: "capybara", name: "Capybara", image: "/images/agents/agent-capybara.jpg" },
  { slug: "cow", name: "Cow", image: "/images/agents/agent-cow.jpg" },
  { slug: "tiger", name: "Tiger", image: "/images/agents/agent-tiger.jpg" },
  { slug: "peace-bear", name: "Peace Bear", image: "/images/agents/agent-bear-peace.jpg" },
  { slug: "backpack-bear", name: "Backpack Bear", image: "/images/agents/agent-bear-backpack.jpg" },
  { slug: "blue-cap-bear", name: "Blue Cap Bear", image: "/images/agents/agent-bear-blue-cap.jpg" },
  { slug: "cloud-bear", name: "Cloud Bear", image: "/images/agents/agent-cloud-bear.jpg" },
];
