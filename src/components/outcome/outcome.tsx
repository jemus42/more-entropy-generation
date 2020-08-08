import React from 'react';
import { Box } from '@material-ui/core';

interface OutcomeProps {
  rollData: Die[];
}

const Outcome = (props: OutcomeProps) => {
  const calculateThrows = (die: Die): number[] => {
    const throws = [];
    for (let i = 0; i < die.count; i += 1) {
      throws.push(Math.ceil(Math.random() * die.sides));
    }

    console.log(throws);

    return throws;
  };

  const displayThrows = (dice: Die[]) => {
    const rolledDice = Object.values(dice).filter(
      (dieType) => dieType.count > 0
    );
    return rolledDice.map((die, index) => {
      return (
        <div key={index}>
          {die.label} (*{die.count}):{' '}
          {calculateThrows(die).map((result, i) =>
            i + 1 === die.count ? result : `${result},`
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Box m={2}>{displayThrows(props.rollData)}</Box>
    </>
  );
};

export default Outcome;
