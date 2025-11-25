function getCity(user) {
    return user?.address?.current?.city ?? "Unknown";
}

const user1 = { name: "Alice", address: { current: { city: "Sanepa" } } };
const user2 = { name: "Bob", address: { current: {} } };
const user3 = { name: "Carol", address: null };
const user4 = { name: "Dave" };
const user5 = null;

console.log(getCity(user1)); // "Sanepa"
console.log(getCity(user2)); // "Unknown"
console.log(getCity(user3)); // "Unknown"
console.log(getCity(user4)); // "Unknown"
console.log(getCity(user5)); // "Unknown"