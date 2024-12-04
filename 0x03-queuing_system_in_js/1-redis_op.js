import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Event for successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event for error
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Function to set a new key-value pair in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print); // Prints confirmation message
}

// Function to get and display a value for a given key
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(reply);
    }
  });
}

// Function calls
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
