import React from 'react'
import { useState } from 'react';
import clsx from 'clsx';


const MAX_PARAGRAPHS = 2;

const AboutMeSection = ({description}) => {
    
    const [expanded, setExpanded] = useState(false);

    if (!description) return null;

    const paragraphs = description.split('\n').filter(p => p.trim() !== '');
    const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, MAX_PARAGRAPHS);

  return (
    <div className='flex flex-col justify-start items-start gap-3 relative w-full max-w-4xl duration-200 transition-all'>
      <h1 className='text-2xl font-bold mb-2'>About me</h1>

      <div className={clsx(
        'relative overflow-hidden transition-all duration-300',
        !expanded && 'max-h-[200px]'
      )}>
        <div className='flex flex-col gap-4'>
          {visibleParagraphs.map((para, index) => (
            <p key={index} className='text-sm text-gray-700 leading-relaxed'>
              {para}
            </p>
          ))}
        </div>


        {!expanded && (
          <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none'></div>
        )}
      </div>

      {paragraphs.length > MAX_PARAGRAPHS && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-main font-semibold text-sm mt-2 self-start'
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}

export default AboutMeSection
