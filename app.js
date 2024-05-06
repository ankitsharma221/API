require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Song = require('./models/aartiModel.js')
const title = require('./models/titleModel.js')
const ram = require('./models/ramModel.js')
const khatu = require('./models/khatushyamModel.js')
const Ma = require('./models/maModel.js')
const laxmi = require('./models/laxmimaModel.js')
const ganesh = require('./models/ganeshModel.js')
const hanuman = require('./models/hanumanjiModel.js')

const app = express()
const PORT = process.env.PORT;

app.use(express.json()); // for parsing application/json





// mongoose.connect('mongodb+srv://aannkkiitt321:Ankitdon7+@freeapi.szwrsvj.mongodb.net/')
// .then(() => {
//   console.log('Connected to database')

  app.get('/songs', (req, res) => {
  Song.find({})
    .then(songs => {
      res.json(songs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
app.get('/song/:id',async (req, res) => {
  const sondId=req.params.id
  const song=await Song.findById(sondId)
  res.json(song)

});

app.get('/titles', (req, res) => {
  title.find({})
    .then(titles => {
      res.json(titles);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});


app.get('/title/:id',async (req, res) => {
  const titleId=req.params.id
  const title=await title.findById(titleId)
  res.json(title)
});

app.get('/rams', (req, res) => {
  ram.find({})
    .then(rams => {
      res.json(rams);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    }
  );
}
);

app.get('/ram/:id',async (req, res) => {
  const ramId=req.params.id
  const ram=await ram.findById(ramId)
  res.json(ram)
});

app.get('/khatushyams', (req, res) => {
  khatu.find({})
    .then(khatushyams => {
      res.json(khatushyams);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/khatushyam/:id',async (req, res) => {
  const khatushyamId=req.params.id
  const khatushyam=await khatu.findById(khatushyamId)
  res.json(khatushyam)
});


app.get('/Ma', (req, res) => {
  Ma.find({})
    .then(Mas => {
      res.json(Mas);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/Ma/:id',async (req, res) => {
  const MaId=req.params.id
  const Ma=await Ma.findById(MaId)
  res.json(Ma)
});

app.get('/laxmi', (req, res) => {
  laxmi.find({})
    .then(laxmis => {
      res.json(laxmis);
    })
    .catch(err => {
      console.error(err);
      res.status(500
        ).send(err);
    }
  );
}
);

app.get('/laxmi/:id',async (req, res) => {
  const laxmiId=req.params.id
  const laxmi=await laxmi.findById(laxmiId)
  res.json(laxmi)
});

app.get('/ganesh', (req, res) => {
  ganesh.find({})
    .then(ganeshs => {
      res.json(ganeshs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/ganesh/:id',async (req, res) => {
  const ganeshId=req.params.id
  const ganesh=await ganesh.findById(ganeshId)
  res.json(ganesh)
}
);

app.get('/hanuman', (req, res) => {
  hanuman.find({})
    .then(hanumans => {
      res.json(hanumans);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/hanuman/:id',async (req, res) => {
  const hanumanId=req.params.id
  const hanuman=await hanuman
  .findById(hanumanId)
  res.json(hanuman)
}
);


app.post('/upload', (req, res) => {
  const newSong= new Song({
    title: req.body.title,
    composer: req.body.composer,
    language: req.body.language,
    section: req.body.section,
    lyrics: req.body.lyrics,
  });
   newSong.save()
});

app.listen(PORT, () => 
  console.log(`Server started at PORT: ${PORT}`)
);

