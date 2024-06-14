import React, { useEffect, useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { CryptoProps } from '@/utils/type';
import { getHistory } from '@/services/auth';

export default function Graph() {


  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}