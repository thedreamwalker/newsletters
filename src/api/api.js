const url = 'http://sometest/api'

const useFetch = async (request, obj) => {
  try {
    let response = await fetch(`${url}`, {
      method: request,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    let data = await response.json()

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export { useFetch as useFetch }
