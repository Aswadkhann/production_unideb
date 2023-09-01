import React from 'react';
import Link from 'next/link'; // Import Next.js Link


// Define the types
interface Link {
  title: string;
  url: string;
}

interface AboutData {
  title: string;
  links: {
    [key: string]: Link;
  };
  bullets: {
    // Define the bullets structure if needed
  };
  text: TextItem[];
  image: string; // Add image property
}

interface TextItem {
  heading: string;
  content: string;
}

// Props for the component
interface AboutPageProps {
  data: AboutData;
}

const SimilarPageStructure: React.FC<AboutPageProps> = ({ data }) => {
    const renderContentWithLinks = (content: string) => {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let lastIndex = 0;
        const elements = [];
      
        content.replace(linkRegex, (match, text, key, offset) => {
          // Add the preceding text as a text element
          if (offset > lastIndex) {
            elements.push(content.substring(lastIndex, offset));
          }
      
          // Extract the key (e.g., "link_1") from the link format
          const linkKey = key.trim();
      
          // Check if the key exists in data.links
          if (linkKey in data.links) {
            const url = data.links[linkKey].url;
      
            // Add the link as a Next.js Link component with target="_blank"
            elements.push(
              <Link target='_blank' className=' font-bold text-[#F5B418] hover:text-[#144438] hover:underline' href={url} key={offset}>
                {text}
              </Link>
            );
          } else {
            // If the key doesn't exist, render it as plain text
            elements.push(text);
          }
      
          lastIndex = offset + match.length;
      
          return match;
        });
      
        // Add the remaining text after the last link
        if (lastIndex < content.length) {
          elements.push(content.substring(lastIndex));
        }
      
        return elements;
      };
      
      

  return (
    <div className=' text-[18px]'>
      <img src={data.image} className='h-[310px] object-cover w-full' alt="About Image" />
      <div className=' px-4 lg:px-[15%] pt-12'>
        <h1 className='text-[27px] text-[#155744] pb-4 font-bold'>{data.title}</h1>
        {/* <ul>
          {Object.keys(data.links).map((key) => (
            <li key={key}>
              <Link href={data.links[key].url}>
                {data.links[key].title}
              </Link>
            </li>
          ))}
        </ul> */}
        <div>
          {data.text.map((item, index) => (
            <div key={index} className=' pb-4 leading-8 text-justify'>
              <h2>{item.heading}</h2>
              <p>{renderContentWithLinks(item.content)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPageStructure;
