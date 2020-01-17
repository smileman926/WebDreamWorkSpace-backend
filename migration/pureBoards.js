var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("webdream");
  var myobj = [
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: false,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: false,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: false,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: false,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: true,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: true,

    },
    { 
      title: 'Welcome to Trello', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      visitedTime: '',
      isStarred: false,

    },
  ];
  dbo.collection("pures").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
