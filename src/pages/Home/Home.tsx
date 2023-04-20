import { useEffect, useState } from "react";
import {
  Layout,
  GameCard,
  Text,
  InputFormWrapper,
  Button,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllGames, Igame } from "../../store/gameSlice";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useFormik } from "formik";

export const Home: React.FC = () => {
  const Dispatch = useAppDispatch();

  const Formik = useFormik({
    initialValues: {
      gameName: "",
    },
    onSubmit: (value) => {
      const gameName = value.gameName as string;
      Dispatch(
        getAllGames({
          gameName,
          currentPage: 1,
        })
      );
    },
  });

  const { isLoading, games, isError, totalPages } = useAppSelector(
    (state) => state.gamesReducer
  );

  const [currentPage, setcurrentPage] = useState<number>(1);

  const handlePageChange = (selectedObject: { selected: number }) => {
    setcurrentPage(selectedObject.selected + 1);
  };

  useEffect(() => {
    Dispatch(getAllGames({ gameName: Formik.values.gameName, currentPage }));
  }, [currentPage]);

  if (isError) {
    return (
      <Layout>
        <TitleContainer>
          <Text textType="subtitle">
            Ups..something happend,please try again later
          </Text>
        </TitleContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledHome>
        <TitleContainer>
          <Text textType="title">Search your game</Text>
        </TitleContainer>
        <FormContainer>
          <InputFormWrapper
            name={"gameName"}
            id={"gameName"}
            onChange={Formik.handleChange}
            value={Formik.values.gameName}
          />
          <Button onClick={Formik.handleSubmit} bSize="sm">
            Search
          </Button>
        </FormContainer>
        {isLoading ? (
          <TitleContainer>
            <Text textType="subtitle">Loading...</Text>
          </TitleContainer>
        ) : (
          <GamesContainer>
            {games?.map((game: Igame) => {
              return <GameCard key={game.id} {...game} />;
            })}
          </GamesContainer>
        )}
        <PaginatorContainer>
          {games && (
            <ReactPaginate
              pageCount={totalPages as number}
              pageRangeDisplayed={totalPages as number}
              marginPagesDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={"container"}
              previousLinkClassName={"page"}
              breakClassName={"page"}
              nextLinkClassName={"page"}
              pageClassName={"page"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
          )}
        </PaginatorContainer>
      </StyledHome>
    </Layout>
  );
};

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
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
`;

const GamesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xlg};
  min-height: 650px;
`;

const PaginatorContainer = styled.div`
  margin-top: 30px;
  .container {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;

    a {
      color: #dcdcdc;
      padding: 10px;
    }
  }

  .page {
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
  }

  .disabled {
    cursor: not-allowed;
  }

  .active {
    border: 2px solid #dcdcdc;
    font-weight: bold;
  }

  .previous {
    padding: 10px;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    width: 80px;
  }

  .break {
    padding: 10px;
    border-radius: 6px;
  }

  .next {
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xlg};
  justify-content: center;
  width: 100%;
`;
