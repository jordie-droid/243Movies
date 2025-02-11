import { useParams } from "react-router";
import SectionView from "../components/SectionView";
import { useMovieDetails, useView } from "../hooks/personalHooks";
import NoImage from "../images/NoImage.png";
import MovieCard from "../components/MovieCard";
import {
  AboutMovie,
  Card,
  CardBody,
  MainContainer,
  MovieActors,
  MoviePoster,
  Overview,
  PlayVideo,
  PlayVideoContainer,
} from "../components/styles/MovieViewMore.style";
import SectionViewSkeleton from "../components/SectionViewSkeleton";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const MovieViewMore = ({ imageUrl }) => {
  const [show, setShowModal] = useState(false);

  const { id: movieID } = useParams();
  const [movieDetail, movieCredit, similarMovies, recommendation, trailerKey] =
    useMovieDetails(movieID);

  let detailResults = [],
    creditResults = [],
    similarMoviesResults = [],
    recommendationResults = [];

  if (movieDetail) {
    detailResults = movieDetail;
  }

  if (movieCredit) {
    creditResults = movieCredit.cast;
  }

  if (similarMovies) {
    similarMoviesResults = similarMovies.results;
  }

  if (recommendation) {
    recommendationResults = recommendation.results;
  }

  const [similarMoviesViewLess, similarMoviesViewMore, similarMoviesLimit] =
    useView(5, similarMoviesResults);
  const [recommendationViewLess, recommendationViewMore, recommendationLimit] =
    useView(5, recommendationResults);

  const closeModal = () => {
    setShowModal(false);
  };
  const showModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {window.scrollTo(0, 0)}
      <MainContainer
        imageUrl={imageUrl}
        poster_path={detailResults.poster_path}
      >
        <AboutMovie>
          <MoviePoster>
            <img
              src={
                detailResults.poster_path
                  ? `${imageUrl}${detailResults.poster_path}`
                  : NoImage
              }
              alt={detailResults.title}
            />
            <PlayVideoContainer onClick={showModal}>
              <PlayVideo />
            </PlayVideoContainer>
          </MoviePoster>
          <Overview>
            <h1>{detailResults.title}</h1>
            <p>{detailResults.overview}</p>
            <MovieActors>
              {creditResults
                .slice(0, 5)
                .map(({ profile_path, name }, index) => {
                  return (
                    <Card key={index}>
                      <img
                        src={
                          profile_path ? `${imageUrl}${profile_path}` : NoImage
                        }
                        alt={name}
                      />
                      <CardBody>
                        <strong>{name}</strong>
                      </CardBody>
                    </Card>
                  );
                })}
            </MovieActors>
          </Overview>
        </AboutMovie>
      </MainContainer>
      {similarMovies ? (
        <>
          {similarMoviesResults.length > 0 && (
            <SectionView
              title="Films similaires"
              viewMore={similarMoviesViewMore}
              viewLess={similarMoviesViewLess}
              limit={similarMoviesLimit}
              length={similarMoviesResults.length}
            >
              {similarMoviesResults
                .slice(0, similarMoviesLimit)
                .map(
                  (
                    { id, title, vote_average, poster_path, release_date },
                    index
                  ) => {
                    return (
                      <MovieCard
                        id={id}
                        title={title}
                        vote_average={vote_average}
                        poster_path={poster_path}
                        release_date={release_date}
                        key={index}
                        imageUrl={imageUrl}
                      />
                    );
                  }
                )}
            </SectionView>
          )}
        </>
      ) : (
        <SectionViewSkeleton title="Films similaires" />
      )}
      {recommendation ? (
        <>
          {recommendationResults.length > 0 && (
            <SectionView
              title="Recommandation"
              viewMore={recommendationViewMore}
              viewLess={recommendationViewLess}
              limit={recommendationLimit}
              length={recommendationResults.length}
            >
              {recommendationResults
                .slice(0, recommendationLimit)
                .map(
                  (
                    { id, title, vote_average, poster_path, release_date },
                    index
                  ) => {
                    return (
                      <MovieCard
                        id={id}
                        title={title}
                        vote_average={vote_average}
                        poster_path={poster_path}
                        release_date={release_date}
                        key={index}
                        imageUrl={imageUrl}
                      />
                    );
                  }
                )}
            </SectionView>
          )}
        </>
      ) : (
        <SectionViewSkeleton title="Recommandation" />
      )}
      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{detailResults.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h90">
          {trailerKey === "La vidéo d'annonce n'est pas encore disponible" ? (
            "La vidéo d'annonce n'est pas encore disponible"
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MovieViewMore;
