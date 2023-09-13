import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrcset = [];
  const jpgSrcset = [];
  [1,2,3].forEach((idx) => {
    avifSrcset.push(`${src.replace('.jpg', '@' + idx + 'x.avif')} ${idx}x`);
    jpgSrcset.push(`${src.replace('.jpg', '@' + idx + 'x.jpg')} ${idx}x`);
  });
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
      <picture>
        <source
          type="image/avif"
          srcSet={avifSrcset.join(',')}
        />
        <Image src={src} srcSet={jpgSrcset.join(',')}/>
      </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
object-fit: cover;
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
