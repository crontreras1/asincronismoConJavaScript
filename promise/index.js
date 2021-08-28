//Promesas ES6
const someTimesWillHappen = () => {
    return new Promise((_resolve, reject) => {
        if (false) {
        } else {
            reject('Opss');
        }
    })
}

someTimesWillHappen();
    .then(response => console.log(response));
    .catch(err => console.error(err));

const someTimesWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        }else {
            const error = new Error ('Whoops!');
            reject(error);
        }
    })
}

someTimesWillHappen2();
.then(response => console.log(response))
.catch(err => console.error(err));