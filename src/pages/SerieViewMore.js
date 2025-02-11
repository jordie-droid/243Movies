import { useParams } from "react-router";
import SectionView from "../components/SectionView";
import { useSerieDetails, useView } from "../hooks/personalHooks";
import NoImage from "../images/NoImage.png";
import SerieCard from "../components/SerieCard";
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
import { useState } from "react";
import { Modal } from "react-bootstrap";

const SerieViewMore = ({ imageUrl }) => {
  const [show, setShowModal] = useState(false);

  const { id: serieID } = useParams();
  const [serieDetail, serieCredit, similarSeries, recommendation, trailerKey] =
    useSerieDetails(serieID);

  let detailResults = [],
    creditResults = [],
    similarSeriesResults = [],
    recommendationResults = [];

  if (serieDetail) {
    detailResults = serieDetail;
  }

  if (serieCredit) {
    creditResults = serieCredit.cast;
  }

  if (similarSeries) {
    similarSeriesResults = similarSeries.results;
  }

  if (recommendation) {
    recommendationResults = recommendation.results;
  }

  const [similarSeriesViewLess, similarSeriesViewMore, similarSeriesLimit] =
    useView(5, similarSeriesResults);
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
              alt={detailResults.name}
            />
            <PlayVideoContainer onClick={showModal}>
              <PlayVideo />
            </PlayVideoContainer>
          </MoviePoster>
          <Overview>
            <h1>{detailResults.name}</h1>
            <p>{detailResults.overview}</p>
            <MovieActors>
              {creditResults
                .slice(0, 8)
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
      {similarSeriesResults.length > 0 && (
        <>
          <SectionView
            title="Séries similaires"
            viewMore={similarSeriesViewMore}
            viewLess={similarSeriesViewLess}
            limit={similarSeriesLimit}
            length={similarSeriesResults.length}
          >
            {similarSeriesResults
              .slice(0, similarSeriesLimit)
              .map(
                (
                  { id, name, vote_average, poster_path, first_air_date },
                  index
                ) => {
                  return (
                    <SerieCard
                      id={id}
                      title={name}
                      vote_average={vote_average}
                      poster_path={poster_path}
                      release_date={first_air_date}
                      key={index}
                      imageUrl={imageUrl}
                    />
                  );
                }
              )}
          </SectionView>
        </>
      )}
      {recommendationResults.length > 0 && (
        <>
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
                  { id, name, vote_average, poster_path, first_air_date },
                  index
                ) => {
                  return (
                    <SerieCard
                      id={id}
                      title={name}
                      vote_average={vote_average}
                      poster_path={poster_path}
                      release_date={first_air_date}
                      key={index}
                      imageUrl={imageUrl}
                    />
                  );
                }
              )}
          </SectionView>
        </>
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
          <Modal.Title>{detailResults.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h90">
          {trailerKey !== "La vidéo d'annonce n'est pas encore disponible" ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
          ) : (
            <p>La vidéo d'annonce n'est pas encore disponible</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SerieViewMore;
