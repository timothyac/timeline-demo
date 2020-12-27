import Link from "next/link";
import styled from "styled-components";

const TimelineStyled = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 48px;
  padding: 0 24px;
`;

const TimelineHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  h3 {
    white-space: nowrap;
  }

  .line {
    margin-left: 8px;
    height: 1px;
    width: 100%;
    background-color: #000;
  }
`;

const TimelineItemStyled = styled.div`
  display: flex;
  /* margin-bottom: 18px; */

  .marker {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      min-height: 12px;
      width: 12px;
      border-radius: 12px;
      background-color: #333;
    }

    .line {
      width: 1px;
      height: 100%;
      background-color: #000;

      &:first-child {
        height: 8px;
      }
    }
  }

  .content {
    margin-left: 16px;
    margin-bottom: 18px;

    h3 {
      margin-bottom: 4px;
    }

    span {
      display: block;
      margin-bottom: 4px;
      color: #444;
    }

    p {
      color: #777;
      margin-bottom: 6px;
    }

    a {
      color: #2f70e9;
      transition: color 0.2s ease;

      &:hover {
        color: #4b2fe9;
      }
    }
  }
`;

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
        date: "December 26th, 2020",
        preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quas cum obcaecati quos quisquam magnam et eligendi.`,
        link: "blog/dead-link",
        show: true,
      },
      {
        title: "Third in the timeline",
        date: "December 26th, 2020",
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

function TimelineHeader(props) {
  const { header } = props;

  return (
    <TimelineHeaderStyled>
      <h3>{header}</h3>
      <div className="line" />
    </TimelineHeaderStyled>
  );
}

function TimelineItem(props) {
  const { title, date, preview } = props;

  return (
    <TimelineItemStyled>
      <div className="marker">
        <div className="line" />
        <div className="icon" />
        <div className="line" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{preview}</p>
        <Link href={props.link}>Read More →</Link>
      </div>
    </TimelineItemStyled>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Timeline-Demo</h1>
      <TimelineStyled>
        <TimelineHeader header={DATA[0].header} />
        {DATA[0].posts.map((post) => post.show && <TimelineItem {...post} />)}
      </TimelineStyled>
    </main>
  );
}
