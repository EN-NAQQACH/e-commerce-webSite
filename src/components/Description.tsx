"use client"
import React,{useState} from 'react'
import DOMPurify from 'isomorphic-dompurify';

function Description({description} : {description : any}) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    return (
        <div>
            <div className={`text-justify text-[13px] leading-5 font-[550] text-gray-500 ${
          showFullDescription ? '' : 'line-clamp-3'
        }`}  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(description),
                  }} >
            </div>
            <button
        onClick={() => setShowFullDescription(!showFullDescription)}
        className="text-gray-700 font-semibold hover:underline mt-2"
      >
        {showFullDescription ? 'Read Less' : 'Read More'}
      </button>
        </div>
    )
}

export default Description