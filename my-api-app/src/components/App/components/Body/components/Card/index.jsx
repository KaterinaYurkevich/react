import React from 'react';
import { Card as StoryCard, Button } from 'react-bootstrap';

export function Card(props) {
  const { title, abstract, multimedia, subsection, created_date } = props;
  const imageSrc = Array.isArray(multimedia) && multimedia[1].url;
  const date = new Date(Date.parse(created_date));
  const year = date.getFullYear();
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;


  const formatedDate = `${year}-${month}-${day}`;
 
  return (
    <StoryCard className="cards">
      <StoryCard.Header as="h5" className="cards_header">{subsection}</StoryCard.Header>
      <StoryCard.Body className="cards_body">
        <StoryCard.Img variant="top" src={imageSrc} />
        <div className="cards_box">
          <StoryCard.Title className="cards_title">{title}</StoryCard.Title>
          <StoryCard.Text className="cards_text">
            {abstract}
          </StoryCard.Text>
          <Button variant="success" className="card-button">Read more</Button>
        </div>
      </StoryCard.Body>
      <StoryCard.Footer className="cards_footer">{formatedDate}</StoryCard.Footer>
    </StoryCard>
  )
}
