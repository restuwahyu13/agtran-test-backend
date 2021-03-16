import IORedis, { Redis } from 'ioredis'

export const redisConnection = (): Redis => {
	return new IORedis({
		host: process.env.REDIS_HOST,
		port: +process.env.REDIS_PORT,
		maxRetriesPerRequest: 50,
		connectTimeout: 30000,
		enableReadyCheck: true,
		enableAutoPipelining: true
	}) as Redis
}
