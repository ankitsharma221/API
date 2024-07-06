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
const Image = require('./models/wallpaper.js')
const multer = require('multer');
const Wallpaper = require('./models/upload_wallpaper.js')
const GodQuotes = require('./models/godQuotesModel.js')

const app = express()
const PORT = process.env.PORT;

app.use(express.json()); 


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });






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

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find({}, 'imageData'); // Fetch only imageData field
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send(error.message);
  }
});


app.post('/upload-wallpaper', upload.single('image'), async (req, res) => {
  try {
    const { mimetype, buffer } = req.file;
    const imageData = buffer.toString('base64');

    const newWallpaper = new Wallpaper({
      imageData: imageData,
      contentType: mimetype,
    });

    await newWallpaper.save();
    res.status(201).json({ message: 'Wallpaper uploaded successfully' });
  } catch (error) {
    console.error('Error uploading wallpaper:', error);
    res.status(500).send(error.message);
  }
});

app.get('/god-quotes', async (req, res) => {
  try {
    const godQuotes = await GodQuotes.find({}, 'imageName imageData'); // Fetch only imageName and imageData fields
    res.json(godQuotes);
  } catch (error) {
    console.error('Error fetching God quotes:', error);
    res.status(500).send(error.message);
  }
});


// Route to upload God quotes images
app.post('/upload-god-quote', upload.array('images', 10), async (req, res) => {
  try {
    const files = req.files;
    const uploadedImages = [];

    for (const file of files) {
      const { originalname, mimetype, buffer } = file;
      const imageData = buffer.toString('base64');

      const newGodQuote = new GodQuotes({
        name: originalname,
        imageData: imageData,
        contentType: mimetype,
      });

      const savedImage = await newGodQuote.save();
      uploadedImages.push(savedImage);
    }

    res.status(201).json({ message: 'God quotes uploaded successfully', images: uploadedImages });
  } catch (error) {
    console.error('Error uploading God quotes:', error);
    res.status(500).send(error.message);
  }
});


app.listen(PORT, () => 
  console.log(`Server started at PORT: ${PORT}`)
);

