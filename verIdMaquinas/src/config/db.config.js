module.exports = {
    HOST: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : '34.70.80.75',
    USER: process.env.MYSQL_USER ? process.env.MYSQL_USER : 'root',
    PASSWORD: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : 'root',
    DB: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'Tesis',
    PORT: process.env.MYSQL_PORT ? process.env.MYSQL_PORT : 3306,
};