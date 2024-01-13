try {
    console.log('Start running mongo script');

    db = db.getSiblingDB('customers-db');

    db.fake.insert({foo: 'hello world', bar: 0});

    db.createUser(
        {
            user: "customers_db_owner",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "customers-db"
                }
            ]
        }
    );

    db = db.getSiblingDB('products-db');

    db.fake.insert({foo: 'hello world', bar: 0});

    db.createUser(
        {
            user: "products_db_owner",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "products-db"
                }
            ]
        }
    );

    db = db.getSiblingDB('shopping-db');

    db.fake.insert({foo: 'hello world', bar: 0});

    db.createUser(
        {
            user: "shopping_db_owner",
            pwd: "password",
            roles: [
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