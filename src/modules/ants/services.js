import {query} from '../../services/graphql';

export function generateAntWinLikelihoodCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export const getAnts = async () => await query(`
{
  ants {
    name
    length
    color
    weight
  }
}
`);
