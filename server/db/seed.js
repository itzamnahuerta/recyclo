const { Material, Location, MaterialType } = require('./models');

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

const main = async() => {
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
    // await bigReuse.addMaterial(wood)




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

