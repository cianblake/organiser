import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

const TaskManager: FC = () => {

  return (
    <Stack>
        <Stack justifyContent={'space-between'} direction={'row'}>
            <Typography variant="body1">Logout</Typography>
            <Typography variant="body1">1 14 Days</Typography>
        </Stack>
    </Stack>
  )
};

export default TaskManager;
