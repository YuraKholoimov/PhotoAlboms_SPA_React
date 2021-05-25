export default class GotResorses {
    async resorses(url) {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }

        return await res.json()

    }

     
}


// export default function Request() {
//     const url = 'https://jsonplaceholder.typicode.com/photos',
//     data = {header:"img",
//             id: "1",
//             url:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"
//         }

//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(respons => respons.json())
//     .then(json => console.log(json))
//     .catch(error => console.error('ERROR', error))
// }
