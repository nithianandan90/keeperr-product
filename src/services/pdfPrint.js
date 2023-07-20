import * as React from "react";
import { View, StyleSheet, Button, Platform, Text } from "react-native";
import * as Print from "expo-print";

export const printToFile = async (invoicePrintData) => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .invoicePrintData {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            max-width: 600px;
        }

        .invoicePrintData-header {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .invoicePrintData-details {
            margin-bottom: 20px;
        }

        .invoicePrintData-details table {
            width: 100%;
        }

        .invoicePrintData-details th,
        .invoicePrintData-details td {
            padding: 8px;
            text-align: left;
        }

        .invoicePrintData-details th {
            width: 40%;
        }

        .invoicePrintData-items {
            margin-bottom: 20px;
        }

        .invoicePrintData-items table {
            width: 100%;
        }

        .invoicePrintData-items th,
        .invoicePrintData-items td {
            padding: 8px;
            text-align: left;
        }

        .invoicePrintData-items th {
            background-color: #f2f2f2;
        }

        .invoicePrintData-other {
          text-align: right;
      }
        .invoicePrintData-total {
            text-align: right;
            font-weight: bold;
        }
        .invoicePrintData-remarks {
          margin-bottom: 20px;
      }

        .invoicePrintData-remarks label {
          font-weight: bold;
      }

        .invoicePrintData-payment {
          margin-bottom: 20px;
      }

        .invoicePrintData-payment table {
          width: 100%;
      }

        .invoicePrintData-payment th,
        .invoicePrintData-payment td {
          padding: 8px;
          text-align: left;
      }

        .invoicePrintData-payment th {
          width: 40%;
      }
         .company-details {
          margin-bottom: 20px;
      }

        .company-details p {
          margin: 0;
      }

    </style>
    </head>
    <body>
    <div class="invoicePrintData">
        <div class="company-details">
            <p>Retail Revolution Sdn. Bhd.</p>
            <p>Lot 6.03, 6th Floor, Plaza First Nationwide, 161, Jalan Tun H.S. Lee,</p>
            <p>Kuala Lumpur, 50000</p>
            <p>Phone: +6012-3441216</p>
        </div>

        <div class="invoicePrintData-header">
            Invoice
        </div>

        <div class="invoicePrintData-details">
            <table>
                <tr>
                    <th>Invoice Number:</th>
                    <td>${invoicePrintData.invoiceNo}</td>
                </tr>
                <tr>
                    <th>Date:</th>
                    <td>${invoicePrintData.issuedDate}</td>
                </tr>
                <tr>
                    <th>Customer:</th>
                    <td>${invoicePrintData.customerName}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${invoicePrintData.customerEmail}</td>
                </tr>
            </table>
        </div>

        <div class="invoicePrintData-items">
            <table>
                <tr>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Total</th>
                </tr>
                ${invoicePrintData.tasks.map(
                  (item) => `
                <tr>
                  
                    <td>${item.data[0].label}</td>   
                    <td>${item.remarks}</td>   
                    <td>RM ${item.amount}</td>
                    
                </tr>
              
                `
                )}
                
                
            </table>
        </div>

        <div class="invoicePrintData-other">
            Additional Charges: RM ${invoicePrintData.additionalCharges}
        </div>
        <div class="invoicePrintData-other">
            Discount: (RM ${invoicePrintData.discount})
        </div>          
        <div class="invoicePrintData-total">
            Total: RM ${invoicePrintData.invoiceAmount}
        </div>
        <div class="invoicePrintData-remarks">
            <label>Remarks:</label>
            <p>${invoicePrintData.remarks}</p>
            <p>Thank you for your business! </p>
        </div>

        <div class="invoicePrintData-payment">
            <table>
                <tr>
                    <th>Payment Method:</th>
                    <td>Bank Details</td>
                </tr>
                <tr>
                    <th>Bank Name:</th>
                    <td>Maybank</td>
                </tr>
                <tr>
                    <th>Account: </th>
                    <td>564052536287</td>
                </tr>
                <tr>
                    <th>Account Name: </th>
                    <td>Retail Revolution Sdn. Bhd. </td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
`;

  try {
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    return uri;
  } catch (e) {
    console.log(e);
    return "error";
  }
};
