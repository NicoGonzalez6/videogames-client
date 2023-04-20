import React from "react";

import styled from "styled-components";
import { Text } from "../Text";
import { Link } from "react-router-dom";
import { IgameCard } from "./interface";

export const GameCard: React.FC<IgameCard> = ({
  critics_score,
  image_url,
  name,
  release_date,
  description,
  id,
  users_score,
  withDescription,
  type,
}) => {
  return (
    <StyledGameCard>
      <Link to={`/${id}`}>
        <div className="img-container">
          <img src={image_url} alt={`image cover for the game ${name}`} />
        </div>
        <div className="info-container">
          <Text textType="subtitle">{`${name.slice(0, 25)}...`}</Text>
          <div className="score-container">
            <div className="detail">
              <Text textType="subtitle">{users_score}</Text>
              <Text textType="text">users score</Text>
            </div>
            <div className="detail">
              <Text textType="subtitle">{critics_score}</Text>
              <Text textType="text">critics score</Text>
            </div>
          </div>
          <Text textType="subtitle">{`Release Date: ${release_date}`}</Text>
        </div>
        <div className="description">
          {withDescription && (
            <Text textType="subtitle">{`genre: ${type}`}</Text>
          )}
        </div>
        <div className="description">
          {withDescription && <Text textType="subtitle">{description}</Text>}
        </div>
      </Link>
    </StyledGameCard>
  );
};

const StyledGameCard = styled.div`
  a {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radiusses.md};
    padding: ${({ theme }) => theme.spacing.md};
    box-sizing: border-box;
    height: auto;
    display: flex;
    gap: ${({ theme }) => theme.spacing.xlg};
    flex-direction: column;
    cursor: pointer;
    padding-bottom: 20px;
    width: 240px;

    .img-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      img {
        display: block;
        border-radius: ${({ theme }) => theme.radiusses.md};
        width: 110px;
        height: 130px;
      }
    }

    .info-container {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.xlg};
      align-items: center;
      width: 100%;

      .score-container {
        display: flex;
        width: 100%;
        gap: ${({ theme }) => theme.spacing.lg};
        justify-content: space-evenly;

        .detail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .description {
      text-align: center;
    }
  }
`;
