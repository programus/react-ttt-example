import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {
          Array(3).fill(null).map((_, i) => {
            return (
              <div className="board-row" key={i}>
                {
                  Array(3).fill(null).map((_, j) => {
                    return this.renderSquare(i * 3 + j);
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Board;