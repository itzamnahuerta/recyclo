

const { User, Material, Location, MaterialType } = require('./models');

// const createLOCATION = (name, pN, url, pc, lat,long , mat = 'glass') =>
// {
//   return {  name: name,
//     phone_number: PN,
//     url: url,
//     postal_code: pc,
//     latitude: lat,
//     longitude: long,
//     mat: mat,
// }
// }

const main = async () => {
    await Material.destroy({
        where: {}
    });
    await Location.destroy({
        where: {}
    });

    const metal = await Material.create({
        name: 'Metal'
    });

    const glass = await Material.create({
        name: 'Glass'
    });

    const paper = await Material.create({
        name: 'Paper'
    });

    const plastic = await Material.create({
        name: 'Plastic'
    });



    const wood = await Material.create({
        name: 'Wood'
    })

    const textile = await Material.create({
        name: 'Textile'
    })

    const misc = await Material.create({
        name: 'Miscellaneous'
    })

    await User.create({
        name: 'tester 1',
        username: 'tester1',
        email: 'tester1@fakemail.com',
        password: 'test1'
    });

    const newStyle = await Location.create({
        name: 'New Style Recycling',
        phone_number: '7183264175',
        url: 'http://newstylerecycling.com/index.html',
        postal_code: '11378',
        latitude: '40.741895',
        longitude: '-73.989308'
    })



    const greenChip = await Location.create({
        name: 'Green Chip Ewaste Solutions',
        phone_number: '8447830443',
        url: 'https://www.greenchiprecycling.com/',
        postal_code: '11222',
        latitude: '40.7355376',
        longitude: '-73.9444023'
    })

    const simsMunicipal = await Location.create({
        name: 'Sims Municipal Recycling',
        phone_number: '3474298097',
        url: 'https://www.simsmunicipal.com/',
        postal_code: '11232',
        latitude: '40.66239',
        longitude: '-74.0097671'
    })

    const wearCollections = await Location.create({
        name: 'Wearable Collections Clothing Recycling',
        phone_number: '6465154387',
        url: 'http://wearablecollections.com/',
        postal_code: '10001',
        latitude: '40.747337',
        longitude: '-73.997189'
    })

    const leaveNoFootprint = await Location.create({
        name: 'Leave No Footprint',
        phone_number: '6462299282',
        url: 'http://leavenofootprintnyc.com/',
        postal_code: '10032',
        latitude: '40.8350927',
        longitude: '-73.9454337'
    })

    const bigReuse = await Location.create({
        name: 'Big Reuse',
        phone_number: '7187258925',
        url: 'https://bigreuse.org/',
        postal_code: '10032',
        latitude: '40.67225',
        longitude: '-73.996964'
    })

    const cooperTank = await Location.create({
        name: 'Cooper Tank Recycling', 
        phone_number: '7183847727',
        url: 'http://coopertankrecycling.com',
        postal_code: '11237',
        latitude: '40.709921',
        longitude: '-73.928795'
    })

    const greenTreeMorning = await Location.create({
        name: `Green Tree Recycling - Morningside Park’s Down to Earth Farmers Market`, 
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10026',
        latitude: '40.798271',
        longitude: '-73.95253'
    })

    const greenTreeOssining = await Location.create({
        name: `Green Tree Recycling - Ossining’s Down to Earth Farmers Market`, 
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10562',
        latitude: '41.161527',
        longitude: '-73.862395'
    })

    const greenTreeHarvest = await Location.create({
        name: `Green Tree Recycling - Harvest Home Market`, 
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10026',
        latitude: '40.802433',
        longitude: '-73.949015'
    })

    const greenTreeUES = await Location.create({
        name: `Green Tree Recycling - Upper East Side Manhattan`, 
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10029',
        latitude: '40.7907798',
        longitude: '-73.9391947'
    })

    const greenTreeParkSlope = await Location.create({
        name: `Green Tree Recycling - Down to Earth Park Slope Farmers Market`,
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '11215',
        latitude: '40.682534',
        longitude: '-73.976332'
    })

    const greenTreeStuy = await Location.create({
        name: `Green Tree Recycling - Stuyvesant Town Greenmarket`,
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10009',
        latitude: '40.712728',
        longitude: '-74.006015'
    })

    const greenTreeRiverdale = await Location.create({
        name: `Green Tree Recycling - Riverdale Y Sunday Farmers Market`,
        phone_number: '0',
        url: 'https://www.greentreetextiles.org/farmersmarkets/',
        postal_code: '10463',
        latitude: '40.887784',
        longitude: '-73.913587'
    })

    const fabscrap = await Location.create({
        name: `Fabscrap`,
        phone_number: '9292763188',
        url: 'https://fabscrap.org/',
        postal_code: '11220',
        latitude: '40.644524',
        longitude: '-74.022532'
    })



    
    await newStyle.addMaterial(plastic)
    await newStyle.addMaterial(glass)
    await newStyle.addMaterial(metal)
    await greenChip.addMaterial(metal)

    await simsMunicipal.addMaterial(plastic)
    await simsMunicipal.addMaterial(glass)
    await simsMunicipal.addMaterial(metal)

    // await wearCollections.addMaterial()

    await leaveNoFootprint.addMaterial(plastic)
    await leaveNoFootprint.addMaterial(glass)
    await leaveNoFootprint.addMaterial(metal)
    await leaveNoFootprint.addMaterial(paper)

    //Upcycle location
    await bigReuse.addMaterial(wood)
    await bigReuse.addMaterial(textile)

    await cooperTank.addMaterial(paper)
    await cooperTank.addMaterial(wood)
    await cooperTank.addMaterial(metal)

    await greenTreeHarvest.addMaterial(textile)
    await greenTreeMorning.addMaterial(textile)
    await greenTreeOssining.addMaterial(textile)
    await greenTreeParkSlope.addMaterial(textile)
    await greenTreeStuy.addMaterial(textile)
    await greenTreeUES.addMaterial(textile)
    await greenTreeRiverdale.addMaterial(textile)

    await fabscrap.addMaterial(textile)


}

async function run() {
    try {
        await main();
    } catch (e) {
        console.error(e);
    } finally {
        await process.exit()
    }
}

run();