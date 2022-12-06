const parseEnv = () => {
    // Write your code here
    Object.entries(process.env)
        .filter((el) => el[0].startsWith('RSS_'))
        .forEach((el) => {
            console.log(`${el[0]}=${el[1]}`);
        });
};

parseEnv();