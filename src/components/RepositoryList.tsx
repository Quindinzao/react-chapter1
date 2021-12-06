import { useState, useEffect } from 'react'

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

// const repository = [
//   {
//     name: 'unform1',
//     description: 'Forms in React1',
//     link: 'https://github.com/rocketseat'
//   }, 
//   {
//     name: 'unform2',
//     description: 'Forms in React2',
//     link: 'https://github.com/Quindinzao'
//   }, 
//   {
//     name: 'unform3',
//     description: 'Forms in React3',
//     link: 'https://github.com/unform/unform'
//   }, 
// ]

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>
      
      <ul>
        {/* <RepositoryItem repository={repository[0]} />
        <RepositoryItem repository={repository[1]} />
        <RepositoryItem repository={repository[2]} />
        <RepositoryItem /> */}
        {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>        
    </section>
  )
}