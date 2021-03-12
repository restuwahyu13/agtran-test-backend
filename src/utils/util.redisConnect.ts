import IORedis, { Redis } from 'ioredis'

export const redisConnection = (): Redis => {
	return new IORedis({
		host: '127.0.0.1',
		port: 6379,
		maxRetriesPerRequest: 50,
		connectTimeout: 30000,
		enableReadyCheck: true,
		enableAutoPipelining: true
	}) as Redis
}
