const url = 'http://sometest/api';

const useFecth = async (request, obj) => {

  const sendFetch = () => {

    fetch(`${url}`, {
      method: request,
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify(obj)
  })
      .then(response => {
          return response.json()
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('er', error));
  }

  sendFetch(request, obj);
}

export {useFecth};