interface IDatabaseConfig {
    connectionString: string
}

export const databaseConfig: IDatabaseConfig = {
    connectionString: process.env.MONGODB_CONNECTION_STRING || ""
}

console.log(databaseConfig);