const box = document.querySelector("box")

async function fetchData(name) {
    
    try{
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

        if(!response.ok){
                        throw new Error("Could not fetch resources");
                    }

                    const data = await response.json()
                    
                    console.log(data);
    }
    catch (error){
console.error(error);


    }
}
fetchData('Uzbekistan')


// fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resources");
//         }
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error))