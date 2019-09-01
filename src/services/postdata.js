export function PostData(type, userData) {
    let BaseURL = 'http://localhost/ywaymalbe/api/viewer_register/';
//let BaseURL = 'http://localhost/socialapi/';

    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}