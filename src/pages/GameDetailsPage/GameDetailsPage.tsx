import styled from "styled-components";
import { useEffect } from "react";
import { Layout, GameCard, Text, Button } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleGame } from "../../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../../store";

export const GameDetailsPage: React.FC = () => {
  const { id } = useParams();

  const Dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isLoading, game } = useAppSelector((state) => state.gamesReducer);

  useEffect(() => {
    Dispatch(getSingleGame(id as string));
  }, []);

  if (isLoading || !game) {
    return (
      <TitleContainer>
        <Text textType="title">loading...</Text>
      </TitleContainer>
    );
  }

  const returnToMainPageHandler = () => {
    return navigate("/");
  };

  return (
    <Layout>
      <StyledHome>
        <TitleContainer>
          <Text textType="title">{game.name}</Text>
        </TitleContainer>

        <GameCard {...game} withDescription />
        <Button onClick={returnToMainPageHandler}>Back to the main page</Button>
      </StyledHome>
    </Layout>
  );
};

const StyledHome = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xlg};
  overflow: hidden;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  flex-direction: column;
`;
