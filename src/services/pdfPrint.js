import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Print from "expo-print";

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

export const printToFile = async () => {
  try {
    const { uri } = await Print.printToFileAsync({ htmlContent });
    console.log(uri);
    return uri;
  } catch (err) {
    console.error(err);
  }
};
