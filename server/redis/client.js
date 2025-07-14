import Redis from "ioredis";


export const client = new Redis({
  host: 'redis', // 👈 this should match the service name in docker-compose.yml
  port: 6379
});
