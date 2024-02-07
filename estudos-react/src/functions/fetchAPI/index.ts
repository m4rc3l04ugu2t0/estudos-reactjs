interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface PostWithCover extends Post {
  cover: string
}

export const fetchAPI = async (): Promise<PostWithCover[] | Error> => {
  try {
    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const photoResponse = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    )

    if (!postResponse.ok || !photoResponse.ok) {
      throw new Error('Erro ao buscar posts ou fotos')
    }

    const [posts, photos] = await Promise.all([
      postResponse.json(),
      photoResponse.json()
    ])

    const postsAndPhotos: PostWithCover[] = posts.map((post: Post) => {
      const matchingPhoto = photos.find((photo: Photo) => photo.id === post.id)

      if (matchingPhoto) {
        return { ...post, cover: matchingPhoto.url }
      }

      return { ...post, cover: '' }
    })

    return postsAndPhotos
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
