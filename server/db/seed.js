const {
    User,
    Material,
    Location
} = require('./models');

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
    await newStyle.addMaterial(glass)
    await newStyle.addMaterial(metal)
    await newStyle.addMaterial(paper)

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