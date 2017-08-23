var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
  url = 'mongodb://localhost:27017/nodeToyDev';
} else {
  url = 'mongodb://heroku_dq13zd86:q5eilfck8e418hr07rtk8v2tqj@ds151433.mlab.com:51433/heroku_dq13zd86';
}

mongoose.connect(url, err => {
  if (err) {
    console.log("# Failed to connect to MongoDB ");
  } else {
    console.log('# Connected to MongoDB')
  }
})

