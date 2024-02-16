import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { CircularProgressWithLabel } from "./ui/CircularProgress";
import { MainCard, StatsCard } from "./ui/StatsCard";
import { GoFlame } from "react-icons/go";

const StatsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  /* align-items: center; */
  height: 100%;
  flex-wrap: wrap;

  .progress-wrapper {
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  circle {
    stroke: #feba58;
  }

  .score {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    @media (max-width: 266px) {
      width: 100%;
    }
  }

  .current-stats {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    max-width: 100px;

    @media (max-width: 400px) {
      max-width: 100%;
    }
  }
`;

export const Stats = () => {
  return (
    <StatsWrapper>
      <div className='progress-wrapper'>
        <CircularProgressWithLabel value={75} size={100} />
      </div>
      <div className='score'>
        <h3>Your Score</h3>
        <MainCard>
          <h2>
            342{" "}
            <span>
              <GoFlame />
            </span>
          </h2>
          <p>Left out of 100</p>
        </MainCard>
      </div>
      <div className='current-stats'>
        <StatsCard>
          <h2>
            +1450{" "}
            <span>
              <GoFlame />
            </span>
          </h2>
          <p>Taken</p>
        </StatsCard>
        <StatsCard>
          <h2>
            -698{" "}
            <span>
              <GoFlame />
            </span>
          </h2>
          <p>Burned</p>
        </StatsCard>
      </div>
    </StatsWrapper>
  );
};
