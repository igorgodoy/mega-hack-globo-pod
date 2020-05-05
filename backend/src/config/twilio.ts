import Twilio from 'twilio';

interface SendSmsParams {
  msg: string;
  to: string;
}

export default async function sendSms({
  msg,
  to,
}: SendSmsParams): Promise<boolean> {
  const twilioClient = Twilio(
    'AC8e2f388934a2f48493c89c960e575397',
    'd7ea5a2b8fd87135c341b34d3488db07',
  );

  const { accountSid } = await twilioClient.messages.create({
    body: msg,
    from: '+12565408116',
    to: `+55${to.replace(/\D/g, '')}`,
  });

  return !!accountSid;
}
