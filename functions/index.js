const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレート
const adminContents = data => {
  return `Received a contact from the website with the following contents.
name：
${data.name}

email：
${data.email}

contents：
${data.contents}
`;
};

exports.sendMail = functions.https.onCall(async (data, context) => {
  // メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "contact form",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
  } catch (e) {
    console.error(`send failed. ${e}`);
    throw new functions.https.HttpsError('internal', 'send failed');
  }
}
)
