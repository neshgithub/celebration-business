'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import QRCode from 'qrcode';
import { Plan } from '@prisma/client';
import upiQr from '@sk-py/upi-qr';

interface UPIPaymentProps {
  plan: Plan;
  total: number;
}

export function UPIPayment({ plan, total }: UPIPaymentProps) {
  const [qrCode, setQrCode] = useState<string | null>(null);

  useEffect(() => {
    const generateQr = async () => {
      try {
        const upi = await upiQr({
          payeeVPA: process.env.NEXT_PUBLIC_UPI_VPA!,
          payeeName: 'Premium App',
          amount: total.toFixed(2),
          transactionNote: `Payment for ${plan.name} plan`,
        });
        setQrCode(upi.qr);
      } catch (error) {
        console.error('Failed to generate QR code', error);
      }
    };

    generateQr();
  }, [plan, total]);

  return (
    <div>
      <h3 className="text-lg font-semibold">Scan to Pay with UPI</h3>
      {qrCode ? (
        <div className="flex flex-col items-center">
          <img src={qrCode} alt="UPI QR Code" className="w-64 h-64" />
          <p className="mt-4 text-sm text-muted-foreground">
            Scan this QR code with any UPI app to complete the payment.
          </p>
        </div>
      ) : (
        <p>Generating QR code...</p>
      )}
    </div>
  );
}
