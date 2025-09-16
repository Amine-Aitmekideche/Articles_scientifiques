import './App.css';
import SherchArticlePage from './SherchArticlePage';
import ArticleText from './ArticleText';
function App() {
  // npx json-server -p 3500 -w data/auteurs.json
  
  return (
    <div className="App">
      <SherchArticlePage />
      
    </div>
  );
}

export default App;
