import Timeline from "../components/Home/Timeline";

const DATA = [
  {
    header: "December 2020",
    posts: [
      {
        title: "Top of the timeline",
        date: "December 26th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur impedit reprehenderit dicta suscipit sit beatae
        repellendus, exercitationem, adipisci quo nulla atque mollitia.
        Quas cum obcaecati quos quisquam magnam et eligendi.`,
        link: "blog/dead-link",
        show: true,
      },
      {
        title: "Second in the timeline",
        date: "December 16th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quas cum obcaecati quos quisquam magnam et eligendi.`,
        link: "blog/dead-link",
        show: true,
      },
      {
        title: "Third in the timeline",
        date: "December 6th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur impedit reprehenderit dicta suscipit sit beatae
        repellendus, exercitationem, adipisci quo nulla atque mollitia.
        Quas cum obcaecati quos quisquam magnam et eligendi. Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet 
        consectetur adipisicing elit.`,
        link: "blog/dead-link",
        show: true,
      },
    ],
  },
  {
    header: "November 2020",
    posts: [
      {
        title: "Top of the November",
        date: "November 26th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur impedit reprehenderit dicta suscipit sit beatae
        repellendus, exercitationem, adipisci quo nulla atque mollitia.
        Quas cum obcaecati quos quisquam magnam et eligendi.`,
        link: "blog/dead-link",
        show: true,
      },
      {
        title: "Second in the timeline",
        date: "November 16th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quas cum obcaecati quos quisquam magnam et eligendi.`,
        link: "blog/dead-link",
        show: true,
      },
      {
        title: "Third in the timeline",
        date: "November 6th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur impedit reprehenderit dicta suscipit sit beatae
        repellendus, exercitationem, adipisci quo nulla atque mollitia.
        Quas cum obcaecati quos quisquam magnam et eligendi. Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet 
        consectetur adipisicing elit.`,
        link: "blog/dead-link",
        show: true,
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <h1>Timeline-Demo</h1>
      <Timeline timeline={DATA[0]} />
      <Timeline timeline={DATA[1]} />
    </main>
  );
}
