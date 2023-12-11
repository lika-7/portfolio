'use client'

import React, { useEffect, useState } from 'react'
import ImageCard from './../ImageCard';
import styled from 'styled-components';
import { SectionStyled } from '../style/Styled';

const Container = styled.div`
  ${SectionStyled}
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
`
interface dataProps {

}

const Project = () => {
  const [cover, setCover] = useState<string[]>([]);
  const [tag, setTag] = useState<string[][]>([]);
  const [name, setName] = useState<string[]>([]);
  const [url, setUrl] = useState<string[]>([]);
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/project');
        if (response.ok) {
          const result = await response.json();
          const coversArray = result.map(project => {
            if(project.cover !== null){
              return project.cover.file.url
            }
            return project.cover
        })
          const tagsArray = result.map(project => (
            project.tag.multi_select.map(tag =>tag.name)
          ))
          const titlesArray = result.map(project => project.title.title[0].plain_text)
          const urlsArray = result.map(project => project.public_url)
          setCover(coversArray)
          setTag(tagsArray)
          setName(titlesArray)
          setUrl(urlsArray)
          setHash(window.location.hash)
        } else {
          console.error('API 요청 실패:', response.statusText);
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {name.map((_,i)=>(
        
        <ImageCard 
          key={i} img = {cover[i]} title = {name[i]} categories = {tag[i]} src = {url[i]} hash = {hash}
        />
      ))}
    </Container>
  )
}

export default Project