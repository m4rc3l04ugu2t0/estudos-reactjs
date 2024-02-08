export const mutationPosts = async (newPost: { id: string; title: string }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })

    if (!response.ok) {
      throw new Error('Erro ao buscar posts ou fotos')
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro durante a solicitação:', error.message)
      return error
    } else {
      console.error('Erro desconhecido:', error)
      return new Error('Erro ao buscar dados')
    }
  }
}
