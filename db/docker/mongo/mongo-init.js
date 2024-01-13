try {
    console.log('Start running mongo script');

    db = db.getSiblingDB('customers-db');

    db.fake.insert({foo: 'hell world', bar: 0});

    db = db.getSiblingDB('products-db');

    db.fake.insert({foo: 'hell world', bar: 0});

    db = db.getSiblingDB('shopping-db');

    db.fake.insert({foo: 'hell world', bar: 0});

    db = db.getSiblingDB('admin');

    db.createUser(
        {
            user: "mongouser",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "customers-db"
                },
                {
                    role: "readWrite",
                    db: "products-db"
                },
                {
                    role: "readWrite",
                    db: "shopping-db"
                }
            ]
        }
    );
} catch (error) {
    console.log(`Failed to run the script:\n${error}`);
}