function projectObject(source, prototype) {
    const projected = {};
    for (const key in prototype) {
        if (source.hasOwnProperty(key)) {
            if (typeof prototype[key] === "object" && prototype[key] !== null) {
                projected[key] = projectObject(source[key], prototype[key]);
            } else {
                projected[key] = source[key];
            }
        }
    }
    return projected;
}

const source = {
    name: "John Doe",
    age: 30,
    address: { city: "New York", zip: 10001, country: "USA" },
    email: "john.doe@example.com",
};

const prototype = { name: null, address: { city: null } };

console.log(projectObject(source, prototype));
