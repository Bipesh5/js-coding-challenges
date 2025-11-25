let count = 1;
const id = setInterval(() => {
    console.log(count);
    if (count === 5) {
        clearInterval(id);
    }
    count++;
}, 1000);