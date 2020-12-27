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
  margin-bottom: 18px;

  .marker {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      min-height: 30px;
      width: 30px;
      border-radius: 30px;
      background-color: #333;
    }

    .line {
      width: 1px;
      height: 100%;
      background-color: #000;
      margin-bottom: -18px;
    }
  }

  .content {
    margin-left: 16px;

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
    title: "Top of the timeline",
    date: "December 26th, 2020",
    preview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Consectetur impedit reprehenderit dicta suscipit sit beatae
    repellendus, exercitationem, adipisci quo nulla atque mollitia.
    Quas cum obcaecati quos quisquam magnam et eligendi.`,
    icon: "pencil",
    link: "blog/dead-link",
  },
];

function TimelineItem(props) {
  const { title, date, preview } = props;

  return (
    <TimelineItemStyled>
      <div className="marker">
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
    <div>
      <main>
        <h1>Timeline-Demo</h1>
        <TimelineStyled>
          <TimelineHeaderStyled>
            <h3>December 2020</h3>
            <div className="line" />
          </TimelineHeaderStyled>
          <TimelineItem {...DATA[0]} />
        </TimelineStyled>
      </main>
    </div>
  );
}
