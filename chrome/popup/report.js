document.getElementById('reportForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var url = document.getElementById('url').value;
  var description = document.getElementById('description').value;
  var report = { url: url, description: description };

  // Send data to Telegram bot
  sendToTelegram(report);

  chrome.storage.local.get({ reports: [] }, function(result) {
    var reports = result.reports;
    reports.push(report);
    chrome.storage.local.set({ reports: reports }, function() {
      alert('Report sent!');
      location.reload();
    });
  });
});

function sendToTelegram(report) {
  var botToken = '6183377675:AAFUa_S7Mc_4caZqRvQhwQ74jOu0Y41LEms';
  var chatId = '1063759738';

  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  var message = `New Report:\nURL: ${report.url}\nDescription: ${report.description}`;

  // Use node-fetch to make a POST request to the Telegram Bot API
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Message sent to Telegram:', data);
    })
    .catch(error => {
      console.error('Error sending message to Telegram:', error);
    });
}
