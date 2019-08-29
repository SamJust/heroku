fetch('http://localhost:3000/').then(data => data.text()).then(data => {
    console.log(data);
});