import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: { 'X-Api-Key': 'imG1fTLCj3XPgR1bBOdEkw==LU6iTLXt2WSYAqvB' }, // Replace with your API key
          },
        );

        const { quote, author } = response.data[0];
        setQuote(quote);
        setAuthor(author);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching the quote.</div>;
  }

  return (
    <div>
      <h2>Quote of the day:</h2>
      <p>
        &ldquo;
        {quote}
        &rdquo;
      </p>
      <p>
        -
        {author}
      </p>
    </div>
  );
};

export default QuoteComponent;
