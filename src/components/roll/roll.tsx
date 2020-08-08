import React, { ChangeEvent, useState } from 'react';
import { Box, Button, FormControl, TextField } from '@material-ui/core';

interface RollProps {
  handleRoll(dice: Die[]): void;
}

const Roll = (props: RollProps) => {
  const initialDiceState = [
    { count: 0, label: 'D4', sides: 4 },
    { count: 0, label: 'D6', sides: 6 },
    { count: 0, label: 'D8', sides: 8 },
    { count: 0, label: 'D10', sides: 10 },
    { count: 0, label: 'D12', sides: 12 },
    { count: 0, label: 'D20', sides: 20 },
    { count: 0, label: 'D100', sides: 100 }
  ];
  const [dice, setDice] = useState(initialDiceState as Die[]);

  const handleDiceCount = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setDice({
      ...dice,
      [index]: { ...dice[index], count: parseInt(e.target.value, 10) }
    });
  };

  const renderInputPerDie = () => {
    return Object.keys(dice).map((die, index) => {
      return (
        <Box m={2} key={index}>
          <FormControl fullWidth component="fieldset">
            <TextField
              label={dice[index].label}
              variant="outlined"
              type="number"
              value={dice[index].count}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleDiceCount(e, index)
              }
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ pattern: '[0-9]*', min: 0 }}
            />
          </FormControl>
        </Box>
      );
    });
  };

  return (
    <>
      {renderInputPerDie()}
      <Box m={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          component="button"
          onClick={() => {
            props.handleRoll(dice);
          }}
        >
          Roll!
        </Button>
      </Box>
    </>
  );
};

export default Roll;
