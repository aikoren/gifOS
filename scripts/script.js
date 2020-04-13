let apiGIF = `https://api.giphy.com/v1/gifs/search?q=Stitch&api_key=aRFdVVcA243uTM48EGTq4VH02DzZAtht&limit=5"`

async function loginApi(url) {
  try {
    const rqst = await fetch(url)
    const content = await rqst.json()
    console.log(content)
    let gifURL = content.data[0].images.downsized.url
    return gifURL
  } catch (error) {
    console.log(error)
  }
}

let srcUrl = loginApi(apiGIF)
srcUrl.then((respuesta) => {
  let gifContainer = document.getElementById('gif_sugerencia_1')
  let imageTag = gifContainer.appendChild(document.createElement('img'))
  imageTag.setAttribute('src', respuesta)
  imageTag.classList.add('gif_sugerencia')
})
apiGIF = "https://api.giphy.com/v1/gifs/search?api_key=aRFdVVcA243uTM48EGTq4VH02DzZAtht&q=sailorchibimoon&limit=1&offset=1&rating=G&lang=en"

srcUrl = loginApi(apiGIF);
srcUrl.then((respuesta) => {
  let gifContainer = document.getElementById('gif_sugerencia_2')
  let imageTag = gifContainer.appendChild(document.createElement('img'))
  imageTag.setAttribute('src', respuesta)
  imageTag.classList.add('gif_sugerencia')
})
apiGIF = "https://api.giphy.com/v1/gifs/search?api_key=aRFdVVcA243uTM48EGTq4VH02DzZAtht&q=kitties&limit=1&offset=2&rating=G&lang=en"

srcUrl = loginApi(apiGIF);
srcUrl.then((respuesta) => {
  let gifContainer = document.getElementById('gif_sugerencia_3')
  let imageTag = gifContainer.appendChild(document.createElement('img'))
  imageTag.setAttribute('src', respuesta)
  imageTag.classList.add('gif_sugerencia')
})

apiGIF = "https://api.giphy.com/v1/gifs/search?api_key=aRFdVVcA243uTM48EGTq4VH02DzZAtht&q=Unicorns&limit=1&offset=2&rating=G&lang=en"

srcUrl = loginApi(apiGIF);
srcUrl.then((respuesta) => {
  let gifContainer = document.getElementById('gif_sugerencia_4')
  let imageTag = gifContainer.appendChild(document.createElement('img'))
  imageTag.setAttribute('src', respuesta)
  imageTag.classList.add('gif_sugerencia')
})
