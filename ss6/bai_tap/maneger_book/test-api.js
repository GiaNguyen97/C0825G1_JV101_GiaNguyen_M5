import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books';

async function testApi() {
    try {
        console.log("1. Testing GET All...");
        const list = await axios.get(API_URL);
        console.log("GET Success. Count:", list.data.length);
        if (list.data.length > 0) {
            console.log("Sample item:", list.data[0]);
        }

        console.log("\n2. Testing POST...");
        const newBook = { title: "Test Book", quantity: 10 };
        const createRes = await axios.post(API_URL, newBook);
        console.log("POST Success:", createRes.status, createRes.data);

        console.log("\n3. Testing PUT...");
        // Use an existing ID or a fake one?
        // Usually mock servers usually only allow editing existing items found in db.json
        // Let's try to edit the first item from the list
        if (list.data.length > 0) {
            const firstId = list.data[0].id;
            const updateRes = await axios.put(`${API_URL}/${firstId}`, {
                ...list.data[0],
                title: "Updated Title"
            });
            console.log(`PUT Success (ID: ${firstId}):`, updateRes.status, updateRes.data);
        } else {
            console.log("Skipping PUT test (no items)");
        }

    } catch (error) {
        console.error("API Error:", error.response ? error.response.status : error.message);
        if (error.response) console.error("Data:", error.response.data);
    }
}

testApi();
