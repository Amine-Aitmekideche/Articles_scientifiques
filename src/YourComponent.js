import React from 'react';
import { useHistory } from 'react-router-dom';

function YourComponent({ setMoreInfoDisplay, setShowSearchPage, showSearchPage }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/SherchArticlePage');
    setShowSearchPage(false);
    setMoreInfoDisplay(false);
  };
 
  return (
    <article>
      {/* Votre contenu ici */}
    </article>
  );
}

export default YourComponent;
