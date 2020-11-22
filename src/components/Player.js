import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Counter from './Counter';

class Player extends PureComponent {
  static propTypes = {
    changeScore  : PropTypes.func,
    removePlayer : PropTypes.func,
    name         : PropTypes.string.isRequired,
    id           : PropTypes.number.isRequired,
    score        : PropTypes.number,
    index        : PropTypes.number,
    isHiScore    : PropTypes.bool,
  };

  render () {
    const { name, id, score, index, removePlayer, changeScore, isHiScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHiScore={isHiScore} />
          {name}
        </span>

        <Counter
          /* prettier ignore */
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
