export function generateMailContent() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Test Email</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
            color: #333;
          }
          .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: auto;
          }
          .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Hello from Nodemailer 👋</h2>
          <p>This is a simple test email sent using Jillur Rahman <strong>Nodemailer</strong>.</p>
          <p>You can customize this template as needed.</p>
          <p>Best regards,<br/>Md. Jillur Rahman</p>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Your App Name
          </div>
        </div>
      </body>
    </html>
  `;
}
