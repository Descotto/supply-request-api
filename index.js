require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Request = require('./schemas/request');
// port
const port = process.env.PORT || 8000;
const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

db.once('open', () => {
    console.log('Connected to database at ', db.host, ':', db.port);
})

db.once('error', (error) => {
    console.log(`Database error ${error}`)
});


app.use(express.urlencoded({ extended: false }));

//================================================================
app.get('/', (req, res) => {
    res.json('Welcome to my DB')
})
app.get('/data', (req, res) => {
    res.json({
        "essentialData": [
            {
                "itemCode": "1287787F1",
                "description": "1g ONT 20/case"
            },
            {
                "itemCode": "1287843F1N",
                "description": "10g ONT 10/case"
            },
            {
                "itemCode": "TY-15132B",
                "description": "Fiber Termination (Transition Box) 40/case"
            },
            {
                "itemCode": "FDB-08B",
                "description": "Fiber Dist. Box (8 Port MDU Splitter)"
            },
            {
                "itemCode": "SC-APC-H02",
                "description": "Fiber Quick Connect (Fiber Ends) 100/box"
            },
            {
                "itemCode": "25321464",
                "description": "ONT Screw (PHSMSS61) 100/box"
            },
            {
                "itemCode": "93174711",
                "description": "Wood Screw (Termination Box Screw) 100/box"
            },
            {
                "itemCode": "MAR1001411",
                "description": "Wall Anchors (Mollys) 100/box"
            },
            {
                "itemCode": "S-5143-FINS",
                "description": "Black Electric Tape"
            }
        ],
        "secondaryData": [
            {
                "itemCode": "108193",
                "description": "1M White int. Jumper 40/bag"
            },
            {
                "itemCode": "SC-APCSC-APC-3M",
                "description": "3m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC10M",
                "description": "10m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC20M",
                "description": "20m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC35M",
                "description": "35m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC50M",
                "description": "50m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC75M",
                "description": "75m secondary drop"
            },
            {
                "itemCode": "SC-APCSC-APC100",
                "description": "100m secondary drop"
            },
            {
                "itemCode": "SCAPCSCAPC-3M-W",
                "description": "3m secondary drop (White)"
            },
            {
                "itemCode": "SCAPCSCAPC10M-W",
                "description": "10m secondary drop (White)"
            },
            {
                "itemCode": "SCAPCSCAPC20M-W",
                "description": "20m secondary drop (White)"
            },
            {
                "itemCode": "SCAPCSCAPC35M-W",
                "description": "35m secondary drop (White)"
            }
        ],
        "brentwoodData": [
            {
                "itemCode": "FS-AA1-001-0150",
                "description": "150' Brentwood Drop"
            },
            {
                "itemCode": "FS-AA1-001-0200",
                "description": "200' Brentwood Drop"
            },
            {
                "itemCode": "FS-AA1-001-0300",
                "description": "300' Brentwood Drop"
            },
            {
                "itemCode": "FS-AA1-001-0400",
                "description": "400' Brentwood Drop"
            },
            {
                "itemCode": "FS-AA1-001-0500",
                "description": "500' Brentwood Drop"
            }
        ],
        "modemsData": [
            {
                "itemCode": "N010011 (w/psu C110011)",
                "description": "Eero 6 (cupcake) 20/case"
            },
            {
                "itemCode": "S012011 (w/psu C210011)",
                "description": "Eero Pro 6E 12/case"
            },
            {
                "itemCode": "K010011 (w/psu C210011)",
                "description": "Eero 6 Pro 12/case"
            },
            {
                "itemCode": "515 KIT",
                "description": "515 Tested kit"
            },
            {
                "itemCode": "5268 KIT",
                "description": "5268 Tested kit"
            }
        ],
        "ziptiesData": [
            {
                "itemCode": "CP-8-40-B",
                "description": "8\" Zip Ties Black 100/bag or 1,000/bag"
            },
            {
                "itemCode": "CP-8-40-N",
                "description": "8\" Zip Ties Natural 100/bag or 1,000/bag"
            },
            {
                "itemCode": "CP-7-50MH-B",
                "description": "8\" Screwdown Zip Ties Black 100/bag"
            },
            {
                "itemCode": "CP-7-50MH-N",
                "description": "8\" Screwdown Zip Ties Natural 100/bag"
            },
            {
                "itemCode": "CP-11-50-B",
                "description": "11\" Zip Tie Black 100/bag or 1,000/bag"
            },
            {
                "itemCode": "CP-14-50MH-B",
                "description": "14\" Screwdown Zip Ties Black 100/bag"
            },
            {
                "itemCode": "G4BK-03",
                "description": "Small Flex Clips Black 100/bag"
            },
            {
                "itemCode": "G4BK-05",
                "description": "Large Flex Clips Black 100/bag"
            },
            {
                "itemCode": "G4WH-03",
                "description": "Small Flex Clips White 100/bag"
            },
            {
                "itemCode": "G4WH-05",
                "description": "Large Flex Clips White 100/bag"
            }
        ],
        "wallplatesData": [
            {
                "itemCode": "1901L",
                "description": "Fiber Optic Wall Plate, 1P, White 20/box"
            },
            {
                "itemCode": "DA1WH",
                "description": "1 Port Fiber Angled Wall Plate 25/box"
            },
            {
                "itemCode": "DA2WH",
                "description": "2 Port Fiber Angled Wall Plate 25/box"
            },
            {
                "itemCode": "IC107DA4WH",
                "description": "4 Port Angled Wall Plate 25/box"
            },
            {
                "itemCode": "ACSFTW",
                "description": "White Grommets 100/bag"
            },
            {
                "itemCode": "ACSFTW-B",
                "description": "Black Grommets 100/bag"
            },
            {
                "itemCode": "SBWH06",
                "description": "RG6/coaxial split bushings 7/16 100/bag"
            },
            {
                "itemCode": "ACM-652114",
                "description": "9/16 Staple for T25/25A"
            },
            {
                "itemCode": "AKI-SCA-WH",
                "description": "Fiber Keystone 25/pack"
            },
            {
                "itemCode": "14J388",
                "description": "Coax Insert 10/bag"
            },
            {
                "itemCode": "3M 4026-1X1",
                "description": "DBL Sticky Squares"
            },
            {
                "itemCode": "RED-820",
                "description": "Silicone handheld tube"
            },
            {
                "itemCode": "2074064",
                "description": "Surge Protector PStrip 7 Out, 4'"
            },
            {
                "itemCode": "3187939",
                "description": "TL-SG105 5P Gigabit Ethernet Switc"
            },
            {
                "itemCode": "PS36L-K7-2",
                "description": "24 Hr. Battery Backup"
            }
        ],
        "copperData": [
            {
                "itemCode": "C6E-1000-WHT",
                "description": "1000FT CAT6 PVC Bulk (White)"
            },
            {
                "itemCode": "C6E-1000-UV",
                "description": "1000FT CAT6 UV (Black)"
            },
            {
                "itemCode": "6-554720-3",
                "description": "RJ-45 Ends 100/bag"
            },
            {
                "itemCode": "7001-6P4C",
                "description": "RJ-11 Ends 100/bag"
            },
            {
                "itemCode": "CAT5E-KJ-WHI",
                "description": "Cat5E Copper Keystone Jack 50/bag"
            },
            {
                "itemCode": "66B1-6",
                "description": "6-Pair Freddy"
            },
            {
                "itemCode": "66B1-12",
                "description": "12-Pair Freddy"
            },
            {
                "itemCode": "163-06",
                "description": "Copper Splice Box"
            },
            {
                "itemCode": "649A1-49",
                "description": "MPOE Filter"
            },
            {
                "itemCode": "95S-1-12",
                "description": "MPOE NID Filter Module"
            },
            {
                "itemCode": "SA1-1000",
                "description": "Bridge Clips 50/bag"
            },
            {
                "itemCode": "98303397",
                "description": "Cross Connect Wire"
            },
            {
                "itemCode": "50029",
                "description": "2 Port Jelly Beans (UY-BOX) 100/box"
            },
            {
                "itemCode": "UR2-BOX",
                "description": "3 Port Jelly Beans 100/box"
            },
            {
                "itemCode": "4625A-24I",
                "description": "1 port Leviton RJ-11 Jack"
            },
            {
                "itemCode": "83-056",
                "description": "White Circular Jack"
            },
            {
                "itemCode": "WP-1-WHI",
                "description": "1 Port Copper Wall Plate"
            },
            {
                "itemCode": "WP-2-WHI",
                "description": "2 Port Copper Wall Plate"
            },
            {
                "itemCode": "SM-1-WHI",
                "description": "1 Port Biscuit Block 20/pack"
            },
            {
                "itemCode": "SM-2-WHI",
                "description": "2 Port Biscuit Block 10/pack"
            },
            {
                "itemCode": "60-0021-S",
                "description": "Mud Ring (1-gang low volt mntg bracket)"
            },
            {
                "itemCode": "900LCC-2F-50",
                "description": "Bonded Filter"
            },
            {
                "itemCode": "1001-301003",
                "description": "Single Line Filter"
            },
            {
                "itemCode": "900LCCS-2F-50",
                "description": "Dual-Line Splitter Filter"
            },
            {
                "itemCode": "LFT-4-1-GB",
                "description": "Single Line Splitter Filter"
            }
        ],
        "enterpriseData": [
            {
                "itemCode": "C275926N-15F",
                "description": "Hydra Cable, RJ45/CAT 5E 24/4P 6'"
            },
            {
                "itemCode": "C5E-001-BLUE",
                "description": "1' CAT5E Patch Cable Blue"
            },
            {
                "itemCode": "C5E-003-BLUE",
                "description": "3' CAT5E Patch Cable Blue"
            },
            {
                "itemCode": "C5E-005-BLUE",
                "description": "5' CATE Patch Cable Blue"
            },
            {
                "itemCode": "C5E-007-BLUE",
                "description": "7' CAT5E Patch Cable Blue"
            },
            {
                "itemCode": "C5E-010-BLUE",
                "description": "10' CAT5E Patch Cable Blue"
            },
            {
                "itemCode": "C5E-015-BLUE",
                "description": "15' CAT5E Patch Cable Blue"
            },
            {
                "itemCode": "M1-50",
                "description": "66 Block"
            },
            {
                "itemCode": "M2-5W",
                "description": "AMP End 66 Block"
            },
            {
                "itemCode": "MC4LH-9",
                "description": "66 Block Cover"
            },
            {
                "itemCode": "S896",
                "description": "66 Block Feet"
            },
            {
                "itemCode": "MP-5T180MUNNA5",
                "description": "CAT5 25-Pair Amp Telco Cable-5ft"
            },
            {
                "itemCode": "MP-5T180MUNNA15",
                "description": "CAT5 25-Pair Amp Telco Cable-15ft"
            },
            {
                "itemCode": "MP-5T180MUNNA25",
                "description": "CAT5 25-Pair Amp Telco Cable-25ft"
            },
            {
                "itemCode": "PP7-3038-MUSH",
                "description": "Mushroom Post With Screw"
            }
        ],
        "toolsData": [
            {
                "itemCode": "STICKER-DNR",
                "description": "ONT Sticker - Small"
            },
            {
                "itemCode": "STICKER-DNR-ONT",
                "description": "ONT Sticker - Large"
            },
            {
                "itemCode": "STICKER-DNR-10G",
                "description": "ONT Caution Sticker for 10G"
            },
            {
                "itemCode": "ALAA-8J",
                "description": "AA Batteries"
            },
            {
                "itemCode": "ALAAA-8J",
                "description": "AAA Batteries"
            },
            {
                "itemCode": "AL9V-12PPJ",
                "description": "9v Battery"
            },
            {
                "itemCode": "GAL-BFS37554",
                "description": "Flex Bit"
            },
            {
                "itemCode": "GAL-BH37512",
                "description": "3/8\" x 12\" Wood Bit"
            },
            {
                "itemCode": "GAL-BH37518",
                "description": "3/8\" x 18\" Wood Bit"
            },
            {
                "itemCode": "GAL-H37513",
                "description": "3/8\" x 12\" Masonry Bit"
            },
            {
                "itemCode": "GAL-H37518",
                "description": "3/8\" x 18\" Masonry Bit"
            },
            {
                "itemCode": "GAL-H50013",
                "description": "1/2\" x 12\" Bit"
            },
            {
                "itemCode": "GAL-H50024",
                "description": "1/2\" x 24\" Bit"
            },
            {
                "itemCode": "GAL-H75013",
                "description": "3/4\" x 12\" Bit"
            },
            {
                "itemCode": "GAL-H75024",
                "description": "3/4\" x 24\" Bit"
            },
            {
                "itemCode": "GAL-H75036",
                "description": "3/4\" x 36\" Bit"
            },
            {
                "itemCode": "GAL-H75048",
                "description": "3/4\" x 48\" Bit"
            },
            {
                "itemCode": "H3-37510",
                "description": "3/8\" x 10\" Wood Bit"
            },
            {
                "itemCode": "H3-37516",
                "description": "3/8\" x 16\" Wood Bit"
            },
            {
                "itemCode": "H3-50010",
                "description": "1/2\" x 10\" Wood Bit"
            },
            {
                "itemCode": "H3-50016",
                "description": "1/2\" x 16\" Wood Bit"
            }
        ],
        "miscData": [
            {
                "itemCode": "6600-2L",
                "description": "Beetle Mallet"
            },
            {
                "itemCode": "CBR600",
                "description": "12\"x18\"x6\" Gray Nema 4 PVC Enclosure w/o backplate"
            },
            {
                "itemCode": "CBR600",
                "description": "12\"x18\"x6\" Gray Nema 4 PVC Enclosure w/ backplate"
            },
            {
                "itemCode": "DT8P-KTP-T01",
                "description": "9 Port Patch Panel Cat 6 (5e, keystone type, 1U, 19\")"
            },
            {
                "itemCode": "DT12P-KTP-T01",
                "description": "12 Port Patch Panel Cat 6 (5e, keystone type, 1U, 19\")"
            },
            {
                "itemCode": "PD-48-C20S",
                "description": "48 Port CAT6 Patch Panel"
            },
            {
                "itemCode": "TM3U",
                "description": "Multifunctional Telephone Tool, 3 blade"
            },
            {
                "itemCode": "ZDSP-03",
                "description": "3\" DSL Phone Cord"
            },
            {
                "itemCode": "VS5-10",
                "description": "10\" VGA Video Cable"
            },
            {
                "itemCode": "HP-3001",
                "description": "Duster, Disposable"
            },
            {
                "itemCode": "TRI-40X60-CW",
                "description": "40x60 Cellular Whiteboard"
            },
            {
                "itemCode": "124000",
                "description": "Wire Bushings"
            },
            {
                "itemCode": "K1-HI-64",
                "description": "L-Clip"
            },
            {
                "itemCode": "1KF-1821",
                "description": "Banana Clip"
            },
            {
                "itemCode": "STAPLER-02",
                "description": "Tacking Gun"
            },
            {
                "itemCode": "STAPLES-02",
                "description": "Tacking Gun Staples"
            },
            {
                "itemCode": "CABLE-B01",
                "description": "Coaxial Cable, 1000 ft"
            },
            {
                "itemCode": "CABLE-B02",
                "description": "Coaxial Cable, 500 ft"
            },
            {
                "itemCode": "CABLE-B03",
                "description": "Coaxial Cable, 250 ft"
            },
            {
                "itemCode": "CABLE-B04",
                "description": "Coaxial Cable, 100 ft"
            },
            {
                "itemCode": "CABLE-B05",
                "description": "Coaxial Cable, 50 ft"
            },
            {
                "itemCode": "CABLE-B06",
                "description": "Coaxial Cable, 25 ft"
            },
            {
                "itemCode": "CABLE-B07",
                "description": "Coaxial Cable, 10 ft"
            },
            {
                "itemCode": "CABLE-B08",
                "description": "Coaxial Cable, 6 ft"
            },
            {
                "itemCode": "CABLE-B09",
                "description": "Coaxial Cable, 3 ft"
            },
            {
                "itemCode": "CABLE-B10",
                "description": "Coaxial Cable, 1 ft"
            }
        ]
    });
});



app.get('/order/:id', (req, res) => {
    Request.findById(req.params.id).then((response) => {

        res.json({ order: response });
    }).catch((error) => {
        console.log('ERROR', error);
    })
});

app.get('/byname/:name', (req, res) => {
    Request.find({ name: req.params.name }).then((response) => {
        res.json({ order: response });
    }).catch((err) => {
        console.log(err);
    });
});

//search by day
app.get('/search/:date', async (req, res) => {
    try {
        
        const searchDate = req.params.date;
        const startOfDay = new Date(`${searchDate}T00:00:00.000Z`);
        const endOfDay = new Date(`${searchDate}T23:59:59.999Z`);
        const result = await Request.aggregate([
            {
                $match: {
                    date: {
                        $gte: startOfDay,
                        $lte: endOfDay,
                    },
                },
            },
        ]);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//search by month
app.get('/searchmonth/:year/:month', async (req, res) => {
    try {
        const year = parseInt(req.params.year);
        const month = parseInt(req.params.month);
        const startOfMonth = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
        const endOfMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

        const result = await Request.aggregate([
            {
                $match: {
                    date: {
                        $gte: startOfMonth,
                        $lte: endOfMonth,
                    },
                },
            },
        ]);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/searchyear/:year', async (req, res) => {
    try {
      const year = parseInt(req.params.year);
      const startOfYear = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
      const endOfYear = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));
  
      
      const result = await Request.aggregate([
        {
          $match: {
            date: {
              $gte: startOfYear,
              $lte: endOfYear,
            },
          },
        },
      ]);
  
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


app.post('/request', async (req, res) => {

    if (req) {
        console.log('REQUEST REQ ====>', req.body)
    }
    Request.create({
        name: req.body.name,
        date: new Date().getTime(),
        lead: req.body.lead,
        items: req.body.items
    })
        .then(order => {
            res.json({ message: 'message received', order: order.id });
        })
        .catch(err => {
            console.log('Error: ', err);
            res.json({ message: 'Error ocurred, please try again' })
        });
})


// Delete all documents in the collection
app.delete('/delete-all', async (req, res) => {
    try {
        await Request.deleteMany({});
        res.json({ message: 'All documents deleted' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});



//================================================================

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})