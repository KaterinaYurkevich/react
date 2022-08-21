import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getNews } from '../../../../services/getNews'
import { Card } from './components/Card';

export function Body() {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNews().then(body => setNews(body.results));
    setIsLoading(false)
    console.log(getNews().then());
  }, [])

  return (
    <main>
      <Container className='d-flex flex-wrap gap-3'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(news) && news.map(story => <Card key={story.uri} {...story} />)}
      </Container>
    </main>
  )
}
