import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography
} from '@material-ui/core';
import Roll from '@src/components/roll/roll';
import Outcome from '@src/components/outcome/outcome';

const App = () => {
  const [rollData, setRollData] = useState([] as Die[]);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> Dice Stuff</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box mt={2} mb={1}>
          <Paper variant="outlined">
            <Grid container>
              <Grid item xs={4}>
                <Roll handleRoll={setRollData} />
              </Grid>
              <Grid item xs={8}>
                <Outcome rollData={rollData} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default App;
