import React from 'react'
import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';
import { Box, Typography } from '@material-ui/core';

export default function QRCode() {
  return (
    <div>
        <Box display={"flex"}>
        <Box mr={8}>
        <Typography>
            QR Code with SVG
        </Typography>
          <QRCodeSVG value="https://reactjs.org/" />
          </Box>
          <Box>
          <Typography>
            QR Code with Canvas
        </Typography>
          <QRCodeCanvas value="https://dealrs.in/" />
          </Box>
            </Box>
    
        
    </div>
  )
}
