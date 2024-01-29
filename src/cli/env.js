const RSS_NAME="RSS_";
process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';

const parseEnv = () => {
    // Write your code here
    const rssVariables =  Object.entries(process.env)
        .filter((el) => el[0].startsWith(RSS_NAME))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(rssVariables);
};

parseEnv();