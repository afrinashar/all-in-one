import { useEffect,useState } from "react";
import "./App.css"
const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiB2E79LWVUoq4bDADmjZbQTQrfjuR2OKCsA&s'; // URL of the image
 
const numRows = 3;
const numCols = 3;
const Puzzle = () => {
    const [tiles, setTiles] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
  
    useEffect(() => {
      initializeTiles();
    }, []);
  
    const initializeTiles = () => {
      const tempTiles = [];
      const tileWidth = 400 / numCols;
      const tileHeight = 400 / numRows;
  
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * tileWidth;
          const y = row * tileHeight;
          const backgroundPosition = `-${x}px -${y}px`;
          tempTiles.push({ row, col, backgroundPosition });
        }
      }
  
      setTiles(tempTiles);
    };
  
    const shuffleTiles = () => {
      const shuffledTiles = [...tiles].sort(() => Math.random() - 0.5);
      setTiles(shuffledTiles);
      setIsSolved(false);
    };
  
    const handleTileClick = (clickedTile) => {
      const emptyTile = tiles.find(tile => tile.isEmpty);
  
      if (!isAdjacent(clickedTile, emptyTile)) {
        return; // Clicked tile is not adjacent to the empty tile
      }
  
      const updatedTiles = tiles.map(tile =>
        (tile.row === clickedTile.row && tile.col === clickedTile.col) ? { ...tile, isEmpty: true } :
          (tile.row === emptyTile.row && tile.col === emptyTile.col) ? { ...tile, isEmpty: false } :
            tile
      );
      setTiles(updatedTiles);
      checkIfSolved(updatedTiles);
    };
  
    const isAdjacent = (tile1, tile2) => {
      const rowDiff = Math.abs(tile1.row - tile2.row);
      const colDiff = Math.abs(tile1.col - tile2.col);
      return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    };
  
    const checkIfSolved = (updatedTiles) => {
      const solved = updatedTiles.every(tile =>
        (tile.row * numCols + tile.col + 1 === numRows * numCols) || tile.isEmpty
      );
      setIsSolved(solved);
    };
  
    return (
      <div className="App">
        <h1>Image Puzzle Game</h1>
        <div className="puzzle-container">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`tile ${tile.isEmpty ? 'empty' : ''}`}
              style={{ backgroundImage: `url(${imageSrc})`, backgroundPosition: tile.backgroundPosition }}
              onClick={() => handleTileClick(tile)}
            ></div>
          ))}
        </div>
        <button onClick={shuffleTiles}>Shuffle Tiles</button>
        {isSolved && <div className="message">Congratulations! You solved the puzzle!</div>}
      </div>
    );
  }
export default Puzzle