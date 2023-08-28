import React, { FC } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';


const TaskManager: FC = () => {

  return (
    <Stack justifyContent={'space-between'} height={'100%'}>
        <Stack justifyContent={'space-between'} direction={'row'}>
            <Typography variant="body1">Logout</Typography>
            <Typography variant="body1">1 14 Days</Typography>
        </Stack>
        <Stack justifyContent={'center'}>
          <TextField />
        </Stack>
    </Stack>
  )
};

export default TaskManager;
