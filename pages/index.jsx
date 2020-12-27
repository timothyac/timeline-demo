import styled from "styled-components";

const TimelineStyled = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 48px;
`;

const TimelineItemStyled = styled.div`
  display: flex;
  margin-bottom: 24px;

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
      margin-bottom: -24px;
    }
  }

  .content {
    margin-left: 16px;
  }
`;

export default function Home() {
  return (
    <div>
      <main>
        <h1>Timeline-Demo</h1>
        <TimelineStyled>
          <TimelineItemStyled>
            <div className="marker">
              <div className="icon" />
              <div className="line" />
            </div>
            <div className="content">
              <h3>Top of the timeline</h3>
              <span>December 26th, 2020</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur impedit reprehenderit dicta suscipit sit beatae
                repellendus, exercitationem, adipisci quo nulla atque mollitia.
                Quas cum obcaecati quos quisquam magnam et eligendi.
              </p>
            </div>
          </TimelineItemStyled>
          <TimelineItemStyled>
            <div className="marker">
              <div className="icon" />
              <div className="line" />
            </div>
            <div className="content">
              <h3>Second in the timeline</h3>
              <span>December 24th, 2020</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                libero porro debitis. Pariatur illo sunt nobis provident rerum
              </p>
            </div>
          </TimelineItemStyled>
        </TimelineStyled>
      </main>
    </div>
  );
}
